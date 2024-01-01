---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2024-01-01, 22:38
Last Date: 2024-01-01T22:54:28+08:00
References: 
draft: 
---
## Abstract
---
- [[Host#Server]] that handles the business logic of the system like [[Authentication]]



## Stateful Compute Server
---
<img src="https://proxy-prod.omnivore-image-cache.app/0x0,spcYlEEBWYbtLl7GxWu4llfQaOY1D5g8VAe7jYtlRTRM/https://bytebytego.com/_next/image?url=%2Fimages%2Fcourses%2Fsystem-design-interview%2Fscale-from-zero-to-millions-of-users%2Ffigure-1-12-WTWFBLWX.png&w=1920&q=75" width="500" />
- Remembers client data like [[Session Token]] (state) from one request to the next
- From the above diagram, user A’s session data and profile image are stored in Server 1
- To authenticate User A, HTTP requests must be routed to Server 1
- If a request is sent to other servers like Server 2, authentication would fail because Server 2 does not contain User A’s session data 
- Similarly, all HTTP requests from User B must be routed to Server 2; all requests from User C must be sent to Server 3

### Limitations
- Every request from the same client must be routed to the same server. This can be done with [[Load Balancer#Sticky Session]] with an overhead
- Adding and removing servers is much difficult with this approach, challenging to handle server failures
- Thus, less [[System Design#Scalability (可扩展性)]] and [[System Design#Fault Tolerance (容错性)]]

## Stateless Compute Server
---
- Move the state li [[Session Token]] out of the [[Compute Server]], and store them in an external [[Database]]. And all the compute servers fetch state data from a shared database
- Requests from [[Host#Client]] can be sent to any compute servers, resolves the [[#Limitations|limitations of stateful compute server]]
- Thus more [[System Design#Scalability (可扩展性)]] and [[System Design#Fault Tolerance (容错性)]]