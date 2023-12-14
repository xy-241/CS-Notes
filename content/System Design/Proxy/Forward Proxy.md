---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-10-24T15:39:00
Last Date: 
References:
---
## Abstract
---
- Sit in between the client and the [[Internet]]


## Benefits
---
### Protect client's online identity
- only [[IP Address]] of the *forward proxy* is visible to servers
### Bypass browsing restrictions 
- like the [[GFW]]
### Content Filtering
- Block access to certain content

## Cons
---
### Manual Configuration Required
- Requires client to configure the *Forward Proxy* manually, but we can automate the process for client by using a [[#Transparent Proxy]]


## Terminologies 
---
### Transparent Proxy
- Work with *Level 4 Switches* to redirect certain type of traffic automatically without any configuration form the clients