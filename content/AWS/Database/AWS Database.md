---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-08-23T15:59:39+08:00
Last Date: 2024-01-25T18:16:03+08:00
References: 
---
## RDS
---
- List out the endpoint of all RDS instances inside an account
```bash
aws rds describe-db-instances | jq ".DBInstances[].Endpoint"
```

## Dynamodb
---
### Read capacity
1. One _read capacity unit_ represents one strongly consistent read per second, or two eventually consistent reads per second, for an item up to 4 KB in size
2. Transactional read requests require two read capacity units to perform one read per second for items up to 4 KB

### Write capacity
1. One _write capacity unit_ represents one write per second for an item up to 1 KB in size
2. Transactional write requests require 2 write capacity units to perform one write per second for items up to 1 KB

### Managed Backup: Point-in-time recovery
- A backup is auto created when table is deleted, naming convention of ``table-name$DeletedTableBackup``

>[!caution] Restoring from backup
>We need to restore the backup to a different table, cant restore in-place

## References
---
- [Read/write capacity mode](https://docs.aws.amazon.com/pdfs/amazondynamodb/latest/developerguide/dynamodb-dg.pdf#HowItWorks.ReadWriteCapacityMode)
- [Point-in-time recovery: How it works](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery_Howitworks.html?icmpid=docs_dynamodb_help_panel_hp_pitr)