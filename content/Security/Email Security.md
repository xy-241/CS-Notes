---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
  - networking
Creation Date: 2024-03-06, 17:07
Last Date: 2024-10-16T20:10:58+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Ways to ensure the security of emails


## DNS Records
---
### SPF
- **Sender Policy Framework**
- A [[DNS Record#TXT Record]] that specifies the list of emails server you authorise to send emails with your [[Hostname#Domain Name]]. Receiver can use it to decide if he/she should accept or deny the email
- **Only one SPF TXT record associated with your domain**

>[!example] Authorise Google & Cloudflare email servers
> **TXT DNS Record**: `v=spf1 include:_spf.google.com  include:_spf.mx.cloudflare.net ~all`. `~all` means soft deny, so unverified emails will still be accepted and placed in spam

### DKIM
- **DomainKeys Identified Mail**
- DKIM works by attaching a [[Digital Signature]] to the header of your outgoing emails. The receiving mail server has access to a public key (stored in a [[DNS Record#CNAME Record]] or [[DNS Record#TXT Record]]) that can be used to decode and verify the signature. If the signature matches, the recipient can be more confident the email hasn't been altered in transit
- This ensures the **email truly originated** from your domain and the **content of the email** hasn't been changed since it was sent

>[!example] The DKIM DNS Record
> The general TXT DNS Record format: `[selector]._domainkey.yourdomain.com IN TXT v=DKIM1; k=rsa; p=[your public key data]`
> 
> We can have multiple DKIM records for subdomains or for using different service providers

### DMARC 
- **Domain-based Message Authentication, Reporting & Conformance**
- A **Policy Framework** that builds on top of [[#SPF]] and [[#DKIM]]. It allows us to create a **specific policy** within your [[DNS Record#TXT Record]] telling receiving mail servers how to handle emails that fail SPF or DKIM checks
- For setup guide refer to [‎Setting Up DMARC](https://g.co/gemini/share/0e13a87d2063)