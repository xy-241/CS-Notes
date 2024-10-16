---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-09-28T11:29:42+08:00
Last Date: 2024-10-15T17:15:17+08:00
References: 
---
## Abstract
---
![[load_balancer.png|500]]
- A [[Reverse Proxy (反向代理)]] that does [[Reverse Proxy (反向代理)#Load Balancing]]
- 2 types [[Application Load Balancer]] and [[Network Load Balancer]]. The example above is an [[Application Load Balancer#External Application Load Balancer]]

>[!success] Failover Capability
> If one server goes offline, all the traffic will be routed to other servers by [[Load Balancer]]. This prevents the website from going offline or the **downtime incurred** by spinning up a new server.
> 
> We will also add a new healthy web server to the server pool to balance the load. Thus making the system [[System Design#Fault Tolerance (容错性)]].
> 
> It is good to have multiple load balancers if we want to eliminate a [[System Design#Single Point of Failure|single point of failure]].

>[!success] Scalability
> If the traffic grows rapidly, and current set of servers are not enough to handle the traffic. We only need to add more servers to the server pool, and the [[Load Balancer]] automatically starts to send requests to them.

## Load-balancing Strategies
---
### Round-Robin Load-balancing
- [[Load Balancer]] distributes incoming requests equally among the available [[Host#Server]] in a circular order. Simple and straightforward 
- Usually the default load-balancing strategy, for example in [[AWS ALB]]

### Weighted Round Robin Load-balancing
- Similar to [[#Round-Robin Load-balancing]], but [[Host#Server]] are assigned different weights. Servers with higher weights receive more requests than those with lower weights
- This is commonly used in [A/B Testing](https://en.wikipedia.org/wiki/A/B_testing)

### Least Connection Load-balancing
- Sends requests to [[Load Balancer]] with least active connections

## Terminologies
---
### Sticky Session
- Also known as *session affinity* or *session persistence*
- Refers to the practice of directing a [[Host#Client]]'s requests to the same [[Host#Server]] consistently for the duration of a session or user's interaction
## References
---
- [Scale From Zero To Millions Of Users](https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users)