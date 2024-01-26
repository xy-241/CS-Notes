---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
  - cloudflare
Creation Date: 2023-12-31, 21:12
Last Date: 2024-01-26T12:31:53+08:00
References: 
draft: 
---
## Abstract
---
- Stand as *Content Delivery Network*
- A network of *geographically dispersed [[Cache Server]]* used to deliver static content like images, videos, CSS, JavaScript files, etc
</br>

- Enables the caching of HTML pages that are based on *request path*, *query strings*, [[Cookie]], and *request headers* etc
- The origin returns static assets to the CDN server, which includes optional [[HTTP Headers#Cache-Control]] which describes how long the static assets are cached one the [[Host#Client]]

>[!note] Dynamic content caching is a relatively new concept

>[!tip] Efficient Crawler Page Indexing
>By default, websites are indexed by crawlers like search engines **passively**. With [Cloudflare's Crawler Hints](https://blog.cloudflare.com/crawler-hints-how-cloudflare-is-reducing-the-environmental-impact-of-web-searches/), crawlers will be notified to index or re-index the page when there is a change. This helps to have a more precise and on-time indexing of websites.
>
>You can configure this on [Cloudflare Caching Configuration](https://dash.cloudflare.com/?to=/:account/:zone/caching/configuration)
![[cloudflare_crawler_hint.png]]

## Benefits 
---
### Improved Load Time
![[cdn_load_time.png|400]]
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