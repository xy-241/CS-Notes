---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-04-08, 19:46
Last Date: 2024-10-02T17:15:47+08:00
References: 
draft: 
description: 
---
>[!check] Prerequisite knowledge
> - [ ] [[IP Address]]
> - [ ] [[Network Router]]
> - [ ] [[Network Port]]
> - [ ] [[Computer Network]]
## Abstract
---
- Stands for **Network Address Translation**
- On the [[Internet]], each device is expected to have an unique [[IP Address]]. However, [[IP Address#IPv4]] has maximum ~4.3 billion addresses, less than the total world population. This means no everyone on earth can connect their device to the Internet at the same time. We can solve this by using [[IP Address#IPv6]] or **NAT**


- NAT solves the problem by allowing **multiple devices** on a [[Computer Network#Local Area Network (LAN)]] to share a **single** [[IP Address#Public IP Address]]

>[!important]
> [[#Port Address Translation]]**(Outbound)** is the most common form of NAT. There are another 3 types of NAT.
> 
> **DNAT (Dynamic NAT)** primarily handles **outbound traffic**. It dynamically maps internal private IP addresses to the router's public IP address(es). This allows multiple devices on the private network to share a limited number of public IP addresses when accessing external resources.
> 
> **Port Forwarding (Inbound)**: This technique directs incoming traffic from a specific port on the router's public IP address to a designated port on an internal device with a private IP address. This is often used to make services like web servers or game servers accessible from the internet.
> 
> **SNAT (Static NAT)** primarily handles **inbound traffic**. The router possesses a pool of public IP addresses, each of which is mapped to a specific internal private IP address. This allows external devices to initiate connections to devices within the private network.

## Port Address Translation
---
![[nat.png|500]]

- Since [[IP Address#IPv4]] is limited, we only assign one [[IP Address#Public IP Address]] to the [[Network Router]] we control. The other devices we have are connected to the router with [[IP Address#Private IP Address]] assigned to facilitate communication among the devices we have and the router 
- The NAT is basically a table of mappings the router maintains. The table maps the `private IP address of the the device` and its [[Network Port]] to the `public IP address of the router` and the device's network port
- So the [[Host#Server]] will think it is communicating with the router. When router receives a request back from the server, it will check its NAT table and forward the data back to the corresponding device 


## References
---
- [NAT - SNAT, DNAT, PAT & Port Forwarding - YouTube](https://youtu.be/wg8Hosr20yw?si=zH_WDNX-VfUTgNF1)