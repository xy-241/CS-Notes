---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-09-17T17:31:00
Last Date: 2023-12-07T13:59:45+08:00
References: 
---
## Abstract
- A lightweight container orchestration service 

## Components
### Container
- We can obtain a shell into it using [[ECS Exec]]
>[!info] Obtain Private IP of the container 
>- Must have [[curl]] && [[jq (JSON Processor)]]
>```bash
>containerPrivateIP=$(curl $ECS_CONTAINER_METADATA_URI | jq -r '.Networks[0].IPv4Addresses[0]') >/dev/null 2>&1
>```

### Task
- A logical grouping of one or more [[#Container]]
### Task Definition
- Similar to **EC2 Launch Template**
- Required to spin up [[#Task]]
>[!note] Defines
>- Hardware details
>- [[IAM Role]]
>- [[Docker Image]]
>- [[Docker Container]] Config (AMI Config like User Data Script)
### Service
- Similar to [[Auto Scaling Group]] in [[EC2]]
>[!info] Defines
>- What [[#Task Definition]] to use
>- [[VPC]] (like which [[VPC Subnet]] to use)
>- Connecting to [[ALB]] & [[Target Group]]
>- [[Auto Scaling Group]]

## Terminologies 
### Volume
- 2 types - ``Bind Mounts`` & ``EFS Volumes``
- [[ECS Fargate]] can only use ``EFS Volumes``, ``Bind Mounts`` are local file system volumes mounted directly from the host to the container. But [[ECS Fargate]] is [[Serverless]]







