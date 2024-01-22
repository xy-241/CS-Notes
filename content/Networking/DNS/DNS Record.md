---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - cloudflare
Creation Date: 2024-01-17, 00:10
Last Date: 2024-01-22T19:26:06+08:00
References: 
draft: 
description: Dive into DNS records, the powerful mappings that connect hostnames to IP addresses, email servers, and more. ️ Explore A, CNAME, MX, and NS records, and learn how they keep your online experience seamless.
---
## Abstract
---
- A mapping between a [[Hostname]] to another [[IP Address]] or Hostname
- Each record comes with a [[TTL]]
### A Record
- Symbol is ``A``
- Standard [[Hostname#Domain Name]] to [[IP Address]] mapping

### CNAME Record
![[cname_record.png|500]]
- Symbol is `CNAME`
- Powers **Host Aliasing** which allows a [[Hostname#Alias Hostname]] to be mapped to [[Hostname#Canonical Hostname (CNAME)]]
- In the above example, all requests go to`notes.yxy.ninja` are handled by servers under `notes.pages.dev`

>[!tip] Create CNAME Record for Root Domain
>Based on the [DNS Specification](https://www.ietf.org/rfc/rfc1035.txt), We can't create CNAME Record for **Root Domain**. The good new is with [Cloudflare's CNAME Flattening](https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root/), we are able to create a CNAME Record for Root Domain
>
>The CNAME Record we created in the the Cloudflare side directs traffic hitting the root domain to **Cloudflare Network**
>
>Then Cloudflare will use [Cloudflare Page Rule](https://developers.cloudflare.com/rules/page-rules/how-to/url-forwarding/) we configured to obtain the [[IP Address]] and send back to the clients. This makes it a valid [[#A Record]] query on the client-side
### MX Record
![[MX_Record.png|500]]
- Symbol ``MX`` which stands for **Mail Exchanger**
- Powers **Mail Server Aliasing** which allow root [[Hostname#Domain Name]] to be mapped to [[E-mail Server]]'s [[Hostname]]
- In this above example, all the emails sent to `hello@yxy.ninja` is handled by the email servers behind `mail.tutanota.de`


### NS Record
- Symbol is ``NS`` which stands for **Name Server** 
- [[Hostname#Domain Name]] to [[Hostname]] of the [[DNS Server#Authoritative DNS Server]]


## References
---
- [DNS record types · Cloudflare DNS docs](https://developers.cloudflare.com/dns/manage-dns-records/reference/dns-record-types/)
