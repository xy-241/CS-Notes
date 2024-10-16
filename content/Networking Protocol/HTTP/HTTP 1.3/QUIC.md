---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-19T17:48:55+08:00
Last Date: 2024-10-16T17:26:29+08:00
References: 
---
## Abstract
---
![[quic_comparsion.png|500]]

- Stands for **Quick UDP Internet Connections**
- Think of QUIC as being similar to [[TCP]]+[[TLS 1.2|TLS]]+[[HTTP 1.2]] implemented on [[UDP]] (Like [[TCP]] 2.0) 
- Built on top of [[UDP]] but the mechanism is based on [[TCP]]

>[!question] Why not build it on top of TCP?
> We can't change **TCP** in the same way we change **HTTP** to solve the [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking|TCP Head-of-Line Blocking issue]], because modifying **TCP** requires changes to the [[Kernel|kernel codes]], which is much harder than changing a browser codes.


## QUIC Handshake
---
![[http1.3_tcp_tls_integration.png|500]]

- Integrating [[TCP Handshake]] with TLS Handshake into [[QUIC Handshake]]




## QUIC Stream
---
- Introduce [[HTTP Stream]] in the [[Transport Layer]]
- Abstracting [[HTTP Request]]/[[HTTP Response]] into [[#QUIC Frame]]

>[!important]
> Solves [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking]] issue.

### QUIC Frame
![[quic_frame.png|400]]

- Similar to the [[HTTP Frame]], there isn't [[HTTP Frame]] in [[HTTP 1.3]]
