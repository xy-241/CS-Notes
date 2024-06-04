---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-05-30, 23:05
Last Date: 2024-06-04T16:51:55+08:00
References: 
draft: 
description: DHCP (Dynamic Host Configuration Protocol) explained with visuals
---
## Abstract
---
- Stands for **D**ynamic **H**ost **C**onfiguration **P**rotocol
- A [[Network Protocol]] that **automatically** assigns [[IP Address]] and other **network configuration parameters** to **devices** on a [[Computer Network]]

## DHCP Mechanism 
---

![[dhcp.svg]]

- In the diagram above, we are running the **DHCP server** on the [[Network Router]]. **Device A** is a newly-added machine to the network and it wants to obtain an [[IP Address]] via [[DHCP]]
- First, the **DHCP client** on device A will craft a **DHCP Discovery Message**, a message that is sent to the DHCP server to request for a IP Address
- When the **DHCP server** on the network router receives the **DHCP discovery message** from the Device A, it puts an IP address that isn't assigned to any other devices in the **DHCP Offer Message** for device A. It also puts the IP address into its **DHCP Address Pool**, so it doesn't assign the same IP Address to more than one device, and make it available to other devices when the **lease time remaining** reaches $0$. Since Device A doesn't have an IP address yet, the DHCH server uses the IP broadcast address `255.255.255.255` to deliver the message to Device A

>[!question] How does Device A know where to find the DHCP Server?
> **Device A doesn't know.**
> 
> So Device A uses [[MAC Address#MAC Broadcast Address]] `FF:FF:FF:FF:FF:FF` and [[IP Address#IP Broadcast Address]] `255.255.255.255` to send the message to all [[Host]] on the network, basically a brute-force approach. Since Device A doesn't have an IP address, the source IP is set to [[IP Address#Unspecified Address]] `0.0.0.0`.

>[!important]
> The above shows a **simplified DHCP communication process**, there are **DHCP Request Message** where the DHCP client accepts one of the DHCP offers, and **DHCP Acknowledge Message** where DHCP server confirms the lease of the IP address to the DHCP client. These two messages types are used to handle situations where there are **more than one DHCP server** in the **same computer network**. 
> 
> Besides the **leased IP Address**, DHCP server also includes the **network subnet mask**, **IP address** of the [[Network Router]], **IP address** of **[[DNS Server#DNS Resolver]]** and **IP address lease time** inside the DHCP offer message.



## References
---
- [Dynamic Host Configuration Protocol - Wikipedia](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol#Operation)