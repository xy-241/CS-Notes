---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-09-28T10:59:00
Last Date:
---
## Abstract
- [[OSI#Layer 4 (Transport Layer)]]
- [[Networking/Terminologies/Reverse Proxy]]
- Uses [[NAT]] to [[Proxy]] the incoming/outgoing traffic
- Listener can only be either `TCP`, `TCP_UDP`, `TLS` or `UDP` (Based on AWS experience)
- [[Target Group]] can only use [[Protocol]] `TCP`, `TCP_UDP`, `TLS` or `UDP` (Based on AWS experience)
- [[Health Check]] can use [[Protocol]] `TCP`, `HTTP` or `HTTPS` (Based on AWS experience)

## Benefits
### Simpler load balancing
- Only look at [[IP Address]] & [[Network Port]]
### Efficient 
- No data lookup
### More secure 
- As data isn't required to get decrypted like the [[layer 7]] [[Application Load Balancer (Layer 7)]]
### One single [[TCP Connection]]
- from the client to the Load Balancer, and from Load Balancer to the server

## Cons
### No smart load balancing
- No access to data like [[Cookie]] and [[URL]] etc make routing decisions like [[Application Load Balancer (Layer 7)]]
### No applicate to [[micro-services]]
- Each [[URL#Path]] may be linked to a different [[micro-services]]
### No caching
- Because no access to [[Data]]

## References
- [Load balancing in Layer 4 vs Layer 7 with HAPROXY Examples](https://www.youtube.com/watch?v=aKMLgFVxZYk&t=1186s)