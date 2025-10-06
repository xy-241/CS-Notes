---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-10-24T15:49:00
Last Date: 2025-10-06T12:49:09+08:00
References:
description: Learn how reverse proxies and API gateways enhance web architecture, from load balancing, DDoS protection, caching, and SSL termination to unified microservice access. Explore how ingress services like Cloudflare’s edge network combine layers of reverse proxies for faster, more secure, and scalable systems.
---
## Abstract
---

![[reverse_proxy.png|300px]]
- Sits between [[Internet]] and [[Host#Server]] that accepts a request from the [[Host#Client]], forwards the request to server, and returns the results to the client as if the proxy server had processed the request
- The client doesn't know which destination server it is connecting to. However, some can add [[HTTP Headers]] to tell the client which destination server it is connecting to
- We can have multiple layers of *Reverse Proxy* between the client and server to form a [[#Ingress Service]]
- For traffic that is coming in


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


## API Gateway
---
- An **API Gateway** is basically a [[Reverse Proxy (反向代理)|reverse proxy]] that sits in front of all the microservices.
- It can act like a [[Load Balancer|load balancer]], distributing incoming requests across multiple instances of a service for better scalability and reliability.

>[!important] Middleware
> API Gateway uses middleware to **offload common features** from the backend services, like request validation, authentication, rate limiting, and logging. his helps each microservice stay focused on its own business logic instead of repeating these cross-cutting concerns.

>[!important] API versioning and staging
> So older API versions can still route to older microservice sets without breaking existing clients.

>[!important] Protocol translation
> For example, some microservices may speak [[gRPC]] or another binary protocol that clients don’t understand, and the gateway can convert those responses into something client-friendly (like JSON over [[HTTP]]).

>[!important] Single unified endpoint for clients to access all backend services
> This is especially valuable in a **microservices architecture**, where each service lives at its own address and port which would otherwise be messy for clients to manage.

>[!caution] System design interviews
> It is good to **mention** the API Gateway when discussing microservices (it shows you understand real-world patterns), but you don’t need to dive too deep into its internals unless the interviewer asks. A brief nod to its role like routing, middleware, protocol translation, and unified entry point is enough.

## Ingress Service
---
- An architecture that take advantage of [[#Benefits]] of [[Reverse Proxy (反向代理)]]

>[!example]
> Cloudflare's Edge Servers as Layer 1 to have [[#Protection Against DDoS]] and [[#Cache Static Content]].
> 
> Then *API Gateway*/[[Load Balancer]] as Layer 2 to perform [[#Load Balancing]] and [[#Handles SSL Termination]].
> 
> Lastly, there is a fast connection connects Cloudflare's *Edge Servers* & the *API Gateway*/Load Balancer to facilitate reliable and fast communication between the 2 layers
> 
> In this case, both Cloudflare's Edge Servers and API Gateway/Load Balancer are reverse proxy


## References
---
- [What is API Gateway? - YouTube](https://youtu.be/6ULyxuHKxg8?si=3zGBCtm8RFqG14-X)