---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - browser
Creation Date: 2023-09-18T09:52:38+08:00
Last Date: 2023-09-18T09:52:38+08:00
References:
---

## 2 Types of architectures
---
1. One [[Process]] with many different [[Thread]]
2. Many different [[Process]] with few [[Thread]] communicating over [[Inter-Process Communication (IPC)]] - [[Multi-Process Architecture Browser]]
>![[browser architecture.png]]

## Chrome
---
>[!note] [[Multi-Process Architecture Browser]], general 5 [[Process]]
>![[chrome architecture.png]]
>![[chrome process responsbility.png]]
>1. [[Browser Process]]
>2. [[Renderer Process]]
>3. [[GPU Process]]
>4. [[Plugin Process]]
>5. [[Utility Process]]

>[!note] [[Browser Process]] coordinates with other 4 [[Process]]