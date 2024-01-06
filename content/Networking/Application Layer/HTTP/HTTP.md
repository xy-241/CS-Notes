---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-21T10:46:00
Last Date: 2024-01-06T21:46:18+08:00
References: 
---
## Abstract
---
- Defines the format of [[HTTP Request]] & [[HTTP Response]]
- [[Network Protocol#Stateless Network Protocol]]
>[!caution] User Authentication
>[[Host#Server]] doesn't know if [[Host#Client]] login before or not, client needs to include things like [[Cookies]] in [[HTTP Headers]] to show it is authenticated
- Uses [[TCP]] as its underlying transport protocol. So HTTP doesn't need to worry about data integrity - handled by TCP
- Allow transfer any types of [[Network Object]] 

## HTTPS
---
- Powered by [[TLS]]
## Mechanism
---
1. [[Host#Client]] initiates a [[TCP Connection]] with the [[Host#Server]]
2. Client and server access TCP through their [[Socket Inteface]]
3. Both client and server send/receive [[HTTP Request]]/[[HTTP Response]] from the socket interface 

## Cons
---
>[!caution] Bloated [[HTTP Headers]] in included in both [[HTTP Request]] & [[HTTP Response]]

>[!caution] [[TCP Connection]] has a warm up period 

## References
---
- [HTTP 3 Explained](https://youtu.be/ai8cf0hZ9cQ)