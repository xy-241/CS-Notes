---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - js
Creation Date: 2023-10-03T14:42:00
Last Date: 2024-03-02T18:40:18+08:00
---
## Abstract
---
- The [[Network Protocol#Stateless Network Protocol]] used transfer data from one [[Network]] to another
- You can have a [UDP Server written in NodeJS](https://github.com/hnasr/javascript_playground/blob/master/tcp/udp.js) to play with

>[!success] Less bandwidth usage
> UDP packets are smaller than [[TCP]] packet, because it doesn't need those overhead to implement TCP features

>[!success] More performant
> UDP is a [[Network Protocol#Stateless Network Protocol]], so we can remove [[TCP Handshake]], and it supports **horizontal scaling**

>[!attention] Less Secure
> [[Host#Server]] has no idea about [[Host#Client]], anyone can communicate with server. So it is vulnerable to attacks like DDoS
> 
> On the another hand, TCP can filter data it receives by examining the identity of client like [[IP Address]]

>[!caution] Potential pain points
> - No Acknowledgment 
> - No Guaranteed Delivery
> - Connectionless
> - No Ordered Packets
> - No Congestion Control





