---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
  - cloudflare
Creation Date: 2023-12-31, 21:12
Last Date: 2024-06-12T19:42:20+08:00
References: 
draft: 
---
## Abstract
---
- Stand as **Content Delivery Network**
- A network of **geographically dispersed [[Cache Server]]** used to deliver static content like images, videos, CSS, JavaScript files, etc
</br>

- Enables the caching of HTML pages that are based on **request path**, **query strings**, [[Cookie]], and **request headers** etc
- The origin returns static assets to the CDN server, which includes optional [[HTTP Headers#Cache-Control]] which describes how long the static assets are cached one the [[Host#Client]]



>[!tool] Efficient Crawler Page Indexing
>By default, websites are indexed by crawlers like search engines **passively**. With [Cloudflare's Crawler Hints](https://blog.cloudflare.com/crawler-hints-how-cloudflare-is-reducing-the-environmental-impact-of-web-searches/), crawlers will be notified to index or re-index the page when there is a change. This helps to have a more precise and on-time indexing of websites.
>
>You can configure this on [Cloudflare Caching Configuration](https://dash.cloudflare.com/?to=/:account/:zone/caching/configuration).
>
>![[cloudflare_crawler_hint.png]]


>[!success] Improved loading time
> ![[cdn_load_time.png|400]]
> 
> When a user visits a website, a [[CDN|CDN Server]] closest to the user will deliver static content. By doing so, the CDN server also helps to relieve the load on the origin server.

>[!important]  Appropriate cache expiry
> For **time-sensitive** content, setting a **cache expiry time** is **important**.
> 
> It should neither be too long nor too short. If it is too long, the content might no longer be fresh. If it is too short, it can cause repeated loading of content from origin servers to the CDN, which leads to wasted [[Bandwidth]].

>[!important] CDN Fallback
> If there is a temporary **CDN outage**, [[Host#Client]] should be able to detect the problem and request resources from the origin. Thus ensuring [[System Design#Fault Tolerance (容错性)]].
> 

>[!info] 
> Dynamic content caching is a relatively new concept.

### CDN Cache Invalidation
- We should be able to invalidate the [[CDN]] object using APIs provided by CDN vendors
- Or allow versioning like `image.png?v=2`

