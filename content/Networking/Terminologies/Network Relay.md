---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-10-10T10:42:00
Last Date: 
References:
---
## Abstract
- Establish a *relationship* between *two data sources*
- Connecting networks that use different [[Protocol]], extending the range of a network

## Use Case
### Create Relay Between Local to Remote
- Creating a *Relay* on local machine:port listening on [[TCP]], and forward it to the destination:port over [[TCP]]
- So for requests hitting `local:<PORT_NUMBER>` on [[TCP]], it is *relay* to the `<PRIVATE_ENDPOINT>:<PORT_NUMBER>` over [[TCP]]
```bash
sudo socat -v -d -d TCP-LISTEN:<PORT_NUMBER>,fork TCP4:<PRIVATE_ENDPOINT>:<PORT_NUMBER>
```
### Create Relay Between Local to EC2 (Bastion)
```bash
aws ssm start-session --target <bastion instance id> --region ap-southeast-1 --document-name AWS-StartPortForwardingSession --parameters portNumber="5432",localPortNumber="5432"
```
### Access Private Resources on AWS on Local
- [[#Create Relay Between Local to EC2 (Bastion)]]
- [[#Create Relay Between Local to Remote]], *remote* in this case is private resources on AWS like databases