---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2023-12-12T11:49:00+08:00
References:
---
>[!abstract] Established after [[TCP Handshake]]

>[!caution] Resource intensive on both [[Host]] & [[Host]] side because [[TCP#^228bd9 | TCP is Stateful]]

>[!caution] Warm up period
>To allow [[TCP]] to know how much data it can handle

>[!note] Usually browser will keep multiple [[TCP Connection]] to the same [[Host]] to have a balance between good performance & resource usage([[Chrome]] & [[Firefox]] default 6)