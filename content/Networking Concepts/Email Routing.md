---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - cloudflare
Creation Date: 2024-03-07, 16:38
Last Date: 2025-09-24T18:26:52+08:00
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

>[!important] Worker observability
>We are able to collect [[Observability#Log|logs]] of the worker now! For more details, refer to [Cloudflare worker logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/).


## Use Gmail to Send Emails with Your Custom Domain
---

### 1. Generate a Google App Password
1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords).
2. Sign in with your Google account.
3. Type a name (e.g., `CustomDomainMail`) and click **Create**.
4. Copy the generated 16-character app password. Keep it safe, you’ll need this when configuring Gmail to send emails with your custom domain name.

### 2. Configure Gmail to Send with Your Custom Domain
1. Open **Gmail** → click the **gear icon** → **See all settings**.
2. Go to the **Accounts and Import** tab.
3. Under **Send mail as**, click **Add another email address**.
4. Enter:
    - **Name:** Your display name (e.g., pretty_email_xinyang)
    - **Email address:** `you@yourdomain.com`
    - ✅ Tick **Treat as an alias** (recommended for personal use).
5. Click **Next Step**.
6. Enter the SMTP details:
    - **SMTP Server:** `smtp.gmail.com`
    - **Port:** 587 (TLS/STARTTLS) or 465 (SSL if 587 doesn’t work)
    - **Username:** your full Gmail address (`yourname@gmail.com`)
    - **Password:** the [[#1. Generate a Google App Password|16-digit App Password]] you generated
7. Click **Add Account**.
8. Gmail sends a **verification email** to `you@yourdomain.com` ([[#Email Routing Mechanism|forwarded to your Gmail inbox]]).
9. Open it → click the link or enter the code.

### 3. Verify Your “Reply From” Settings
To avoid leaking your Gmail address:
1. In **Accounts and Import**, under **When replying to a message**, select:
	- **Reply from the same address the message was sent to.**
2. Now, if someone emails `you@yourdomain.com`, Gmail automatically replies as `you@yourdomain.com`.

### 4. Set Up Email Authentication (Fix Outlook “Unverified”)
- Even if sending works, Outlook and other providers may show your emails as **Unverified** unless you configure [[Email Security|SPF, DKIM, and DMARC]]. These authenticate your domain and improve deliverability

>[!important] Setting up DKIM
> One option is to use Google Workspace which costs money.
> 
> Another option is to use an SMTP relay with [[Email Security#DKIM|DKIM]] like SendGrid, Mailgun, Postmark, AWS SES, SMTP2GO which come with a free plan. Setup steps:
> 1. Sign up and add `your_domain` as a sending domain.
> 2. They’ll give you DKIM TXT records to add in Cloudflare.
> 3. Update [[#2. Configure Gmail to Send with Your Custom Domain| Gmail “Send mail as” (step 6)]] → use their SMTP server instead of `smtp.gmail.com`.
> 4. Emails will be signed with DKIM and pass DMARC.

### 5. Test Your Setup
1. Send an email to [mail-tester.com](https://www.mail-tester.com).
2. Confirm SPF, DKIM, and DMARC all **PASS**.
3. Re-send to Outlook → the **Unverified** label should not appear.
