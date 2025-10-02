---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-19T17:48:55+08:00
Last Date: 2025-10-02T22:31:22+08:00
References:
description: Learn what QUIC (Quick UDP Internet Connections) is, how it integrates TCP, TLS, and HTTP/2 over UDP, and why it solves head-of-line blocking. Explore QUIC handshake, streams, frames, and key advantages of HTTP/3.
---
## Abstract
---
![[quic_comparsion.png|500]]

- Stands for **Quick UDP Internet Connections**
- Think of QUIC as being similar to [[TCP]]+[[TLS 1.2|TLS]]+[[HTTP 2.0]] implemented on [[UDP]] (Like [[TCP]] 2.0)
- Built on top of [[UDP]] but the mechanism is based on [[TCP]]
- Come with [[Zero Round Trip Time Resumption (0-RTT)]]

>[!question] Why not build it on top of TCP?
> We can't change **TCP** in the same way we change **HTTP** to solve the [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking|TCP Head-of-Line Blocking issue]], because modifying **TCP** requires changes to the [[Kernel|kernel codes]], which is much harder than changing a browser codes.

>[!tool]
> - [Check if a site supports HTTP1.3](https://http3check.net/)
> - [HTTP 1.3 Benchmarking](https://requestmetrics.com/web-performance/http3-is-fast/)

## QUIC Handshake
---
![[http1.3_tcp_tls_integration.png|500]]

- Integrating [[TCP Handshake]] with TLS Handshake into [[QUIC Handshake]]


## QUIC Stream
---
- Introduce [[HTTP 2.0#HTTP Stream]] in the [[OSI Model|transport layer]]
- Abstracting [[HTTP Request]]/[[HTTP Response]] into [[#QUIC Frame]]

>[!important]
> Solves [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking]] issue.

### QUIC Frame
![[quic_frame.png|400]]

- Similar to the [[HTTP 2.0#HTTP Frame]], there isn't HTTP frame in [[QUIC]]
