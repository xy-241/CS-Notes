---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 
Last Date:
---
## Abstract
---
- Listener can only be either `HTTP` or `HTTPS` (Based on AWS experience)
- [[Target Group]] can only use [[Network Protocol]] `HTTP` or `HTTPS` (Based on AWS experience)
- [[Health Check]] can only use [[Network Protocol]] `HTTP` or `HTTPS` (Based on AWS experience)

>[!note] 2 Types
>1. [[Internal ALB]]
>2. [[External ALB]]



>[!example]
>[AWS ALB](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)

## Benefits
---
### Smart load balancing
- We can look at the data & [[HTTP Headers]], and this enables [[micro-services]]
- Enables [[Authentication]] since we have access to the [[HTTP Request]] in plaintext
### Cacheing
- Because we have access to the [[Data]]


## Cons
---
### Expensive
- It looks at the [[Data]]
### [[SSL Termination]]
- Load balancer can view the [[Data]] in plaintext

### 2 [[TCP Connection]]
- one for the communication between the client and the load balancer, one for the communication between the load balancer and the servers

## References
---
- [Load balancing in Layer 4 vs Layer 7 with HAPROXY Examples](https://www.youtube.com/watch?v=aKMLgFVxZYk&t=1186s)