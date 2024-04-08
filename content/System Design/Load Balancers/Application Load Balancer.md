---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-12-14T18:16:44+08:00
Last Date: 2023-12-30T00:55:50+08:00
---
## Abstract
---
- [[Load Balancer]] at [[OSI#Layer 7 (Application Layer)]]



## Benefits
---
### Smart load balancing
- We can look at the data & [[HTTP Headers]], and this enables [[micro-services]]
- Enables [[Authentication]] since we have access to the [[HTTP Request]] in plaintext
### Cacheing
- Because we have access to the [[Data]]

### Relieve Computation Load
- We can perform [[SSL Termination]] on [[Application Load Balancer]], so the destination server can focus its computation power on fulfilling the user's requests


## Cons
---
### Slower
- It needs to unpack the data all the way to [[OSI#Layer 7 (Application Layer)]] to view at the [[Data]]

### More Network Resource Intense
- We need to establish 2 [[TCP Connection]] instead of [[Network Load Balancer#Efficiency|Network Load Balancer's single TCP Connection]]
- One for the communication between the client and the load balancer, one for the communication between the load balancer and the servers


## External Application Load Balancer
---
- [[Application Load Balancer]] that is accessible from [[Internet]]
- Inside [[Public Subnet]] & has a [[Public IP]]

## Internal Application Load Balancer
---
- [[Application Load Balancer]]  that is NOT accessible from [[Internet]]
- Inside [[Private Subnet]] & Doesn't have a [[Public IP]]

- Routing internal [[micro-services]] traffic within the [[Computer Network]] like [[VPC]]
- For backend services that shouldn't be exposed to the Internet

## References
---
- [Load balancing in Layer 4 vs Layer 7 with HAPROXY Examples](https://www.youtube.com/watch?v=aKMLgFVxZYk&t=1186s)