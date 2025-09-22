---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
  - OS
Creation Date: 2025-09-22, 15:37
Last Date: 2025-09-22T15:56:27+08:00
References:
draft:
description: DuckDB is a fast, embedded columnar database with vectorized execution, SIMD, and Parquet/Arrow support for efficient local analytics.
---
## Abstract
---
- _“SQLite for analytics”_: lightweight, embedded, great for data scientists, local OLAP

## Vectors vs Rows
---
- **Vectorized execution:** processes data in **chunks of ~2k values per column** (default `STANDARD_VECTOR_SIZE ≈ 2048`)
- **Why it’s fast:** scans, filters, and aggregates run on batches instead of one row at a time

>[!important] When it’s less ideal: if you need most columns of every row
> Some mitigations:
> - **Late materialization & selection vectors** → only fetch extra columns for rows that survive filters.
> - **Vectorized operators** → gather multiple columns in cache-friendly batches.

## SIMD Acceleration
---
- **SIMD within vectors:** one instruction processes many values at once (AVX2/AVX-512, ARM NEON).
- DuckDB uses hand-written **C++ intrinsics** for comparisons, masks, null handling, aggregates, and **compiler auto-vectorization** for tight loops.
- **Tricks used:** bitmask filters, bit-packed decoding, branchless comparisons, null-aware ops.

## Embedded Design & Threads
---
- **Embedded = no client/server overhead:** no [[Socket|sockets]] or [[Inter-Process Communication|IPC]] → query start-up is near-zero.
- Tasks run across a [[Thread Pool|thread pool]] → not just “one thread per query.”

## Storage Formats
---
- **CSV:** slowest for storage (good only for ad-hoc).
- **Parquet:** columnar, compressed, supports predicate/column pushdown → best for data lakes.
- **`.duckdb`:** native persistent format for local DBs.
- **Arrow/IPC:** zero-copy interchange with other tools.
- With Parquet/duckdb → read only needed columns and row groups.