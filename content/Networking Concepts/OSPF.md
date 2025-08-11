---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-08-11, 13:21
Last Date: 2025-08-11T15:55:36+08:00
References: 
draft: 
description: "OSPF Routing Protocol Guide: Complete tutorial covering LSA flooding, LSDB management, area design, and router types including ABR and ASBR configurations for network engineers. This comprehensive resource explains OSPF fundamentals from link-state advertisements to inter-area routing with practical examples and network diagrams."
---
## Abstract
---
- Router stores info about network in [[#LSA]], which are organised in a structure called the [[#LSDB]]
- We will use [[#LSA Flooding]] to ensure router and its routing neighbours have the same routing information. Then we can use [[Dijkstra's Algorithm]] to calculate the best route to route packets

### LSA

```plain title="TYPE-1 LSA (Router LSA)"
┌───┐ "I'm R1, connected to R2 via 10.1.1.0/30"            
│R1 │ "I'm R2, connected to R1,R3 via networks..."         
└───┘                                              
```

```plain title="TYPE-2 LSA (Network LSA)"
 🌐 "Network 192.168.1.0/24 has R1,R2,R3 attached"    
```

```plain title="TYPE-3 LSA (Summary LSA) - Inter-area routes"
📡 "To reach Area 1 networks, go via ABR R5"
```

```plain title="TYPE-5 LSA (External LSA)"
🌍 "To reach Internet 0.0.0.0/0, go via ASBR"
```

- Stands for **Link State Advertisements**
- Contains info like the router ID, the IP address of the new network interface and the cost

### LSDB
- A collection of [[#LSA]]



## LSA Flooding
---
```plain
Step 1: Router R1 detects link change
   ┌───┐ ❗ 
   │R1 │ "My link to 192.168.1.0/24 is down!"
   └─┬─┘
     │
Step 2: R1 generates new LSA
     ▼
   ┌─────────────┐
   │  NEW LSA    │
   │ Type-1, R1  │
   │ Seq: 0x8001 │
   └─────────────┘
     │
Step 3: LSA Flooding (multicast to neighbors)
     ▼
   ┌───┐ ──flooding──> ┌───┐ ──flooding──> ┌───┐
   │R1 │               │R2 │               │R3 │
   └───┘               └───┘               └───┘
     │                   │                   │
     ▼                   ▼                   ▼
   Updates               Updates             Updates
   LSDB                 LSDB                LSDB
```

- When a link is added or down in the network. A [[#LSA]] is created and is **flooded** throughout the network until all routers have received it, resulting in all routers in the same OSPF area sharing the same [[#LSDB]]

>[!info] Aging timer
> The LSA will be flooded again after timer expires. The timer expires every 30 mins.


## OSPF Area
---
- An area is a set of routers that share the same [[#LSDB]]
- We usually use it to divide up the network to make it more efficient to manage
- Each area has its own LSDB, so router in an area needs less memory to store it. And since we have less nodes in the LSDB, the routing calculation is also more efficient

>[!important]
> **OSPF interfaces in the same subnet must be in the same area.** 
> 
> If they aren't in the same area, they can't be OSPF neighbours and can't exchange information about the network they know.


### Backbone Area
- All other OSPF areas must have a direct connection with the backbone areas via the [[#Area Border Router]]
- All routers inside this area are known as backbone routers

### Internal Router
- Router whose interfaces are all in the same [[#OSPF Area]]
- The router in the [[#Backbone Area]] is also known as a [[#Internal Router]]

### Area Border Router
- Routers whose interfaces are in multiple areas 

>[!important]
> Area Border Routers (ABRs) maintain a separate [[#LSDB]] for each area they are connected to.
> 
> It is recommended that you connect an ABR to a maximum of 2 areas, or we can overburden the router. 

### ASBR

```
[OSPF Domain]  ←→  [ASBR]  ←→  [BGP/Internet]
(Areas 0,1,2,3)              (Different AS)
```
- Acts as a **translator**, taking routes learned via BGP (or other protocols) and advertising them into the OSPF domain as external routes ([[#LSA|Type-5 LSA]])

### Intra-area Route
- A route to a destination inside the same [[#OSPF Area]]

### Inter-area Route
- A route to a destination in a different [[#OSPF Area]]


## References
---
- [Free CCNA \| OSPF Part 1 \| Day 26 \| CCNA 200-301 Complete Course - YouTube](https://youtu.be/pvuaoJ9YzoI?si=VSV1wZBnMhQMXknk)