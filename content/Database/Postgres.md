---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - postgres
Creation Date: 2024-02-18, 18:28
Last Date: 2024-04-18T22:24:43+08:00
References: 
draft: 
description: Postgres Starter Guide
---
## Abstract
---
- A popular relational database
- Grab a free postgres db with [[#Neon DB]]!
- Obtain the Postgres Version using `SELECT version();`

>[!tip] Resolving PostgreSQL pg_dump server version mismatch
> The newer version of Postgres isn't included in a lot of the [[Package Manager]], you need to add the package repository in manually! You can find many online tutorials on this, [here](https://vishalvyas.com/how-to-resolve-pg-dump-error-aborting-because-of-server-version-mismatch/) is one for APT package manager.

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