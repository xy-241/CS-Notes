---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-01-17, 00:10
Last Date: 2024-01-18T21:06:19+08:00
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
