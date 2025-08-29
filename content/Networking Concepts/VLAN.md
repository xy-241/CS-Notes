---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-08-19, 21:18
Last Date: 2025-08-29T17:01:03+08:00
References:
draft:
description: Learn what VLANs are, how they group switch ports into isolated networks, the difference between access and trunk ports, and why VLANs improve security, flexibility, and performance.
---
## Abstract
---
- On a [[Network Switch|switch]], we can group ports into VLANs (e.g., Group 10 = VLAN 10, Group 20 = VLAN 20). Each VLAN acts like a separate network. Devices in one VLAN can't only talk to each other unless a [[Network Router|router]] or L3 switch connects them. VLANs reduce broadcast traffic, improve security, and make networks more flexible to design

>[!important] Optimising network performance
> By logically grouping a set of physical [[Network Port|network ports]], we reduce broadcast traffic. Thus, optimising network performance.

>[!important] Flexible to make changes
> We can pick any of the physical ports and group them into one network. This allows us to design network without worrying about the physical layout of switches and network ports.

### Access Port
- Belongs to one VLAN (known as native VLAN) that handles untagged traffic

### Trunk Port
- Carries **tagged traffic** for multiple VLANs, enabling VLAN communication


## Inter-VLAN Routing
---
- VLANs are isolated at [[OSI Model|layer 2]], things like [[Address Resolution Protocol|ARP]] doesn't leave the VLAN
- To communicate across VLANs, traffic must go through a **[[Network Router|router]] or Layer 3 switch**
- Router/L3 switch has one **subinterface (gateway)** per VLAN

>[!important] Great security!
> By default, network devices in one VLAN can't access network devices in a different VLAN.

>[!important] DHCP and VLANs
> One DHCP server can serve multiple VLANs. Router/L3 switch acts as a **DHCP relay**, forwarding requests with VLAN info.
> 
> DHCP server has separate pools/scopes for each VLAN (e.g., `192.168.10.x` for `VLAN 10`, `192.168.20.x` for `VLAN 20`).