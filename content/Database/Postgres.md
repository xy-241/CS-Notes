---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - postgres
Creation Date: 2024-02-18, 18:28
Last Date: 2026-04-19T19:50:08+08:00
References:
draft:
description: Postgres reference covering pg_dump/pg_restore migration including pgsync for large datasets, database and role setup with schema-scoped privileges, VACUUM and VACUUM FULL for reclaiming disk after DELETE under MVCC, autovacuum inspection, and NeonDB serverless Postgres as a managed alternative.
---
## Abstract
---
- A popular relational database
- Grab a free postgres db with [[#Neon DB]]!
- Obtain the Postgres Version using `SELECT version();`

>[!tip] Resolving PostgreSQL pg_dump server version mismatch
> The newer version of Postgres isn't included in a lot of the [[Package Manager]], you need to add the package repository in manually! You can find many online tutorials on this, [here](https://vishalvyas.com/how-to-resolve-pg-dump-error-aborting-because-of-server-version-mismatch/) is one for APT package manager.
> 
> On MacOs, you can install with `brew install postgresql@<version_number>`. In order to use the new version, you have to `brew unlink postgresql@<old_version>`, then `brew link --force postgresql@<new_version>`.

## Postgres Migration
---
>[!tip] Connection String Format
> `postgres://[user]:[password]@[db_hostname]/[dbname]`

- Dump from one DB to another
```bash 
# Export
pg_dump -O -Fc -v -d <source_database_connection_string> -f <dump_file_name>

# Import
pg_restore -v -d <destination_database_connection_string> <dump_file_name>
```

- Export data out in sql format
```bash
pg_dump -O -v -d <source_database_connection_string> > export.sql
```

- For more information, refer to this [guide](https://www.enterprisedb.com/postgres-tutorials/how-use-pgdump-and-pgrestore-multi-host-enviorment)

>[!important] pgsync
> `pg_dump`/`pg_restore` can be slow for large amount of data like 500GB, thus incurring a longer downtime.
> 
> Consider `pgsync` which offers a faster & live migration.

## Postgres VACUUM
---
- A `DELETE` in Postgres does **not** immediately free disk. Under **MVCC** (multi-version concurrency control), deleted rows are kept as **dead tuples** so in-flight transactions keep a consistent view. The page bytes stay until vacuumed, so `du` / volume usage won't drop after a large `DELETE` on its own

```sql
-- 1. mark rows for reclaim
DELETE FROM big_table WHERE created_at < NOW() - INTERVAL '30 days';

-- 2a. reclaim space inside existing pages (non-blocking, online)
VACUUM ANALYZE big_table;

-- 2b. rewrite the whole table into a fresh file (blocking, releases OS disk)
VACUUM FULL big_table;
```

| Command | Lock | Releases disk? | When |
|---|---|---|---|
| `VACUUM` | `SHARE UPDATE EXCLUSIVE`, reads and writes continue | No, just reuses dead pages for new inserts | Routine, handled by **autovacuum** automatically |
| `VACUUM FULL` | `ACCESS EXCLUSIVE`, blocks everything on the table | Yes, rewrites the table into a new file and drops the old one | One-off reclaim after a large purge when the volume is tight |

>[!caution] VACUUM FULL needs free disk to finish
> `VACUUM FULL` copies live rows into a **new** relation file before dropping the old one, so disk usage roughly **doubles** for that table during the run. Extend the volume first (for example [[Fly.io#Fly.io Volume Snapshots|on Fly.io]]) if the disk is already tight.

- **Autovacuum** handles routine `VACUUM` + `ANALYZE` in the background based on dead-tuple thresholds. Inspect activity with:
```sql
SELECT relname, n_dead_tup, last_autovacuum
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;
```

## Postgres Database Setup
---

```sql
-- 1) Create DB and login role
CREATE DATABASE new_db_name;
CREATE USER new_db_username WITH PASSWORD 'new_db_user_password';

-- 2) Give the user the right to connect/create temp schemas in the DB
GRANT ALL PRIVILEGES ON DATABASE new_db_name TO new_db_username;
-- (equivalent to CONNECT, CREATE, TEMP on the database)

-- 3) Create a dedicated schema owned by the app user
\c new_db_name
CREATE SCHEMA IF NOT EXISTS new_schema_name AUTHORIZATION new_db_username;

-- 4) Prefer setting search_path on the role (not DB-wide)
ALTER ROLE new_db_username SET search_path = new_schema_name, public;

-- 5) Ensure the user can use the schema and access objects
GRANT USAGE ON SCHEMA new_schema_name TO new_db_username;
```

## Neon DB
---
- Serverless [[Postgres]]
- [Billing - Neon Docs](https://neon.tech/docs/introduction/usage-metrics)

>[!code] Neon_DB CLi Setup
> ```bash
> brew install neonctl
> neonctl auth
> neonctl projects list
> ```

>[!info] Data migration to NeonDB
> Refer to [[Postgres#Postgres Migration]], more details see [Data Migration to Neon](https://neon.tech/docs/import/import-intro).