---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - postgres
Creation Date: 2024-02-18, 18:28
Last Date: 2024-02-18T18:57:48+08:00
References: 
draft: 
description: Postgres Starter Guide
---
## Abstract
---
- A popular relational database
- Grab a free postgres db with [[Neon DB]]!
- Obtain the Postgres Version using `SELECT version();`

## Postgres Migration
---
>[!tip] Connection String Format
> `postgres://[user]:[password]@[db_hostname]/[dbname]`

```bash title="Dump from one DB to another"
# Export
pg_dump -O -Fc -v -d <source_database_connection_string> -f <dump_file_name>

# Import
pg_restore -v -d <destination_database_connection_string> <dump_file_name>
```

```bash title="Export data out in sql format"
pg_dump -O -v -d <source_database_connection_string> > export.sql
```

