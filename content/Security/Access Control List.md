---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
  - networking
Creation Date: 2025-08-21, 19:52
Last Date: 2025-08-21T20:23:18+08:00
References:
draft:
description: "Learn Cisco ACLs (Access Control Lists) for CCNP: rule evaluation, default deny, standard vs extended ACLs, placement best practices, and configuration examples."
---
## Abstract
---
- A list of rules on [[Network Router|routers]]/[[Network Switch|switches]] that decide who’s allowed to use the network and for what

>[!important] Rule evaluation
> ACL entries are checked **top-to-bottom in the order you wrote them** (not “lowest to higher number” – the sequence number just orders them, but processing is line-by-line).
> 
> **First match wins** → once a packet matches a rule (permit/deny), it stops checking further.

>[!important] Default deny
> Every ACL has a hidden final rule: `deny ip any any`.
> 
> If no match happens → packet is denied.

>[!important] No mixed rules
> You can’t mix standard and extended entries in the same ACL.

### Standard ACL

```
Access-list 10 deny 192.168.10.50 0.0.0.0
Access-list 10 permit any
```

- Filter **only by source [[IP Address|IP]]**

>[!important] Place close to the destination
> Only source-based, so applying them too early might block legit traffic. Maybe only some destinations don't want traffic from this particular source. Blocking at source blocks all destination from receiving the traffic.


### Extended ACL

```
Access-list 101 permit tcp 192.168.10.0 0.0.0.255 any eq 
Access-list 101 permit tcp 192.168.10.0 0.0.0.255 any eq 443
```

- Filter by **source IP + destination IP + protocol/port**

>[!important] Place close to the source
> To block unwanted traffic as early as possible and save bandwidth. Since you already don't traffic to go to a particular place, just block it.