---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - browser
Creation Date: 2023-10-07T16:38:29+08:00
Last Date: 2023-10-07T16:38:29+08:00
References:
---
>[!abstract] Running each part of browser program as a service allowing to easily split into different [[Process]] or aggregate into one
>![[Servicification.svg]]


>[!note] When [[Browser]] runs on powerful machine
>- Split each service in the browser process into different [[Process]] for more stability

>[!note] When [[Browser]] runs on resource-constraint machine
>- Consolidates services into one [[Process]] saving [[Main Memory]]