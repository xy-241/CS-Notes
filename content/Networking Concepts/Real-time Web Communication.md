---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-08-20, 01:48
Last Date: 2025-08-20T02:04:09+08:00
References:
draft:
description:
---
## Abstract
---
- The server and client **exchange data instantly (or near-instantly)** as soon as something happens, instead of waiting for the client to refresh or poll on a schedule

## 𝗦𝗲𝗿𝘃𝗲𝗿-𝗦𝗲𝗻𝘁 𝗘𝘃𝗲𝗻𝘁𝘀
---
- Based [[HTTP]], server keeps a connection open and pushes text data to the client whenever it wants. It is like a one-way webSocket

>[!code] Workflow
> 1. Client opens connection: `new EventSource('/events')`
> 2. Server responds with `Content-Type: text/event-stream` and keeps connection alive
> 3. Server pushes data in simple format: `data: {"price": 142.50, "symbol": "AAPL"}`
> 4. Client receives events via `eventSource.onmessage = (event) => { ... }`

>[!attention] Doesn't guaranteed delivery
> This is very bad for chat apps or collaborative editing.
> 
> However, it still works well for stock tickers and progress update where missing one score update doesn’t matter as long as the latest value is displayed.

>[!question] What if client wants to change things mid-stream?
> It must use a separate HTTP request to adjust the behaviour. That’s why for **bidirectional control**, people often pick **WebSockets** (client ↔ server messages on the same channel).

## References
---
- [𝗦𝗲𝗿𝘃𝗲𝗿-𝗦𝗲𝗻𝘁 𝗘𝘃𝗲𝗻𝘁𝘀 (𝗦𝗦𝗘) — 𝗮 𝟯𝟬-𝘀𝗲𝗰𝗼𝗻𝗱 𝗽𝗿𝗶𝗺𝗲𝗿](https://www.linkedin.com/posts/hello-interview_%F0%9D%97%A6%F0%9D%97%B2%F0%9D%97%BF%F0%9D%98%83%F0%9D%97%B2%F0%9D%97%BF-%F0%9D%97%A6%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81-%F0%9D%97%98%F0%9D%98%83%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%98%80-%F0%9D%97%A6%F0%9D%97%A6%F0%9D%97%98-activity-7359237512793374720-byP8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACvWH58BGSEq7BcCNuUdKXuMVeGmsK_BxAE)