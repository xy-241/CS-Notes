---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-21T10:27:17+08:00
Last Date: 2024-10-16T20:30:09+08:00
References: 
---
## Abstract
---
- One [[HTTP Request]] at a time but with [[#Keep-Alive (持久连接)]]

>[!caution] Data Transfer Congestion
> We can only send the next HTTP Request when we receive the [[HTTP Response]] for the previous HTTP Request sent. This may cause [[Head-of-Line Blocking (队头堵塞)]] which leads to data transfer congestion. 

## Keep-Alive (持久连接)
---
- Offers persistent [[TCP Connection]]

>[!success] Reduce Overhead
> For each [[HTTP Request]], we don't need to initialised another [[TCP Handshake]] and both the http request and [[HTTP Response]] are sharing the same [[TCP Connection]]. This solves the high overhead issue in [[HTTP 1.0]].

## HTTP 1.1 Pipelining
---
- The ability to send multiple [[HTTP Request|HTTP requests]] over a single [[TCP Connection|TCP connection]] without waiting for the corresponding responses to arrive

>[!caution] Pitfall
>  ![[http_pipelining.png|500]]
>  
> If one request in the pipeline takes longer to process, it delays all subsequent responses, which reduces the performance benefits. This causes [[Head-of-Line Blocking (队头堵塞)]].



