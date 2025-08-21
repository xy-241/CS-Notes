---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-08-11, 15:44
Last Date: 2025-08-20T19:56:16+08:00
References:
draft:
description:
---
## Abstract
---
![[dynamic_routing_protocols.png]]

- **Distance Vector**: 'routing via rumor' in which each router shares info about the routes they know and cost. Routers don't have the entire view of the network
- **Link State:** every router creates a 'connectivity map' of the network. Every route will advertise info about its connected network to its neighbours. Each router will have the same map and use the same map to calculate the best routes to each destination. This requires more resources and faster to react to changes (usually a few seconds)

>[!important] IGP vs EGP
> **IGPs ([[OSPF]], EIGRP, etc.)** use **metrics like cost, [[Bandwidth|bandwidth]], or hop count** to figure out the best route _within_ an [[AS]].
> 
> **[[Border Gateway Protocol]] (the main EGP)** doesn’t replace IGP. Instead, **[[Border Gateway Protocol#iBGP]] relies on the IGP** to actually move packets between iBGP peers, while **iBGP’s job is to share Internet routes (learned via [[Border Gateway Protocol#eBGP]]) across the AS**.

## References
---
- [Free CCNA \| OSPF Part 1 \| Day 26 \| CCNA 200-301 Complete Course - YouTube](https://youtu.be/pvuaoJ9YzoI?si=VSV1wZBnMhQMXknk)