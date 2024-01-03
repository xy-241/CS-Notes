---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-09-28T10:59:00
Last Date: 2023-12-30T00:36:17+08:00
---
## Abstract
---
- [[Load Balancer]]  at [[OSI#Layer 4 (Transport Layer)]]


## Benefits
---
### Simpler load balancing
- Only look at [[IP Address]] & [[Network Port]]
### More secure 
- As data isn't required to get decrypted like the [[Application Load Balancer]]
### Efficiency
- One single TCP Connection from the client to the Load Balancer, and from Load Balancer to the server
- No data lookup

## Cons
---
### No smart load balancing
- No access to data like [[Cookie]] and [[URL]] etc make routing decisions like [[Application Load Balancer]]
### No applicate to micro-services
- Each [[URL#Path]] may be linked to a different [[micro-services]]
### No caching
- Because no access to [[Data]]


## References
---
- [Load balancing in Layer 4 vs Layer 7 with HAPROXY Examples](https://www.youtube.com/watch?v=aKMLgFVxZYk&t=1186s)