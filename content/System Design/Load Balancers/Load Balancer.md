---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-09-28T11:29:42+08:00
Last Date: 2023-12-30T21:41:42+08:00
References: 
---
## Abstract
---
![[load_balancer.png|500px]]
- A [[Reverse Proxy (反向代理)]] that does [[Reverse Proxy (反向代理)#Load Balancing]]
- 2 types [[Application Load Balancer]] and [[Network Load Balancer]]. The example above is an [[Application Load Balancer#External Application Load Balancer]]

## Benefits
---
### Failover Capability 
- If one server goes offline, all the traffic will be routed to other servers by [[Load Balancer]]. This prevents the website from going offline or the downtime incurred by spinning up a new server
- We will also add a new healthy web server to the server pool to balance the load
- Thus making the system [[System Design#Fault Tolerance (容错性)]]

### Scalability
- If the traffic grows rapidly, and current set of servers are not enough to handle the traffic
- We only need to add more servers to the server pool, and the [[Load Balancer]] automatically starts to send requests to them

## References
---
- [Scale From Zero To Millions Of Users](https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users)