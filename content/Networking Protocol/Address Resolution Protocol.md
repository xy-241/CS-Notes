---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-07-15T18:13:28+08:00
Last Date: 2025-05-22T17:18:15+08:00
References: 
description: ARP is a network protocol used to map an IP address to a MAC address within a local network. It enables devices to communicate by resolving IPs to hardware addresses, using a local ARP cache to speed up lookups. Learn how ARP works, why it’s essential for LAN communication, and how to view your ARP cache using commands like arp -a and ip neighbor show.
---
## Abstract
---
- A [[Network Protocol]] that resolves [[IP Address]] to [[MAC Address]]


>[!question] Why do we need Address Resolution Protocol?
> We need **MAC Address** in order to **route the data** from **one machine** to **another** on [[Computer Network#Local Area Network (LAN)]].
> 
> Only IPs in your local subnet get resolved to MACs. Everything else routes via the gateway MAC.
> 
> When accessing external IPs (like `8.8.8.8`):
> 1. Machine checks the subnet → sees `8.8.8.8` is not local
> 2. Uses ARP only to get the MAC of the gateway
> 3. Routes the packet to the [[Network Router|default gateway]]


## ARP Cache
---
- ARP Cache is a mapping of [[IP Address]] and [[MAC Address]] stored in the computer to reduce the frequency of querying the MAC address of other machines

>[!code] Commands to view ARP cache
> You can view this copy using `arp -a` or [[Linux Kernel|Linux]] specific command `ip neighbor show`.
> 
> A sample cache entry look like -> `? (172.31.20.1) at 0:0:5e:0:1:d6 on en0`.



