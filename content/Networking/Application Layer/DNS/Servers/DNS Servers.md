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
>[!note] How mappings are stored
>- Mappings are distributed among the [[Host]]
>- [[Unix]] machines
>- Stored as [[Resource Records (RRs)]]

>[!note] 3 classes of [[DNS]] Servers in the [[Hierarchical Structure]]
>1. [[Root DNS Server]]
>2. [[Top-Level Domain (TLD) DNS Server]]
>3. [[Authoritative DNS Server]]
>>[!info]
>>There is also a type called [[Local DNS Server (Default Name Server)]]



>[!note] Process
>1. [[Host]] contacts [[Local DNS Server (Default Name Server)]] ([[Recursive Queries]])
>2. Then contacts [[Root DNS Server]] ([[Iterative Queries]])
>3. Then contacts [[Top-Level Domain (TLD) DNS Server]] ([[Iterative Queries]])
>4. Finally contacts [[Authoritative DNS Server]] ([[Iterative Queries]])