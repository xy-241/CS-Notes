---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - python
Creation Date: 2023-08-21T10:46:00
Last Date: 2024-10-16T17:44:15+08:00
References: 
---
## Abstract
---
- Defines the format of [[HTTP Request]] & [[HTTP Response]]
- [[Network Protocol#Stateless Network Protocol]]
- **HTTP** uses [[TCP]] as its underlying transport protocol, so it doesn't need to worry about data integrity, which is handled by **TCP**. However, this also means it suffers from [[TCP#TCP Slow Start]]
- Allow transfer any types of [[Network Object]] 

>[!important] User Authentication
>[[Host#Server]] doesn't know if [[Host#Client]] login before or not, client needs to include things like [[Cookies]] in [[HTTP Headers]] to show it is authenticated

>[!attention] Bandwidth Demanding
> Bloated [[HTTP Headers]] is included in both [[HTTP Request]] & [[HTTP Response]].

>[!code] Python HTTP Server
> You can spin up a HTTP Server using `python3 -m http.server <PORT_NUMBER>` easily.


### HTTP Mechanism
1. [[Host#Client]] initiates a [[TCP Connection]] with the [[Host#Server]]
2. Client and server access [[TCP]] through their [[Socket#Network Domain Socket]]
3. Both client and server send/receive [[HTTP Request]]/[[HTTP Response]] from the socket interface 




## References
---
- [HTTP 3 Explained](https://youtu.be/ai8cf0hZ9cQ)