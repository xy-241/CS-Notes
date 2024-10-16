---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2024-10-16T17:07:15+08:00
References: 
---

## Abstract
---
- [[Host]] pushes [[Network Object]] it thinks host needs without the need to receive any specific [[HTTP Request]] for the object. This **reduces the number of round trips taken**

>[!caution]
> However, if a host clicks on the web page, many network objects will be received.
> 
> Potential [[DDoS]]: a single HTTP request can trigger multiple [[HTTP Response]].
