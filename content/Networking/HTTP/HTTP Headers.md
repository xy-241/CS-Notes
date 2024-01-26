---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - bash
  - cloudflare
Creation Date: 2023-08-14T11:54:59+08:00
Last Date: 2024-01-26T12:29:24+08:00
References: 
---
## Abstract
---
- Contains information used for [[Authentication]]
- And information like [[Cookie]]
</br>

- Inspect the HTTP Headers with [[curl]]
```bash
curl -I <ENDPOINT>
```
- Set HTTP Header with curl
```bash
curl -H "ngrok-skip-browser-warning: anyValue" <ENDPOINT>
```
### Content-Type
- Tells the [[Host#Client]] the type of the [[Network Object]], so they can be better rendered
- With the below info, the browser is able to open an in-browser pdf reader
```http
content-type: application/pdf
```

### Cache-Control
- Tells the [[Host#Client]] how long it can use the cached copy of the resources (can be css and js files etc) before it fetches a new copy from [[Host#Server]]
```http
cache-control: public, max-age=7200, must-revalidate
```
</br>

- You can set adjust the this value with [Cloudflare Cache Rules](https://dash.cloudflare.com/?to=/:account/:zone/caching/cache-rules) if you are hosting your website on Cloudflare
![[cloudflare_cache-control_refine.png|700]]
- If you want to apply `cache-control` to all website you have on Cloudflare. You can configure it on [Cloudflare Caching Configuration](https://dash.cloudflare.com/?to=/:account/:zone/caching/configuration)
![[cloudflare_cache-control_all.png|700]]