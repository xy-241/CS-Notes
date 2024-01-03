---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - system_design
Creation Date: 2023-10-07T17:40:00
Last Date: 2023-12-16T21:08:55+08:00
---
## Abstract
---
- REpresentational State Transfer
- A way to *architecture* an *interface* that enables communication between [[Host]] & [[Host]]
- Usually implemented in [[HTTP]]
- Not a [[Network Protocol]], but a set of rules - [[#6 Rules]]
- [[Status Code]] is used to tell the client the complete status of the request
- Alert-natives are [[GraphQL]] & [[gRPC]] 

## 2 Cores
---
### REpresentational
- Represent *resources* in a way([[URI]]) for clients to consume
### State Transfer
- This architecture is [[Network Protocol#Stateless Network Protocol]] so a *state* is required to be exchanged for client-server to have a continous communication

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
- We can have a [[Load Balancer]] infront of the [[Host]]
- This increases the difficulty for [[Host]] to know the [[Host]] architecture
- Add in an extra layer of security like *API Gateway* & *Web Application Firewall*
- And it is easier to scale the architecture - add in *Lambda Functions* for example with the layers acting as abstraction layers
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