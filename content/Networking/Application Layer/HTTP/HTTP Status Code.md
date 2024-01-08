---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2024-01-08T15:29:40+08:00
References: 
---
## Abstract
---
- There is a lot, we can even custom our own one
- [Mozilla Detailed Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Cheatsheet](https://cheatography.com/kstep/cheat-sheets/http-status-codes/?source=post_page-----1353126d9cd9--------------------------------)
- [Twitter API Status Code](https://developer.twitter.com/ja/docs/basics/response-codes)

## 2XX
---
- *Successful [[HTTP Response]]*

### 201
- *Created*
- Requested resource is created successfully 

### 204
- *No Content*
- [[Host#Server]] successfully processed the [[HTTP Request]], but isn't returning any content 

### 218
<img src="https://c.tenor.com/MYZgsN2TDJAAAAAC/tenor.gif" width="300" alt="this is fine">

- *This is Fine*
- Specifically for Apache servers that serve as a [[Reverse Proxy (反向代理)]] with `ProxyErrorOverride on`
- For example, The [[Host#Server]] behind Apache can send the 218 status code, so the [[Host#Client]] will receive 218 even when there is an error code like [[#404]]

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

### 403
- *Forbidden*
- Happens when the provided [[Authentication]] information is rejected
### 404
- *Unfound*
- Resources can't be found on [[Host#Server]]

### 409
- *Conflict*
- Returned when the same resource is being processed
	1. Same user is created
	2. Concurrency Conflicts 

### 418
- *I'm a teapot*
- Indicates that the [[Host#Server]] refuses to brew coffee because it is, permanently, a teapot
### 420
- *Enhance Your Calm*
- Can be used to tell [[Host#Client]] it is being rated limited for making too many requests
- Replaced by [[#429]]

### 429
- *Too Many Requests*
- Returned when a request can't be served due to rate limiting 
### 451
- *Unavailable for legal reasons*
- Reference to [Fahrenheit 451](https://en.wikipedia.org/wiki/Fahrenheit_451)
- The user agent requested a resource that cannot legally be provided, such as a web page censored by a government. Or like Netflix geo-lock
- Usually can be solved with a [[VPN]]

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

### 504
- *Gateway Timeout*
- Indicates that a [[Proxy]], didn't receive a timely response from an upstream server it needed to access in order to complete the request

### 530 
- *Site Fronzen*
- Can be used when the site owner's free trial ends, the platform freezes the public access
## References
---
- HTTP Status Codes that should never have been created
![](https://youtu.be/_qKgO8BPHWc?si=CVXy82eBmo0hY3Ed)