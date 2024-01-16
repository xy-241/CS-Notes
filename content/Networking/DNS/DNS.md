---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-14T11:18:00
Last Date: 2024-01-17T00:23:37+08:00
References: 
---
## Abstract
---
- Translate [[Hostname]] to [[IP Address]]
- Runs over [[UDP]] & port 53
- Used by Other [[Application-layer Protocol]] like [[HTTP]] and [[SMTP]], to translate user-supplied [[Hostname]] to [[IP Address]]

>[!note] What is it?
>1. A [[Distributed Database]] implemented in a hierarchy of [[DNS Server]]
>2. An [[Application-layer Protocol]] that allows [[Host]] to query the [[Distributed Database]]
>	- Runs between communicating [[Host]] using the  [[Client-Server Paradigm]] 
>	- Relies on underlying [[End-to-end Transport Protocol]] to transfer [[DNS Messages]] between communicating [[Host]]



## DNS Features
---
### geoDNS
- A [[DNS]] service that allows [[Hostname#Domain Name]] to be resolved to [[IP Address]] based on the location of a user

### Host Aliasing
- A [[Host]] with [[Hostname#Canonical Hostname (CNAME)]] can have one or more alias names that are more readable 


>[!example] [[DNS Record#CNAME Record]]
> ``blog.yxy.ninja`` is the alias name for the CNAME of my blog cloudfront URL

### Mail Server Aliasing
- Obtain the [[Hostname#Canonical Hostname (CNAME)]] for a supplied alias [[Hostname]] and the [[IP Address]] of the [[Host]]


> [!example] [[DNS Record#MX Record]]
> ![[MX_Record.png]]
>- CNAME: mail.tutanota.de`
>- Alias [[Hostname]]: yxy.ninja`
>- So all the emails sent to `hello@yxy.ninja` is handled by the email servers behind `mail.tutanota.de`

### Load Distribution 
1. A set of  [[IP Address]] is associated with one [[Hostname#Alias Hostname]] 
2. When [[Host#Client]] make [[DNS]] query to that alias hostname
3. [[DNS Server]] responds the entire set of [[IP Address]] with the use of [[#DNS Rotation]]
4. Client typically sends its [[HTTP]] request message to the IP Address that is listed first in the set. Thus, distributing load among replicated server

>[!info]
>DNS Rotation is also used on [[E-mail servers]], so multiple of the servers can share the same Alias Hostname

### DNS Caching
- Cache [[DNS Record]] in [[Main Memory]]
- This allows us to bypass some or all the servers in [[DNS Server]]

### DNS Rotation
- - Rotate the order of a list of [[IP Address]]