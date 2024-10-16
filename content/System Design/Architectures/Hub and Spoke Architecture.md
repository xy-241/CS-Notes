---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-12-14T18:16:44+08:00
Last Date: 2023-12-14T18:16:44+08:00
---
## Abstract
---
- 
![[hub_spoke_architecture.jpg]]
### Data sharing
- The [[#Hub]] could be a central data repo or database, applications in each [[#Spoke]] can access and use this data


## 2 Components
---
### Hub
- Serves as a central point for communication & data exchange with multiple [[#Spoke]] resources 

### Spoke
- Do not directly interact with each other over dedicated 1-1 [[Communication Links]] or [[Internet]], but communicate only through the central [[#Hub]]

## Benefits
---
### Ease of management
- [[#Spoke]] only needs to form a 1-1 connection with hub to access other [[#Spoke]], instead of 1-many in order to communicate many other [[#Spoke]]
- Simplifies network management and allows for easier scalability (Just to update [[#Hub]], so all other [[#Spoke]] can access the new [[#Spoke]])
### More secure & reliable
- [[#Spoke]] doesn't need to go through [[Internet]] which is risky and more likely to lose [[Network Packet]] to access other [[#Spoke]]
### Enhanced Security: since all traffic goes through the hub, we can
- Enforce consistent security policies
- Monitor traffic
- Apply additional layers of security 

## Cons
---
### Single Point of Failure
- If [[#Hub]] is down, all the [[#Spoke]] are down. Thus, entire system is down
- Make use of redundancy & high-availability on the [[#Hub]] to mitigate this drawback

## AWS Setup Example
---
- The hub and spokes are the individual [[VPC]], glue together using [[Transit Gateway]]

### VPC
1. A central [[VPC]] contains shared resources, services or security controls
2. Other [[VPC]] act as spoke, representing isolated environments for different applications or teams

### Transit Gateway
- Allows connecting multiple [[VPC]] connections