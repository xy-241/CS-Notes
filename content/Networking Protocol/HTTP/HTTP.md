---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - python
Creation Date: 2023-08-21T10:46:00
Last Date: 2024-01-16T20:46:01+08:00
References: 
---
## Abstract
---
- Defines the format of [[HTTP Request]] & [[HTTP Response]]
- [[Network Protocol#Stateless Network Protocol]]
>[!caution] User Authentication
>[[Host#Server]] doesn't know if [[Host#Client]] login before or not, client needs to include things like [[Cookies]] in [[HTTP Headers]] to show it is authenticated

</br>

- Uses [[TCP]] as its underlying transport protocol. So HTTP doesn't need to worry about data integrity - handled by TCP
- Allow transfer any types of [[Network Object]] 

### HTTP Mechanism
1. [[Host#Client]] initiates a [[TCP Connection]] with the [[Host#Server]]
2. Client and server access TCP through their [[Socket#Network Domain Socket]]
3. Both client and server send/receive [[HTTP Request]]/[[HTTP Response]] from the socket interface 

### Python HTTP Server
- You can spin up a HTTP Server using `python3 -m http.server <PORT_NUMBER>` easily 

## Cons
---
### Bandwidth Demanding
- Bloated [[HTTP Headers]] is included in both [[HTTP Request]] & [[HTTP Response]]

### Slow Start
- [[TCP Connection]] has a warm up period 


## References
---
- [HTTP 3 Explained](https://youtu.be/ai8cf0hZ9cQ)