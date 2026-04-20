---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
  - binance
Creation Date: 2024-12-26, 21:50
Last Date: 2026-04-20T08:15:36+08:00
References:
draft:
description: Database indexing reference covering B-tree fundamentals for O(log n) lookups, the cardinality vs selectivity distinction, why low-selectivity queries defeat indexes, the Postgres query planner and the ANALYZE fix for stale statistics, and GIN (Generalized Inverted Index) internals including posting lists, pluggable opclasses, B-tree vs GIN trade-offs, write amplification, the pending list batching mechanism, the meta node at page 0, index bloat detection, and stop-word-driven full-text search.
---
## Abstract
---
```sql title="Creating an index on the name column of the people table"
CREATE INDEX idx_name
ON people (name);
```

- Database indexing is a data structure based on one or more columns, usually a single column, to improve query performance. This data structure **organises the values in the column in a way that enables faster search speed (`O(log n)`)** compared to full table scan's `O(n)`
- One common data structure used for this purpose is the **B-tree**. The performance gain remains even if the values in the column are unique, as **each unique value is represented as a node in the B-tree**

>[!important]
> If the data you're querying is **stored in the index itself**, the speed is even faster, as there's **no need to access the table** to fetch the data from the table's rows.

>[!attention]
> Indexes lose their effectiveness with `LIKE %ZA%`, as it is **a pattern rather than a specific value** that can be used to quickly locate data in **O(log n)** time. **A full table scan is required to find all the rows that match this pattern**.
> 
> However, [Trigram search](https://en.wikipedia.org/wiki/Trigram_search) solves the issue with `LIKE %ZA%` by breaking down the string into **trigrams** (three-character substrings).

>[!tool] Performance analysis
> Prefix the SQL query with `EXPLAIN ANALYZE` to check the time taken by the query, and use `IGNORE INDEX()` to force the database to avoid using an index.

>[!code] Drop index
> ```sql title="MySQL"
> DROP INDEX index_name ON table_name;
> ```
> Can be used to drop [[Database Search#Full-text Search|full-text search index]].

## Cardinality vs Selectivity
---
Easy to use interchangeably, they are not the same thing.

| Term | Property of | Definition | Example |
|---|---|---|---|
| **Cardinality** | The column | Number of **distinct values** | `gender` column, cardinality = 2 |
| **Selectivity** | A specific query predicate | **Fraction of rows the predicate returns**, 0..1 | `WHERE gender='male'` selectivity ≈ 0.5 |

- **High cardinality tends to produce selective queries, but does not guarantee it.** A column can have millions of distinct values, yet if the searched value happens to be common (skewed distribution), that particular query still returns a large fraction of rows
- **Selective queries (small fraction returned) love indexes.** Only a few rows to fetch, the random-I/O cost of index lookup pays off
- **Non-selective queries (large fraction returned) defeat indexes.** The random I/O of jump-to-index → follow-pointer → jump-to-heap, repeated per row, becomes more expensive than a single sequential scan of the whole table

>[!tip] Terminology trap
> Some writers say "high selectivity" meaning "very selective query, few rows". Numerically that is a **small** fraction. Prefer to speak in terms of the fraction itself ("predicate returns 1% of rows") to avoid ambiguity.

## Index Selectivity
---
- Create indexes on columns that usually produce **selective queries** (predicates that return a small fraction of the table). High-cardinality columns tend to produce them
- A column like `gender` is a poor candidate because it typically has only 2-3 distinct values. A query like `WHERE gender = 'male'` would match ~50% of the table. At that point, the query optimiser will likely prefer a full table scan over the index because sequential disk reads are faster than the random I/O pattern of index lookups (jump to index → find pointer → jump to row). This overhead compounds quickly across millions of rows

>[!tip] Rule of thumb
> Indexes become ineffective when selecting more than ~10-15% of the table.

>[!important] Exception
> **Composite indexes**: Low-cardinality columns can still be useful as part of a multi-column index, like `(gender, created_at, city)` where the combination is highly selective.
> 
> **Skewed distributions**: If 99% are male and 1% are female, an index helps queries filtering for female

## Query Planner and Statistics
---
- Postgres does **not** pick index-or-scan by looking at the query alone. The **cost estimator** uses periodically-collected statistics (row count, value distribution, `n_distinct`, histograms) to estimate the **fraction of rows each filter will match**, then weighs random I/O of an index lookup against sequential I/O of a full scan
- Stats live in `pg_statistic`, refreshed by **autovacuum**'s `ANALYZE` pass and after significant writes

>[!caution] Stale statistics break indexes
> If stats are out of date (big bulk insert, autovacuum behind, a never-analysed table), the estimator miscalculates selectivity and can ignore a valid index in favour of a full scan. Fix by forcing a refresh:
> ```sql
> ANALYZE my_table;
> -- or per column
> ANALYZE my_table (my_col);
> ```

- Inspect the planner's choice with `EXPLAIN ANALYZE`. If "Rows Estimated" diverges from "Rows Actual" by an order of magnitude, stats are the culprit

## GIN Index (Postgres)
---
- **GIN** = **Generalized Inverted iNdex**. A Postgres index type for values that are **composite**: arrays, `tsvector` (full-text), `jsonb`, `hstore`, trigrams. B-tree indexes a single ordered key per row; GIN indexes **every piece inside the value**
- Core trade: GIN pre-explodes each row at insert time, so reads become fast containment lookups, but writes pay the cost

### B-tree vs GIN
| Criteria | B-tree | GIN |
|---|---|---|
| Best for | Equality, range, ordered scans on scalar columns | Containment, search inside arrays / documents / full-text |
| Query shape | `=`, `<`, `>`, `BETWEEN`, `ORDER BY` | `@>`, `?`, `to_tsquery`, trigram `%` |
| Entries per row | 1 | N, one per "piece" of the value |
| Write cost | One page update per row | N page updates per row |
| Read speed | O(log n) walk down the tree | O(1) lookup of the key, then scan its **posting list** |

### Core Mechanism
- **Extract function** runs at insert time and turns each row's column value into a **set of keys** (tokens for full-text, element values for arrays, paths for jsonb)
- Each key points to a **posting list**: a sorted list of row IDs (`ctid`s) that contain that key
- Queries look up the keys touched by the WHERE clause and return the union or intersection of their posting lists

### Why "Generalized"
- GIN is a framework, not a fixed index. Anyone can plug in an **opclass** (operator class) that defines "given a value of type T, what are its pieces?" That's how the same GIN machinery supports `tsvector`, arrays, `jsonb`, trigram, and user-defined types

### Intersection Benefit
- Multi-condition queries like `WHERE tags @> ARRAY['postgres', 'indexing'] AND author = 'xy'` fetch each posting list, then **intersect** them
- More filters = smaller intersected set = faster. Opposite of how most index types behave, where extra columns need a composite index to help

### Write Amplification
- **Write amplification** = one logical row change triggers many physical disk writes. GIN amplifies far more than B-tree because it indexes _every piece_ of each row, not just one key
- B-tree: inserting a row touches **1 index entry** (the single indexed key)
- GIN: inserting a row touches **N index entries**, one per extracted piece. For a long article with a 500-token `tsvector`, that is 500 posting list updates per `INSERT`, plus another 500 on `UPDATE` of the indexed column, plus another 500 on `DELETE`

```text
B-tree:  INSERT row  ──►  1 heap write + 1 index entry
GIN:     INSERT row  ──►  1 heap write + N index entries  (N = tokens, array elements, jsonb keys)
```

- Without help, this would make every GIN insert 500× slower than the heap write. Postgres hides most of the cost behind the [[#Pending List (Write Batching)|pending list]], which defers per-key updates into bulk merges. Amplification is still real, just paid in larger batches
- Mitigations when the batched cost still hurts: strip **stop words** so the token set is smaller, use shorter `tsvector` fields (e.g. title only, not full body), or **partition** the table so each partition's GIN stays small

### Pending List (Write Batching)
- Naive GIN would do 500 B-tree inserts per row. Postgres avoids this with a **pending list**: a staging area inside the index where new entries land in insert order
- Autovacuum (or `gin_clean_pending_list()`) periodically drains the pending list into the main GIN tree in one bulk merge, amortising the cost
- Knob: `gin_pending_list_limit` (default 4 MB per index) caps pending list size before a foreground flush

### Meta Node
- Every GIN index starts with a **meta page at disk page 0**. Postgres can always find it by page number, without chasing pointers first
- The meta page holds the pending list head, version info, and pointers to the entry tree root. Fixed location = stable entry point for every lookup

### Index Bloat
- The real bloat risk is **one index getting enormous**, not "too many indexes". A table with a GIN on a long-text column at 500 keys per row becomes many gigabytes of index on only a few gigabytes of table
- Symptoms: slow inserts, high autovacuum activity, the index being larger than the heap. Check with:
```sql
SELECT indexrelname, pg_size_pretty(pg_relation_size(indexrelid))
FROM pg_stat_user_indexes
WHERE schemaname = 'public'
ORDER BY pg_relation_size(indexrelid) DESC;
```

### Stop Words and Full-text
- For `tsvector`, the text search configuration strips **stop words** (`the`, `and`, `is`) before indexing. Keeps the posting lists focused on meaningful tokens, shrinks the index, and avoids useless hits at query time
- See [[Database Search#Full-text Search|Full-text Search]] for MySQL's equivalent story

## References
---
- [Database Indexing Explained (with PostgreSQL) - YouTube](https://youtu.be/-qNSXK7s7_w?si=k6-YgArF5WOQsWCg)
- [PostgreSQL docs - GIN Indexes](https://www.postgresql.org/docs/current/gin.html)
- [PostgreSQL docs - Planner statistics and ANALYZE](https://www.postgresql.org/docs/current/planner-stats.html)
