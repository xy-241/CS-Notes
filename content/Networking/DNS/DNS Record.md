---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-01-17, 00:10
Last Date: 2024-01-17T00:29:37+08:00
References: 
draft: 
---
## Abstract
---
- A mapping between a [[Hostname]] to another [[IP Address]] or Hostname
- Each record comes with a [[TTL]]
### A Record
- Symbol is ``A``
- Standard [[Hostname#Domain Name]] to [[IP Address]] mapping

### CNAME Record
- Symbol is `CNAME`
- [[Hostname#Alias Hostname]] to [[Hostname#Canonical Hostname (CNAME)]] mapping

### MX Record
- Symbol ``MX`` which stands for **Mail Exchanger**
- [[Hostname#Canonical Hostname (CNAME)]] of [[Mail Server]] to [[Hostname#Alias Hostname]]
</br>

- Allows [[Mail Server]]  endpoint to be mapped the root [[Hostname#Domain Name]]

### NS Record
- Symbol is ``NS`` which stands for **Name Server** 
- [[Hostname#Domain Name]] to [[Hostname]] of the [[DNS Server#Authoritative DNS Server]]