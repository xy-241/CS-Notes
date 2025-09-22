---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
  - OS
Creation Date: 2025-09-22, 15:52
Last Date: 2025-09-22T15:54:34+08:00
References:
draft:
description: Compare DuckDB, SQLite, Postgres, and ClickHouse across execution model, SIMD support, storage layout, parallelism, scalability, and best use cases to choose the right database for analytics or OLTP workloads.
---
| Feature / Design     | **DuckDB** 🦆                                          | **SQLite** 📜                   | **Postgres** 🐘                                 | **ClickHouse** ⚡                                                 |
| -------------------- | ------------------------------------------------------ | ------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------- |
| **Execution model**  | **Vectorized** (2k values per column)                  | Row-at-a-time                   | Row-at-a-time (some batching)                   | **Vectorized**, columnar                                         |
| **SIMD usage**       | Yes (AVX/NEON intrinsics, auto-vectorization)          | No                              | Limited                                         | Yes (broad SIMD usage in scans & aggregates)                     |
| **Storage layout**   | Columnar (`.duckdb`, Parquet, Arrow)                   | Row store                       | Row store                                       | Columnar (native format + Parquet/ORC integration)               |
| **Best for**         | Embedded analytics (OLAP on local data/Parquet)        | Small apps, embedded OLTP       | Full-featured OLTP/OLAP hybrid                  | Distributed, large-scale OLAP                                    |
| **Parallelism**      | Yes: in-process **morsel-driven scheduler**            | No (single-threaded)            | Yes (process-based, higher overhead)            | Yes: **massively parallel**, multi-node clusters                 |
| **Deployment**       | Embedded, in-process                                   | Embedded, in-process            | Client/server daemon                            | Distributed client/server (scale-out cluster)                    |
| **I/O pushdown**     | Yes: projection + predicate pushdown for Parquet/Arrow | N/A                             | Limited (index-based)                           | Yes: column/partition pruning, compression indexes               |
| **Overhead**         | Very low (same-process threads, no IPC)                | Very low (single-threaded)      | Higher (IPC, process-per-query)                 | Moderate (network RPC, cluster coordination)                     |
| **OLTP performance** | Weak                                                   | Strong                          | Strong                                          | Weak (not designed for transactional workloads)                  |
| **OLAP performance** | Excellent (SIMD + columnar + vectorized, embedded)     | Poor                            | Good (but slower vs columnar)                   | **Excellent at scale** (terabytes → petabytes, distributed)      |
| **Scalability**      | Single-machine (fits well into laptops, servers)       | Single-machine                  | Scales vertically with replication/partitioning | Horizontal scale-out (clusters across 100s of nodes)             |
| **Common use cases** | Data science, local analytics, Python/R notebooks      | Mobile apps, small embedded DBs | Production transactional DBs, hybrid workloads  | Big data analytics, event logs, monitoring, real-time dashboards |