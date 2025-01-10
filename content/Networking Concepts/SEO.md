---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - cloudflare
Creation Date: 2024-05-22, 17:15
Last Date: 2025-01-11T00:11:26+08:00
References: 
draft: 
description: A Content Delivery Network (CDN) enhances website visibility by improving search engine rankings. Webmaster tools, such as Google Search Console, assist website owners in monitoring and optimizing their site’s performance. Efficient crawler indexing ensures timely updates, enhancing user experience and reducing server load.
title: SEO 101
---
## Abstract
---
- **Up the ranking** of websites when users search for something **related** in the **search engine**

## Webmaster
---
- Services provided by **search engines** to help **website owners** **monitor**, **maintain**, and **improve** their **site’s visibility in search engine results**
- Here are some major webmaster tools - [Google Webmaster](https://search.google.com/search-console/), [Bing Webmaster](https://www.bing.com/webmasters/), [Yandex Webmaster](https://webmaster.yandex.com/welcome/) & [Baidu Webmaster](https://ziyuan.baidu.com/site/index)

%% ## HTML Tags
---
### `<time>` %%


## Efficient Crawler Page Indexing
---
![[cloudflare_crawler_hint.png|500]]

- By default, websites are indexed by crawlers like search engines **passively**. With [Cloudflare's Crawler Hints](https://blog.cloudflare.com/crawler-hints-how-cloudflare-is-reducing-the-environmental-impact-of-web-searches/), crawlers will be notified to index or re-index the page when there is a change. This helps to have a more precise and on-time indexing of websites
- You can configure this on [Cloudflare Caching Configuration](https://dash.cloudflare.com/?to=/:account/:zone/caching/configuration)
