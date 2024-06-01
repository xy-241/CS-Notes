---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2023-07-15T18:13:28+08:00
Last Date: 2024-05-28T18:07:13+08:00
References: 
---
## Abstract
---
- A [[Network Protocol]] that resolves [[IP Address]] to [[MAC Address]]


>[!question] Why do we need Address Resolution Protocol?
> We need **MAC Address** in order to **route the data** from **one machine** to **another** on [[Computer Network#Local Area Network (LAN)]].


## ARP Cache
---
- ARP Cache is a mapping of [[IP Address]] and [[MAC Address]] stored in the computer to reduce the frequency of querying the MAC address of other machines
- You can view this copy using `arp -a` or `ip neighbor show` on [[Linux Kernel|Linux Distro]]