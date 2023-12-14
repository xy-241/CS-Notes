---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2023-12-12T11:49:00+08:00
References:
---
>[!abstract] Defines the format of [[HTTP Request]] & [[HTTP Response]]

>[!note] Uses [[TCP]] as its underlying transport protocol 
>HTTP doesn't need to worry about data integrity - handled by TCP

>[!note] [[Stateless protocol]] 
>>[!caution] User Authentication
>>[[HTTP Server]] doesn't know if [[Host]] login before or not, client needs to include things like [[Cookies]] in [[HTTP Headers]] to show it is authenticated

>[!note] Allow transfer any types of [[Object]]


> [!note] Mechanism
> 1. [[HTTP Client]] initiates a [[TCP Connection]] with the [[HTTP Server]]
> 2. Client and server access TCP through their [[Socket Inteface]]
> 	1. Both client and server send/receive [[HTTP Request]]/[[HTTP Response]] from the socket interface 
>

>[!caution] Bloated [[HTTP Headers]] in included in both [[HTTP Request]] & [[HTTP Response]]

>[!caution] [[TCP Connection]] has a warm up period 

## References
---
- [HTTP 3 Explained](https://youtu.be/ai8cf0hZ9cQ)