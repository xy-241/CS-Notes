---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - cloudflare
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2024-03-27T23:58:34+08:00
References: 
---
## Abstract
---
- [[Host#Server]] that stores [[DNS Record]]

## DNS Resolver
---
![[dns_resolver.png|500]]
- Acts as a middleman between a [[Host#Client]] and a [[#Authoritative DNS Server]]
- We can either create one using [unbound](https://docs.pi-hole.net/guides/dns/unbound/) or a 3rd-party services like [1.1.1.1](https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/). By default, we are using the DNS Resolver provider by our [[ISP]]

**Mechanism**
- After receiving a DNS query from a client, resolver will either respond with **cached data**, or send a request to [[#Root DNS Server]], followed by another request to a [[#Top-Level Domain DNS Server]], and then one last request to an [[#Authoritative DNS Server]]. After receiving a response from the authoritative server containing the requested IP address, the resolver then sends a response to the client

>[!success] Caching 
> Resolver will cache information received from authoritative nameservers.
> 
> When a client requests the IP address of a domain name that was recently requested by another client, the resolver can just deliver the client the requested record from its cache, avoid the **expensive recursive query**!



## Root DNS Server
---
![[root_dns_server.png|500]]
- 13 root DNS Server known to every [[#DNS Resolver]], and they are the first stop in a recursive resolver’s quest for [[DNS Record]]
 
**Mechanism**
- A root server accepts a recursive resolver’s query which includes a [[Hostname#Domain Name]], and the root nameserver responds by directing the recursive resolver to a [[#Top-Level Domain DNS Server]], based on the extension of that domain (.com, .net, .org, etc.)


>[!info]- 13 Root DNS Servers
> This does not mean that there are only 13 machines in the Root DNS Server. There are 13 types of Root DNS Server, but there are multiple copies of each one all over the world, which use [Anycast routing](https://www.cloudflare.com/learning/cdn/glossary/anycast-network/) to provide speedy responses. If you added up all the instances of root nameservers, you’d have over 600 different servers.
> 
> The root nameservers are overseen by a nonprofit called the Internet Corporation for Assigned Names and Numbers (ICANN).


## Top-Level Domain DNS Server
---
![[tld_dns_server.png|500]]
- [[DNS Server]] that manages **Generic top-level domains** like `ninja` & `com` etc or **Country top-level domains** like `uk` & `jp` etc
- Respond [[DNS Server#DNS Resolver]] the direction to the [[#Authoritative DNS Server]] for a given [[Hostname#Domain Name]]

## Authoritative DNS Server
---
![[authoritative_dns_server.png|500]]
- The authoritative nameserver is usually the [[#DNS Resolver]]’s last step in the journey for an [[IP Address]]
- [Cloudflare DNS](https://www.cloudflare.com/dns/) distributes authoritative nameservers, which come with [[Anycast Routing]] to make them more reliable


**Mechanism**
- Return [[IP Address]]  of [[Hostname#Domain Name]] base on [[DNS Record#A Record]]
- OR if the domain has a [[DNS Record#CNAME Record]] it will provide the recursive resolver with the [[Hostname#Canonical Hostname (CNAME)]], at which point the recursive resolver will have to perform a **whole new DNS lookup** to procure a record from an Authoritative DNS Server (often an A record containing an IP address)



## References
---
- [DNS server types | Cloudflare](https://www.cloudflare.com/en-gb/learning/dns/dns-server-types/)