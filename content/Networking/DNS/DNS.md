---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-14T11:18:00
Last Date: 2024-01-18T21:07:15+08:00
References: 
description: Explore the Domain Name System (DNS), the internet's GPS that translates human-readable website names into machine-friendly IP addresses.
---
## Abstract
---
- Translate [[Hostname]] to [[IP Address]]
- Runs over [[UDP]] & port 53
- Used by Other **application-level** [[Network Protocol]] like [[HTTP]] and [[SMTP]], to translate user-supplied [[Hostname#Domain Name]] to IP Address


## DNS Features
---
### geoDNS
- A [[DNS]] service that allows [[Hostname#Domain Name]] to be resolved to [[IP Address]] based on the location of a user

### Load Distribution 
1. A set of  [[IP Address]] is associated with one [[Hostname]] 
2. When [[Host#Client]] make [[DNS Query]] to that domain name
3. [[DNS Server]] responds the entire set of IP Address with the use of [[#DNS Rotation]]
4. Client typically sends its [[HTTP]] request message to the IP Address that is listed first in the set. Thus, distributing load among replicated server

- DNS Rotation is also used on [[E-mail Server]], so multiple of the servers can share the same [[Hostname]]

### DNS Caching
- Cache [[DNS Record]] in [[Main Memory]]
- This allows us to bypass some or all [[DNS Server]]

### DNS Rotation
- Rotate the order of a list of [[IP Address]]