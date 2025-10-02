---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-18T12:56:00
Last Date: 2025-10-02T22:35:41+08:00
References:
draft:
description: Discover HTTP/2 improvements over HTTP/1.1, including multiplexing, server push, HPACK header compression, and binary framing for faster, more efficient web performance.
---
## Abstract
---
[[HTTP 1.1]] but with the following 4 improvements 
1. [[#HTTP Multiplexing]]
2. [[#Server Push]]
3. Compressing the [[HTTP Headers]] with [[HPACK]]
4. HTTP messages are binary-encoded instead of ASCII-encoded, this is more efficient for parsing & less readable for hackers

## HTTP Stream
---
- An HTTP stream consists of multiple [[#HTTP Frame]]

>[!important]
> Each HTTP stream (a pair of [[HTTP Request]]/[[HTTP Response]]) doesn't need to be sent in order in the same [[TCP Connection]], so HTTP response can be received in a different order of sending the HTTP requests. This is achieved with  HTTP Stream ID (流标示符) in the HTTP frame.

### HTTP Frame
![[http1.2_frame.png|500]]

- An abstraction that allows us to divide [[HTTP Request]] and [[HTTP Response]] into multiple pieces 
- There are two types - HTTP header frame, HTTP data frame

## HTTP Multiplexing
---
- A [[HTTP 2.0]] feature powered by [[#HTTP Stream]], solves [[Head-of-Line Blocking (队头堵塞)#HTTP Head-of-Line Blocking]] in [[HTTP 1.1]]. Each request-response pair is assigned a unique identifier (stream), allowing the client and server to send and **receive responses out of order**, independent of when the requests were made.
- Usually comes with [[TLS]]

>[!success] Better performance
> With multiple [[HTTP Request]] in one [[TCP Connection]] at the same time, waiting time reduced greatly aka better performance.

>[!important] On high-loss or high-latency networks, HTTP/1.1 can actually be faster
> Because we will still have the [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking]], and HTTP 1.1 may perform better with multiple [[TCP Connection]].
> 
> To elaborate more, HTTP/2 multiplexes many requests over a **single TCP connection**. If one packet in that connection is lost, the entire connection stalls until retransmission happens. In contrast, HTTP/1.1 can open 6–8 parallel TCP connections per domain, so a packet loss only stalls that one stream, not all.



## Server Push
---
- A [[HTTP 2.0]] improvement that allows client/server to push [[Network Object]] it thinks client/server needs without the need to receive any specific [[HTTP Request]] for the object. This **reduces the number of round trips taken**

>[!caution]
> However, if a host clicks on the web page, many network objects will be received. This may result in potential [[DDoS]: a single HTTP request can trigger multiple [[HTTP Response]].
> 
> If not tuned carefully, the server might push unnecessary or already-cached resources, **wasting bandwidth**.


