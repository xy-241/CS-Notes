---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-12-31, 21:12
Last Date: 2024-01-01T22:27:44+08:00
References: 
draft: 
---
## Abstract
---
- Stand as *Content Delivery Network*
- A network of *geographically dispersed [[Cache Server]]* used to deliver static content like images, videos, CSS, JavaScript files, etc
- Enables the caching of HTML pages that are based on *request path*, *query strings*, [[Cookie]], and *request headers* etc
- The origin returns static assets to the CDN server, which includes optional HTTP header *Time-to-Live (TTL)* which describes how long the static assets are cached.

>[!note] Dynamic content caching is a relatively new concept


## Benefits 
---
### Improved Load Time
![[cdn_load_time.png|500]]
- When a user visits a website, a [[CDN|CDN Server]] closest to the user will deliver static content. Intuitively, the further users are from CDN servers, the slower the website load


## Things to Note
---
### Cost
- Avoid caching infrequently used assets that provide no significant benefits
- For example, we know our origin server is at Singapore, and all the users are also at Singapore

### Appropriate Cache Expiry
- For time-sensitive content, setting a cache expiry time is important
- Should neither be too long nor too short. If it is too long, the content might no longer be fresh. If it is too short, it can cause repeat reloading of content from origin servers to the [[CDN]]

### CDN Fallback
- If there is a temporary [[CDN]] outage, [[Host#Client]] should be able to detect the problem and request resources from the origin
- Thus [[System Design#Fault Tolerance (容错性)]]

### Invalidating Files
- We should be able to invalidate the [[CDN]] object using APIs provided by CDN vendors
- Or allow versioning like `image.png?v=2`