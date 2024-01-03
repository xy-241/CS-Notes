---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-09-18T10:39:29+08:00
Last Date: 2023-09-18T10:39:29+08:00
References:
---



## Troubleshooting
---
- The EFS must be in the same [[Availability Zone]] as the instance that wants to have [[ECS]] be mounted with
- [[Security Group]] of [[EFS]] must allow inbound & [[Security Group]] of instance must allow outbound
- Requires [[VPC]]'s [`enable_dns_hostnames`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc#enable_dns_hostnames)


## Terminologies
---
### Mount Target
- [[EFS]]'s presence in the [[VPC#Subnet]] for other instances in the subnet to mount the [[EFS]]