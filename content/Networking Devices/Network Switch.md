---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-07-13T22:32:55+08:00
Last Date: 2024-06-04T16:48:56+08:00
References: 
---
## Abstract
---
![[network_switch.svg]]
- Serves as a **central device** that **bridges up** all the [[Host]] on a [[Computer Network#Local Area Network (LAN)]], forwards **data packets** among the hosts with the use of [[MAC Address]]
- Network switch can **only read the MAC Address information** from the data it receives, the **other information** is just a **stream of meaningless zeros & ones** to the network switch
- The network switch maintains a **MAC Address Table**, so it knows **which switch port** it should **forward the data to**, **avoids** forwarding the data to **all the switch ports** 

>[!important]
> With the help of network switch, **each host** just needs to have one **single connection** to the **network switch** to **communicate** with **other hosts** connected to the network switch. 
> 
> We just need to use **one wire** to add in a new host and it is **able to communicate all other hosts** without the need to make any modifications to other hosts.