---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2024-01-17T00:31:56+08:00
References: 
---
## Abstract
---
- Stores [[DNS Record]]


### Root DNS Server
- Returns the [[IP Address]] for [[#Top-Level Domain DNS Server]] 

### Top-Level Domain DNS Server
- Returns [[IP Address]] of [[#Authoritative DNS Server]]
- [[DNS Server]] that manages top-level domains like `ninja` & `com` etc or Country top-level domains like `uk` & `jp` etc

### Authoritative DNS Server
- Return [[IP Address]]  of [[Hostname]] base on [[DNS Record#A Record]]
- May return IP Address of another Authoritative DNS Server
- Can be On-prem or using a third party service provider like [Cloudflare](https://www.cloudflare.com/)

### Local DNS Server
- Also known as **Default Name Server**
- Self implementation in a [[Network#Local Area Network (LAN)]]
- Acts like a [[Forward Proxy (正向代理)]], forwarding queries to other [[DNS Server]]


