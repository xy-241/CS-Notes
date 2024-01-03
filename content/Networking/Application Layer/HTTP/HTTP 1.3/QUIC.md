---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-19T17:48:55+08:00
Last Date: 2023-12-15T20:57:56+08:00
References: 
---
## Abstract
- Stands for *Quick UDP Internet Connections*
- Think of QUIC as being similar to [[TCP]]+[[TLS]]+[[HTTP 1.2]] implemented on [[UDP]] (Like [[TCP]] 2.0)
- Built on top of [[UDP]] but the mechanism is based on [[TCP]]
![[quic_comparsion.png]]
- Integrating [[TCP Handshake]] with [[TLS Handshake]] into [[QUIC Handshake]]
![[http1.3_tcp_tls_integration.png]]

>[!info] We can't change [[TCP]] like how we change [[HTTP]] to solve the TCP Head-of-Line Blocking issue, because changing [[TCP]] requires changes made to all the [[Kernel]] which is much harder than changing browser 



>[!success] Solve [[Head-of-Line Blocking (队头堵塞)#TCP Head-of-Line Blocking]] with [[[#QUIC Stream]]


## QUIC Frame
- Similar to the [[HTTP Frame]], there isn't [[HTTP Frame]] in [[HTTP 1.3]]
![[quic_frame.png]]

## QUIC Stream
- Introduce [[HTTP Stream]] in the [[Transport Layer]]
- An [[Abstraction (抽象)]] of [[HTTP Request]]/[[HTTP Response]] into [[#QUIC Frame]]]


