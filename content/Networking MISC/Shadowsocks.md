---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-04-05, 01:30
Last Date: 2024-04-05T01:53:00+08:00
References: 
draft: "true"
description: 
---
## Abstract
---

## Shadowsocks Server
---
- There are a few implementations of [[Shadowsocks]], based on the [official feature comparison](https://shadowsocks.org/doc/getting-started.html#feature-comparison), [shadowsocks-rust](https://github.com/shadowsocks/shadowsocks-rust) is recommended. It can be installed with [[Package Manager#Cargo]]

>[!help] `linker 'cc' not found`
> The C linker is missing! The error should be solved with `sudo apt install build-essential`. Refer this [Stackoverflow post](https://stackoverflow.com/a/52445962) for more information.

## Shadowsocks Client
---
- The table below is based on the [Shadowsocks official recommended GUI clients](https://shadowsocks.org/doc/getting-started.html#gui-clients) 

| OS               | Shadowsocks Client                                                                                                               |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Macos            | [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG), in active development as of 2024 April.                       |
| [[Linux Kernel]] | Still searching :(                                                                                                               |
| Android          | [shadowsocks-android](https://github.com/shadowsocks/shadowsocks-android), no new updates for more than 7months as of 2024 April |
| iOS              | [shadowrocket](https://apps.apple.com/us/app/shadowrocket/id932747118)                                                           |



## References
---
- [Shadowsocks | A fast tunnel proxy that helps you bypass firewalls.](https://shadowsocks.org/)