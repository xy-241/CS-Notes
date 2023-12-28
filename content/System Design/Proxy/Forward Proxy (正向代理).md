---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-10-24T15:39:00
Last Date: 2023-12-28T20:15:42+08:00
References: 
---
## Abstract
---
![[forward_proxy.png|300px]]
- [[Host#Server]] sit in between the [[Host#Client]] and the [[Internet]] or sits between the client and the server the client wants to access where the forward proxy is on the internet


## Benefits
---
### Protect client's online identity
- Only [[IP Address]] of the *forward proxy* is visible to the [[Host#Server]]
### Bypass browsing restrictions 
- Like using [[VPN]] to bypass the [[GFW]]
### Content Filtering
- Block access to certain content. Forward proxy is able to intercept and turn down blacked listed traffic

## Cons
---
### Manual Configuration Required
- Requires client to configure the *Forward Proxy* manually, but we can automate the process for client by using a [[#Transparent Proxy]]


## Terminologies 
---
### Transparent Proxy
- Work with *Level 4 Switches* to redirect certain type of traffic automatically without any configuration form the clients