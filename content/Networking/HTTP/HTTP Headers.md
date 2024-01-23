---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - bash
Creation Date: 2023-08-14T11:54:59+08:00
Last Date: 2024-01-23T15:09:01+08:00
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
## Content-Type
---
- Tells the [[Host#Client]] the type of the [[Network Object]], so they can be better rendered
- With the below info, the browser is able to open an in-browser pdf reader
```http
content-type: application/pdf
```
