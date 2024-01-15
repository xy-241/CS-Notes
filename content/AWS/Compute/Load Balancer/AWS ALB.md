---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-09-07T16:24:59+08:00
Last Date: 2023-12-30T00:39:39+08:00
References: 
---
## Abstract
---
![[aws_alb_az.png]]
- Requires at least 2 [[Subnet]] over 2 different [[Availability Zone]]
- ALB must be in the same [[Availability Zone]] as the compute in order to load balance the traffic
- Listener can only be either `HTTP` or `HTTPS` (Based on AWS experience)
- [[Target Group]] can only use [[Network Protocol]] `HTTP` or `HTTPS` (Based on AWS experience)
- [[Health Check]] can only use Network Protocol `HTTP` or `HTTPS` (Based on AWS experience)