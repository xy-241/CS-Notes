---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-19T17:43:54+08:00
Last Date: 2024-10-16T17:25:57+08:00
References: 
---
## Abstract
---
- An HTTP stream consists of multiple [[HTTP Frame]]

>[!important]
> Each HTTP stream (a pair of [[HTTP Request]]/[[HTTP Response]]) doesn't need to be sent in order in the same [[TCP Connection]], so HTTP response can be received in a different order of sending the HTTP requests. This is achieved with  HTTP Stream ID (流标示符) in the HTTP frame.
