---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-08-20, 02:19
Last Date: 2025-08-20T02:42:08+08:00
References:
draft:
description:
---
## Abstract
---
![[hsrp.png|400]]

- A Cisco proprietary protocol that provides redundancy to [[Network Router|default gateway]] of a network by having multiple routers sharing the same virtual [[IP Address]] and [[MAC Address]]
- One of the routers will be selected as active router. If the active router is down, one of the backup routers will become active

## Load Balancing with Multiple Groups
---
![[hsrp_load_balancing.png|400]]

- [[Hot Standby Router Protocol]] is configured for each interface (per [[Subnet|subnet]]). So when [[Network Router|routers]] connect to multiple subnets, they often join multiple HSRP Groups
- If `R1` is made active on all subnets, it will be over-utilised while `R2` stays idle. A better design is to balance the load by assigning `R1` active for some subnets and `R2` for others

## Virtual Router Redundancy Protocol
---
- For the same purpose as [[Hot Standby Router Protocol]] but it is an open standard, vendor-agnostic

>[!important] Faster convergence
> **HSRP** -> Hello = 3s, Hold = 10s.
> 
> **VRRP** → Advertisement = 1s (faster failover by default).

## References
---
- [Hot Standby Router Protocol (HSRP) \| NetworkAcademy.io](https://www.networkacademy.io/ccna/network-services/hot-standby-router-protocol-hsrp)