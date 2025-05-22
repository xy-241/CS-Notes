---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-05-30, 23:05
Last Date: 2025-05-22T16:44:24+08:00
References: 
draft: 
description: DHCP (Dynamic Host Configuration Protocol) explained with visuals
---
## Abstract
---
- Stands for **D**ynamic **H**ost **C**onfiguration **P**rotocol
- A [[OSI Model|layer 7]] [[Network Protocol]] that **automatically** assigns [[IP Address]] and other **network configuration parameters** to **devices** on a [[Computer Network]]

>[!code] Disable getting IP addresses, DNS servers, gateway information via DHCP on Linux
> Command: `chmod -x /sbin/dhclient`
> 
> Useful to force the system to **reply only on static network configuration**. 
> 
> The current IP address might continue working for a while (until the DHCP lease needs renewal).

## DHCP Mechanism 
---

![[dhcp.svg]]

- In the diagram above, we are running the **DHCP server** on the [[Network Router]]. **Device A** is a newly-added machine to the network and it wants to obtain an [[IP Address]] via [[DHCP]]
  1. The **DHCP client** on device A will craft a **DHCP Discovery Message**, a message that is sent to the DHCP server to request for a [[IP Address]]
  2. When the **DHCP server** on the network router receives the **DHCP discovery message** from the Device A, it puts an IP address that isn't assigned to any other devices in the **DHCP Offer Message** for device A. It also puts the IP address into its **DHCP Address Pool**, so it doesn't assign the same IP address to more than one device, and make it available to other devices when the **lease time remaining** reaches $0$. Since Device A doesn't have an IP address yet, the DHCP server uses the IP broadcast address `255.255.255.255` to deliver the message to Device A (DHCP server can also set the destination IP address to the newly assigned IP address)

>[!question] How does Device A know where to find the DHCP Server?
> **Device A doesn't know.**
> 
> So Device A uses [[MAC Address#MAC Broadcast Address]] `FF:FF:FF:FF:FF:FF` and [[IP Address#IP Broadcast Address]] `255.255.255.255` to send the message to all [[Host]] on the network, basically a brute-force approach. 
> 
> Since Device A doesn't have an IP address, the source IP is set to [[IP Address#Unspecified Address]] `0.0.0.0`.

>[!important] 2 more types of DHCP message
> The above shows a **simplified DHCP communication process**, there are **DHCP Request Message**(format very similar to DHCP Discover Message) where the DHCP client accepts one of the DHCP offers. (The client still has to use the IP broadcast address and MAC broadcast address to send the request message to tell all DHCP server which DHCP server is chose).
> 
> And **DHCP Acknowledge Message** where DHCP server confirms the lease of the IP address to the DHCP client. These two messages types are used to handle situations where there are **more than one DHCP server** in the **same computer network**. 
> 
> Besides the **leased IP Address**, DHCP server usually also includes:
> - **IP address** of the [[Network Router|network gateway]]
> - **IP address** of **[[DNS Server#DNS Resolver]]**
> - **network subnet mask**
> - **IP address lease time** inside the DHCP offer message



## References
---
- [Dynamic Host Configuration Protocol - Wikipedia](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol#Operation)
- [DHCP运作原理和握手过程 - YouTube](https://youtu.be/FDLMyYRkj3A?si=TdGtKpRTUTHRK0Iv)