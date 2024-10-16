---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - system_design
Creation Date: 2023-10-07T17:40:00
Last Date: 2024-10-16T17:51:07+08:00
---
## Abstract
---
<img src="https://yt3.ggpht.com/M6anxyOhsmc8TiSf8ntQyuuEiaD-cXW2arYjg5SgVZ6ZXV1heseOV_hvQ1h2ozwK0EHG5iNBI1MovQ=s1400-nd-v1" width="800" />

- REpresentational State Transfer
- A way to **architect** an **interface** that enables communication between [[Host#Server]] & [[Host#Client]]
- Usually implemented in [[HTTP]]
- Not a [[Network Protocol]], but a set of rules - [[#6 Rules]]
- [[HTTP Status Code]] is used to tell the client the complete status of the request
- Alternatives are [[GraphQL]] & [[gRPC]] 

## 2 Cores
---
### REpresentational
- Represent *resources* in a way([[URI]]) for clients to consume
### State Transfer
- This architecture is [[Network Protocol#Stateless Network Protocol]] so a *state* is required to be exchanged for client-server to have a continuous communication

## 6 Rules
---
### Client-Server
### Stateless
- [[Network Protocol#Stateless Network Protocol]]
### Uniform Interface
- Each resource is represented by a different [[URI]]
- With 4 main actions for clients to tell servers what it want to do. The actions can be categories into CRUD, except `Create - POST`, the rest is [[Idempotent]]
```java
Create - POST
Read - GET
Update - PUT
Delete - DELETE
```
### Cacheable
- Support *cacheing* because [[Network Protocol#Stateless Network Protocol]], `Get` requests are usually cached
### Layer System
- We can place a [[Load Balancer|load balancer]] in front of the **client**. This makes it harder for the **client** to fully understand the underlying architecture
- We can also add an extra layer of security, such as an **API Gateway** or a **Web Application Firewall** to enhance protection
- It also becomes easier to scale the architecture; for example, you can add **Lambda functions** with these layers acting as abstraction layers

### Code on Demand


## Best Practices
---
### The endpoint/resource should be noun instead verb
- Actions verbs are represented by the request type
### Use Pagination when server returns a large amount of data
- The server should accept the pagination parameters from clients
- If not specified, server should have default parameter values
### Versioning
- Allow backward-compatibility when we introduce breaking changes, so consumers get enough time to move to the next version
- We can version the api by prefix the version in-front of the [[#Resource]] like `/v1/products`, `/v2/products`


## Benefits
---
### Simple & Standardised
- Because the server does not need to programmed to keep track of any state information
### Scalable
- Each request to a stateless API can be handled by any server, regardless of the state of the client or the previous requests that the client has made
### High Performance
- Because [[#Cacheable]]
### Reliable
- Server doesn't to need to worry about losing state information in the event of a failure

## Cons
---
### Requires In-Depth Documentation
### Can't Get Customised Resources
- We get all the data from an [[URI]], then have to perform client-side manipulation to get what we actually want - waste [[Bandwidth]]

## Terminologies
---
### RESTful
- A service that uses REST API to communicate 
### Resource
- A subset of the services a server provides to the client