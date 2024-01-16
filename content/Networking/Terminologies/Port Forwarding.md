---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - aws
Creation Date: 2024-01-16, 20:50
Last Date: 2024-01-16T20:58:16+08:00
References: 
draft: 
---
## Abstract
---
- Allows a machine to access another machine that is within a private network via a [[Network Port]]

### Port Forwarding into EC2 Bastion
- The EC2 Bastion is inside an AWS private subset, blocking all incoming traffic from the internet
- With the help of [[AWS SSM]], we are able to port forwarding a port of the bastion host to a localhost port
- So we are able to access the service running on a particular bastion host port by accessing a localhost port
```bash
aws ssm start-session --target <bastion instance id> --region ap-southeast-1 --document-name AWS-StartPortForwardingSession --parameters portNumber="5432",localPortNumber="5432"
```