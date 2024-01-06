---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2024-01-06T21:32:44+08:00
References: 
---
## Abstract
---
- There is a lot, we can even custom our own one
- [Cheatsheet](https://cheatography.com/kstep/cheat-sheets/http-status-codes/?source=post_page-----1353126d9cd9--------------------------------)

## 2XX
---
- *Successful [[HTTP Response]]*

### 201
- *Created*
- Requested resource is created successfully 

### 204
- *No Content*
- [[Host#Server]] successfully processed the [[HTTP Request]], but isn't returning any content 

## 3XX
---
- *Redirection*

### 301
- *Permanent Redirect*
- Telling the [[Host#Client]] (usually a web browser or a web crawler) that the requested resource has moved permanently to a new location
- One use case is when clients accessing via [[HTTP]], but server only wants to serve via [[HTTP#HTTPS]]

### 302
- *Temporary Redirect*
- The redirected page isn't going to be indexed by search engine. The page that performs the redirects is
- If you need to permanently move a page to a new location, we should use [[#301]]
- Use cases are Temporary Maintenance and A/B Testing


## 4XX
---
- Indicates the [[Host#Client]]-side has some issues

### 400
- *Bad Request*
- The [[HTTP Request]] cannot be fulfilled due to bad syntax.
### 401
- *Unauthorised*
- You need to provide valid credentials (e.g., login information) to access this resource, and the ones you provided are not accepted
### 404
- *Unfound*
- Resources can't be found on [[Host#Server]]

### 409
- *Conflict*
- Returned when the same resource is being processed
	1. Same user is created
	2. Concurrency Conflicts 


## 5XX
---
- Indicates the [[Host#Server]]-side has some issues

### 500 
- *Internal Server Error*
- Some errors on the [[Host#Server]]

### 502 
- *Bad Gateway*
- [[Reverse Proxy (反向代理)]] unable to receive a valid [[HTTP Response]] from the [[Host#Server]]
- For example, [[AWS ALB]] unable to reach out to the [[Target Group]]