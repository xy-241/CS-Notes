---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - cloudflare
Creation Date: 2024-03-07, 16:38
Last Date: 2024-03-07T17:40:13+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Email routing is the process of directing emails from a **sender** to the **intended recipient's inbox**. It involves a series of **rules** that ensure emails reach the correct destination

>[!success]- Security
> Filter spam and potentially harmful emails.

>[!success]- Email distribution to corresponding category
> Manages a high volume of emails, sorting them into different inboxes for customer support, sales, marketing, etc.

>[!success]- Privacy
> Creates custom addresses without revealing your primary email.

>[!success]- Flexibility
> We have the freedom to switch the destination email providers and use our custom domain name to receive emails without paying a fee

### Email Routing Mechanism 
- We set the [[DNS Record#MX Record]] of [[Hostname#Domain Name]] to point to the **Email Routing server**. So when a sender sends an email to the domain name, the email routing server is able to receive and apply the routing rules and forward to the destination email inbox if all rules are met


## Cloudflare Email Routing
---
- Cloudflare's offering for [[Email Routing]]. Refer to [Cloudflare Email Routing docs](https://developers.cloudflare.com/email-routing/get-started/enable-email-routing/) for setup guide

>[!success] Free!!!
> It is totally to free to use. Comes with free [Custom domain support](https://developers.cloudflare.com/email-routing/#custom-addresses) and [Routing Analytics](https://developers.cloudflare.com/email-routing/get-started/email-routing-analytics/)!
> 
> However, there is a message limit of **25MB**, **200 email routing rules** and **200 destination emails**. Refer to [Cloudflare Email Routing Limits](https://developers.cloudflare.com/email-routing/limits/) for more details.

>[!bigbrain] Process emails programmatically
> Route to Cloudflare Workers to program any logic you can dream of for processing your emails. Refer to [Cloudflare Email Workers](https://developers.cloudflare.com/email-routing/email-workers/) for more details.