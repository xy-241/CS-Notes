---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-12-31, 21:12
Last Date: 2023-12-31T21:24:09+08:00
References: 
draft: 
---
## Abstract
---
- Stand as *Content Delivery Network*
- A network of *geographically dispersed [[Cache Server]]* used to deliver static content like images, videos, CSS, JavaScript files, etc
- Enables the caching of HTML pages that are based on *request path*, *query strings*, [[Cookie]], and *request headers* etc

>[!note] Dynamic content caching is a relatively new concept


## Benefits 
---
### Improved Load Time
![[cdn_load_time.png|500]]
- When a user visits a website, a [[CDN|CDN Server]] closest to the user will deliver static content. Intuitively, the further users are from CDN servers, the slower the website load