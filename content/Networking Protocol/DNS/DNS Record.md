---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - cloudflare
Creation Date: 2024-01-17, 00:10
Last Date: 2024-03-19T14:22:14+08:00
References: 
draft: 
description: Dive into DNS records, the powerful mappings that connect hostnames to IP addresses, email servers, and more. ️ Explore A, CNAME, MX, and NS records, and learn how they keep your online experience seamless.
---
## Abstract
---
- A mapping between a [[Hostname]] to another [[IP Address]] or Hostname
- Each record comes with a [[TTL]]

>[!bigbrain] Local DNS Record vs Public DNS Record
> If we have the DNS Record with the same name on both a [Local DNS server](https://docs.pi-hole.net/guides/dns/unbound/) and a Public DNS server like `1.1.1.1`. The DNS record inside the local DNS server **will always be used** if your local DNS server has a record.

>[!tip]- Check the status DNS propagation
> You can check it on [DNS Checker - DNS Check Propagation Tool](https://dnschecker.org/#A/www.hello-algo.com). This is useful to see if a particular DNS record is taking effect already or not.

>[!tip]- Obtain the DNS records of a given domain name
> You can obtain the list of current and past DNS records of a given domain name at [securitytrails](https://securitytrails.com)
> 
> Or [DNSdumpster.com](https://dnsdumpster.com/), but the information obtained is much more limited


### A Record
- Symbol is ``A``
- Standard [[Hostname#Domain Name]] to [[IP Address]] mapping

### CNAME Record
![[cname_record.png|500]]
- Symbol is `CNAME`
- Powers **Host Aliasing** which allows a [[Hostname#Alias Hostname]] to be mapped to [[Hostname#Canonical Hostname (CNAME)]]
- In the above example, all requests go to`notes.yxy.ninja` are handled by servers under `notes.pages.dev`

>[!tip]- Create CNAME Record for Root Domain
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

>[!info]- Cloudflare's Priority Attribute
> The value is used to determine the order in which mail servers are used to deliver email to your domain. The lower the value the higher the priority. This provides **redundancy**

### NS Record
- Symbol is ``NS`` which stands for **Name Server** 
- [[Hostname#Domain Name]] to [[Hostname]] of the [[DNS Server#Authoritative DNS Server]]

### TXT Record
- Can used to verify the ownership of the [[Hostname#Domain Name]]

>[!caution] Can't be proxy 
> 

## References
---
- [DNS record types · Cloudflare DNS docs](https://developers.cloudflare.com/dns/manage-dns-records/reference/dns-record-types/)
