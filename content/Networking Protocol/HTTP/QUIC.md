---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-19T17:48:55+08:00
Last Date: 2026-10-17T14:44:36-07:00
References:
description: Learn what QUIC (Quick UDP Internet Connections) is, how it integrates TCP, TLS, and HTTP/2 over UDP, and why it solves head-of-line blocking. Explore QUIC handshake, streams, frames, and key advantages of HTTP/3.
---
## Abstract
---
![[quic_comparsion.png|500]]

- Stands for **Quick UDP Internet Connections**
- Think of QUIC as being similar to [[TCP]]+[[TLS 1.2|TLS]]+[[HTTP 2.0]] implemented on [[UDP]] (Like [[TCP]] 2.0)
- Built on top of [[UDP]] but the mechanism is based on [[TCP]]
- Comes with **0-RTT (Zero Round Trip Time Resumption)** which sends an encrypted request using a key from a previous connection. The server cannot tell if the data is a replay, so use it **only for idempotent requests**

>[!question] Why not build it on top of TCP?
> We can't change **TCP** in the same way we change **HTTP** to solve the [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking|TCP Head-of-Line Blocking issue]], because modifying **TCP** requires changes to the [[Kernel|kernel codes]], which is much harder than changing a browser codes.

>[!tool]
> - [Check if a site supports HTTP1.3](https://http3check.net/)
> - [HTTP 1.3 Benchmarking](https://requestmetrics.com/web-performance/http3-is-fast/)

## QUIC Handshake
---
![[http1.3_tcp_tls_integration.png|500]]

- TCP lives in the kernel and TLS runs above it, so TLS cannot start until the TCP connection is established. HTTPS combines the two into one layer, letting the TCP and TLS handshakes happen at the same time


## QUIC Stream
---
- Introduce [[HTTP 2.0#HTTP Stream]] in the [[OSI Model|transport layer]]
- Abstracting [[HTTP Request]]/[[HTTP Response]] into [[#QUIC Frame]]

>[!important]
> Solves [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking]] issue.

### QUIC Frame
![[quic_frame.png|400]]

- Similar to the [[HTTP 2.0#HTTP Frame]], there isn't HTTP frame in [[QUIC]]


## QUIC vs TCP
- [[TCP]] has one ordered byte stream per connection, so a single lost packet blocks the whole connection. [[QUIC]] has multiple streams per connection, a single lost packet only blocks one stream, assets on other streams can still be transmitted
- QUIC has **packet number** which is similar to [[TCP#Sequence Number|sequence number]] but only used for **loss detection** and RTT measurement. This avoid [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking|TCP head of line blocking]] as **stream id is in charge of ordering and reassembly**

>[!question] Is stream expensive?
> No, all streams share the same connection, so no connection or handshake needed