---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
  - gcp
  - hacktron
  - devops
Creation Date: 2025-08-28, 08:50
Last Date: 2025-08-28T09:11:07+08:00
References:
draft:
description: Understand how Redis clusters support distributed systems like Kubernetes. Learn about GCP Memorystore for Redis, high availability with replicas, and persistence options for durability.
---
## Abstract
---
- In distributed systems like [[Kubernetes]], we can have app instances running on multiple machines. In such cases, we can deploy a Redis cluster, and all the app instances read/write from the same cluster


>[!important] Managed Redis
> Managed Redis makes cluster manegement easier!
> 
> On GCP, **Memorystore for Redis** is the usual pick. It integrates well with GKE over private VPC. Ops (patching, monitoring, failover) are handled for you. If you need sharding or persistence, use **Memorystore Redis Cluster**.

>[!important] Handling failures and persistance
> Replicas provide **high availability**, but replication is async, so you may lose some writes on failover.
> 
> For durability, enable **persistence** (AOF/RDB) or scheduled **backups**. In GCP, only **Memorystore Redis Cluster** supports [managed persistence](https://cloud.google.com/memorystore/docs/cluster/manage-persistence).
