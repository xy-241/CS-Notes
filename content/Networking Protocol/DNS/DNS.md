---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - bash
  - cloudflare
Creation Date: 2023-08-14T11:18:00
Last Date: 2024-05-15T23:57:07+08:00
References: 
description: Explore the Domain Name System (DNS), the internet's GPS that translates human-readable website names into machine-friendly IP addresses.
---
## Abstract
---
- Translate [[Hostname]] to [[IP Address]]
- Runs over [[UDP]] & port 53
- Used by Other **application-level** [[Network Protocol]] like [[HTTP]] and [[SMTP]], to translate user-supplied [[Hostname#Domain Name]] to IP Address

>[!tip]- Check Whois info from CLi
> ```bash
> whois <DOMAIN_NAME/IP_ADDRESS>
> ```


## Secure DNS
---
- Basically [[DNS]] with encryption, so 3rd-party that is **monitoring the DNS traffic** is **unable to see which site you are visiting**. There are two standards on secure DNS - **DNS over TLS(DoT)** & **DNS over HTTPS(DoH)**


|                   | DoT                                              | DoH                                                            |
| ----------------- | ------------------------------------------------ | -------------------------------------------------------------- |
| Encryption method | TLS                                              | HTTPS                                                          |
| [[Network Port]]  | 853                                              | 443                                                            |
| Privacy           | **Lower**, since it uses a dedicated port number | **Higher**, DNS queries are hidden inside normal HTTPS traffic |


## DDNS
---
- Stands for **D**ynamic [[DNS]]
- Basically a technique used to modify the [[DNS Record]] automatically if the value of the DNS Record is changed. DDNS can help ensure that **DNS queries** work even if the web service being sought has recently switched IP addresses

>[!question] How does it work?
> Users uses software which runs on their computer or [[Network Router]], one common software is [jeessy2/ddns-go](https://github.com/jeessy2/ddns-go) which is usually used with [[OpenWRT]]. This software communicates with the dynamic DNS service provider (like [[Cloudflare]]) anytime the [[IP Address]] provided by the ISP is updated, and the dynamic DNS provider in turn updates the DNS with those changes, providing almost instant updates.

>[!example] Home lab use case
> The [[IP Address#Public IP Address]] assigned to our house network changes regularly unless we pay extra for a static IP 💸. If we have a [[DNS Record#A Record]] that points to service running in our home lab, we have to manually update the A record when the public IP address of our house network is changed, this **incurs downtime** and it is **tedious**. 
> 
> Services like Cloudflare allows us to control the DNS Record using an API key with **DNS Edit permission**, then we can write a script or `jeessy2/ddns-go` to achieve DDNS - updating the DNS record once the public IP address of the house network changes.
> 
> `jeessy2/ddns-go` comes with [[Webhook]], with the help of [ddns-telegram-bot](https://github.com/WingLim/ddns-telegram-bot), I will also get notified via Telegram whenever my house IP address is changed :)



## DNS Features
---
### geoDNS
- A [[DNS]] service that allows [[Hostname#Domain Name]] to be resolved to [[IP Address]] based on the location of a user

### Load Distribution 
1. A set of  [[IP Address]] is associated with one [[Hostname#Domain Name]] 
2. When [[Host#Client]] make dns query to that domain name
3. [[DNS Server#Authoritative DNS Server]] responds the entire set of IP Address with the use of [[#DNS Rotation]]
4. Client typically sends its [[HTTP]] request message to the IP Address that is listed first in the set. Thus, distributing load among replicated server

- DNS Rotation is also used on [[E-mail Server]], so multiple of the servers can share the same domain name

### DNS Caching
- Cache [[DNS Record]] in [[Main Memory]]
- This allows us to bypass some or all [[DNS Server]]

### DNS Rotation
- Rotate the order of a list of [[IP Address]]



## Useful CLi Tools
### q
- DNS client with support for UDP, TCP, DoT, DoH, DoQ and ODoH
```bash
brew tap natesales/repo https://github.com/natesales/repo
brew install q
```


## References
---
- [Dynamic DNS - Cloudflare](https://www.cloudflare.com/en-gb/learning/network-layer/what-is-a-router/)