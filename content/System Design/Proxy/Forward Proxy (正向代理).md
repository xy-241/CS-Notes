---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-10-24T15:39:00
Last Date: 2024-01-09T21:02:22+08:00
References: 
---
## Abstract
---
![[forward_proxy.png|300px]]
- [[Host#Server]] sit in between the [[Host#Client]] and the [[Internet]] or sits between the client and the server the client wants to access where the forward proxy is on the internet
- For traffic that is going out


## Benefits
---
### Protect client's online identity
- Only [[IP Address]] of the *forward proxy* is visible to the [[Host#Server]]
### Bypass browsing restrictions 
- Like using [[VPN]] to bypass the [[GFW]]
### Content Filtering
- Block access to certain content. Forward proxy is able to intercept and turn down blacklisted traffic

### Content Cache
- Increase speed by caching copies of websites in its [[Database]]

## Cons
---
### Manual Configuration Required
- Requires client to configure the *Forward Proxy* manually, but we can automate the process for client by using a [[#Transparent Proxy]]


## Terminologies 
---
### Transparent Proxy
- Work with *Level 4 Switches* to redirect certain type of traffic automatically without any configuration form the clients