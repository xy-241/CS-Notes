---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - cloudflare
Creation Date: 2023-07-24T18:28:00
Last Date: 2024-04-30T23:08:54+08:00
References: 
---
## Abstract
---
- **Human-readable** names given to the [[Host]]
- [[#Domain Name]], [[#Canonical Hostname (CNAME)]] and [[#Alias Hostname]] are all considered as hostname

>[!caution] Limitation
>- Doesn't contain enough information to locate the [[Host]] on the [[Internet]]
>- Difficult to be processed by [[Network Router]]


>[!success] Solution
>Create a mapping between hostname and [[IP Address]] using [[DNS]]. IP Address is capable of solving the limitation of hostname but not human-readable which is mitigated by DNS


### Canonical Hostname (CNAME)
- A less readable [[Hostname]]
- For example, my blog CNAME is``d29nyp1p0lllzw.cloudfront.net``

### Alias Hostname
- A more readable [[Hostname]], usually aliasing to [[#Canonical Hostname (CNAME)]] or [[IP Address]]


## Domain Name
---
- Examples are `notes.yxy.ninja` and  `google.com` etc

>[!tip]+ Domain Name Transfer
>Transferring from one [[#Domain Registrar]] to another. The general steps:
>	1. [Disable DNSSEC](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/#disable-dnssec)
>	2. [Unlock Domain](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/#2-unlock-the-domain)
>	3. [Request an authorization code](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/#4-request-an-authorization-code), also known as [[#EPP Code]]
>	4. Initiate transfer to the new Registrar with the EPP Code
>	5. The old registrar sends a transfer confirmation email, confirm it
>	   
>Refer to [Cloudflare Docs](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/#disable-dnssec) for more details

>[!caution]
> For [[DNS Record]] for Domain ownership verification, we can't proxy it, the [[X.509 Certificate#Certificate Authority (CA)]] wants to the see the verification text in the DNS record!
### Domain Registrar
- The platform between the domain owner and [[DNS Server#Top-Level Domain DNS Server]], for example [Cloudflare Registrar](https://developers.cloudflare.com/registrar/)

### EPP Code
- Alpha-numeric code required to **transfer domain** from one registrar to another registrar


