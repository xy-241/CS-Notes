---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - cloudflare
  - curl
Creation Date: 2023-08-14T11:54:59+08:00
Last Date: 2024-02-29T16:12:32+08:00
References: 
---
## Abstract
---
- Contains information used for [[Authentication]] and information like [[Cookie]] etc



>[!tip]- Access & Manipulate HTTP Headers
> **Inspect the HTTP Headers with [[curl]]**
> ```bash
> curl -v <\ENDPOINT\>
> ```
> - Lines beginning with `>` indicate **request headers**
> - Lines beginning with `<` indicate **response headers**
> - Lines beginning with `*` indicate additional information about the connection and transfer
> 
> **Set HTTP Header with curl**
> ```bash
> curl -H "ngrok-skip-browser-warning: anyValue" <\ENDPOINT\>
> ```

## Content-Type
---
- Tells the [[Host#Client]] the type of the [[Network Object]], so they can be better rendered

>[!example]
> With `content-type: application/pdf`, browser is able to open an in-browser pdf reader


## Cache-Control
---
- Tells the [[Host#Client]] how long it can use the cached copy of the resources (can be css and js files etc) before it fetches a new copy from [[Host#Server]]

>[!example]
> With `cache-control: public, max-age=7200, must-revalidate`, the client must re-fetch a new copy from the server after 7200 seconds 

>[!info]- Adjust Cache-Control Value with Cloudflare
> Adjust the value for **all websites** managed by Cloudflare using [Cloudflare Caching Configuration](https://dash.cloudflare.com/?to=/:account/:zone/caching/configuration)
> ![[cloudflare_cache-control_all.png|700]]
> 
> Adjust the value for **a specific website** managed by Cloudflare using [Cloudflare Cache Rules](https://dash.cloudflare.com/?to=/:account/:zone/caching/cache-rules)
> ![[cloudflare_cache-control_refine.png|700]]




