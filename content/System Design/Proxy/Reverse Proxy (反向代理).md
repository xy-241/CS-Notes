---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-10-24T15:49:00
Last Date: 2023-12-30T01:00:11+08:00
References: 
---
## Abstract
---
![[reverse_proxy.png|300px]]
- Sits between [[Internet]] and [[Host#Server]] that accepts a request from the [[Host#Client]], forwards the request to server, and returns the results to the client as if the proxy server had processed the request
- The client doesn't know which destination server it is connecting to. However, some can add [[HTTP Headers]] to tell the client which destination server it is connecting to
- We can have multiple layers of *Reverse Proxy* between the client and server to form a [[#Ingress Service]]


## Benefits
---
### Load Balancing
- Distribute traffic from all clients  to servers evenly to prevent any single server from overloading 

### Protection Against DDoS
- [[IP Address]] of *Servers* is hidden behind *Reverse Proxy* from clients
- And reverse proxy is usually a cluster of many many servers that can share the [[DDoS]] traffic
### Cache Static Content
- The static content can be cached at the reverse proxy
- This removes some load from the servers and it is faster for the client to get back the requested resources
### Handles SSL Termination
- Since the reverse proxy sits within the same trusted network as the server
- We can perform [[SSL Termination]] on the reverse proxy, so the server can focus its compute resources on fulfilling the requests from clients

## Ingress Service
---
- An architecture that take advantage of [[#Benefits]] of [[Reverse Proxy (反向代理)]]

**Example**
- Cloudflare's Edge Servers as Layer 1 to have [[#Protection Against DDoS]] and [[#Cache Static Content]]
- Then *API Gateway*/[[Load Balancer]] as Layer 2 to perform [[#Load Balancing]] and [[#Handles SSL Termination]]
- Lastly, there is a fast connection connects Cloudflare's *Edge Servers* & the *API Gateway*/Load Balancer to facilitate reliable and fast communication between the 2 layers
- In this case, both Cloudflare's Edge Servers and API Gateway/Load Balancer are reverse proxy