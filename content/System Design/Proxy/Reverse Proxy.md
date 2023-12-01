---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-10-24T15:49:00
Last Date: 
References:
---
## Abstract
- Sits between [[Internet]] and *Severs*
- We can have multiple layers of *Reverse Proxy* between the [[Clients]] and [[servers]] to form a [[#Ingress Service]]


## Benefits
### Stronger Protection Against [[DDoS]]
- [[IP Address]] of *Servers* is hidden behind *Reverse Proxy* from clients
### Cacheing
### Relief Load on [[servers]]
- Handles [[SSL Termination]]
### Load Balancing
- Distribute traffic from [[Clients]] to *Servers* evenly to prevent any single *compute* from overloading 


### Ingress Service
- Example: Cloudflare's *Edge Servers* as Layer 1, then *API Gateway*/[[Load Balancer]] as Layer 2
- A fast connection connects Cloudflare's *Edge Servers* & the *API Gateway*/[[Load Balancer]] 