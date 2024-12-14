---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - cloudflare
Creation Date: 2024-03-07, 16:38
Last Date: 2024-12-14T17:05:15+08:00
References: 
draft: 
description: Email routing directs emails to recipients using rules for secure, organized, and flexible delivery, including custom domain support. Cloudflare Email Routing is a free service that enhances this process with routing analytics and programmable handling via Cloudflare Workers.
title: "Email Routing: Mechanisms, Security, and Cloudflare Solutions"
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

>[!help]- Whitelist sender emails in Gmail
> If you are routing emails to Gmail inbox, some senders may be blocked. You can refer to [here](https://support.google.com/mail/answer/6579?sjid=5108625996672587407-AP&visit_id=638462741859475398-3604221602&rd=1) to whitelist those emails.
### Email Routing Mechanism 
- We set the [[DNS Record#MX Record]] of [[Hostname#Domain Name]] to point to the **Email Routing server**. So when a sender sends an email to the domain name, the email routing server is able to receive and apply the routing rules and forward to the destination email inbox if all rules are met


## Cloudflare Email Routing
---
![[cloudflare_emal_routing.png|300]]
- Cloudflare's offering for [[Email Routing]]. Refer to [Cloudflare Email Routing docs](https://developers.cloudflare.com/email-routing/get-started/enable-email-routing/) for setup guide

>[!success] Free!!!
> It is totally to free to use. Comes with free [Custom domain support](https://developers.cloudflare.com/email-routing/#custom-addresses) and [Routing Analytics](https://developers.cloudflare.com/email-routing/get-started/email-routing-analytics/)!
> 
> However, there is a message limit of **25MB**, **200 email routing rules** and **200 destination emails**. Refer to [Cloudflare Email Routing Limits](https://developers.cloudflare.com/email-routing/limits/) for more details.


>[!attention]
> Each custom address can only have one routing rule. You will get a 'Duplicated Zone rule' error if you try to create another.
> 
> If you are using [Terraform](https://registry.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/email_routing_rule) to create the routing rule, the `value` in `action` is an array. However, you should only input a single email string. If you provide multiple strings in the array, Cloudflare will concatenate them into one.

>[!bigbrain] Process emails programmatically
> Route to Cloudflare Workers to program any logic you can dream of for processing your emails.

### Cloudflare Email Worker
- A custom script built using **Cloudflare Workers** that allows developers to process, forward, or manage emails directly within the Cloudflare network. It enables flexible and serverless email handling, such as filtering, parsing, or routing emails to different destinations based on specific rules
- Refer to [Cloudflare Email Workers](https://developers.cloudflare.com/email-routing/email-workers/) for more details

>[!important] Worker parameters
> ![[cloudflare_email_worker_message_object.png|500]]
> 
> You can access the environment variables of the email worker via the `env` parameter. The screenshot above shows the structure of the `message` parameter.

