---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-21T10:41:48+08:00
Last Date: 2023-08-21T10:41:48+08:00
References:
---
>[!abstract] When one of the many [[TCP Segment]] is lost, we need to wait for it to be resent & receive, in order to proceed with the receiving of the rest of the [[TCP Segment]] aka all the [[HTTP Response]] in that [[TCP Connection]] is blocked
>
>>[!success] Solved by [[HTTP 1.3]] [[Quick UDP Internet Connections (QUIC, TCP 2.0)]]