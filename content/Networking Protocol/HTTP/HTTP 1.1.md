---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-21T10:27:17+08:00
Last Date: 2024-03-08T21:28:29+08:00
References: 
---
## Abstract
---
- One [[HTTP Request]] at a time but with [[#Keep-Alive (持久连接)]]

>[!caution] Data Transfer Congestion
> We can only send the next HTTP Request when we receive the [[HTTP Response]] for the previous HTTP Request sent. This may cause [[Head-of-Line Blocking (队头堵塞)]] which leads to data transfer congestion 

## Keep-Alive (持久连接)
---
- Offers persistent [[TCP Connection]]

>[!success] Reduce Overhead
> For each [[HTTP Request]], we don't need to initialised another [[TCP Handshake]] and both the http request and [[HTTP Response]] are sharing the same [[TCP Connection]]. This solves the high overhead issue in [[HTTP 1.0]]

## HTTP 1.1 Pipelining
---
- The ability to send multiple [[HTTP Request]] in a single [[TCP Connection]], so one failed HTTP Request cant block [[HTTP Response]] of other HTTP Request

>[!caution] Pitfall
> Response must be received in the order of sending the Request. This is a problem, because we may lose the 1st Request, then the second Response becomes the result for the 1st HTTP Request
> 
> ![[http_pipelining.png|500]]


