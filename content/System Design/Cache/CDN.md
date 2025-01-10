---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
  - cloudflare
Creation Date: 2023-12-31, 21:12
Last Date: 2025-01-11T00:28:04+08:00
References: 
draft: 
description: A Content Delivery Network (CDN) enhances website performance by distributing static content through geographically dispersed cache servers. It reduces loading times by caching HTML pages based on various parameters, ensuring fast delivery and improved user experience while alleviating the load on origin servers.
---
## Abstract
---
- Stand as **Content Delivery Network**
- A network of **geographically dispersed [[Cache Server|cache servers]]** used to deliver static content like images, videos, CSS, JavaScript files, etc
- It enables the caching of HTML pages based on **request paths**, **query strings**, [[Cookie|cookies]], and **request headers** etc
- The origin server returns static assets to the CDN server, which may include optional HTTP headers like [[HTTP Headers#Cache-Control|Cache-Control]], specifying how long the static assets are cached on the [[Host#Client|client]]


>[!success] Improved loading time
> ![[cdn_load_time.png|400]]
> 
> When a user visits a website, a [[CDN|CDN Server]] closest to the user will deliver static content. By doing so, the CDN server also helps to relieve the load on the origin server.

>[!important] CDN Fallback
> If there is a temporary **CDN outage**, [[Host#Client]] should be able to detect the problem and request resources from the origin. Thus ensuring [[System Design#Fault Tolerance (容错性)]].
> 

>[!info] 
> Dynamic content caching is a relatively new concept.


## CDN Cache Expiry
---
- For **time-sensitive** content, setting a **cache expiry time** is **important**
- It should neither be too long nor too short. If it is too long, the content might no longer be fresh. If it is too short, it can cause repeated loading of content from origin servers to the CDN, which leads to wasted [[Bandwidth|bandwidth]]

### CDN Cache Invalidation
- We should be able to invalidate the [[CDN]] object using APIs provided by CDN vendors
- Or allow versioning like `image.png?v=2`

## CDN in China
---
- While using a CDN can help improve loading times, many global CDNs **do not have Points of Presence within China**, limiting their effectiveness. A China-specific CDN can mitigate some of these issues but often requires compliance with local laws


>[!important] Local laws
> Websites without an ICP license often experience slower loading speeds due to the Great Firewall of China, which adds latency to data requests. This can result in loading times exceeding **10 to 30 seconds**, far beyond the user **expectation of under 2 seconds**.
> 
> **Increased Risk of Blocking**: Websites that do not comply with local regulations may face higher chances of being blocked
