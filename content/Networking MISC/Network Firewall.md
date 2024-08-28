---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-04-13, 00:10
Last Date: 2024-04-13T00:14:54+08:00
References: 
draft: 
description: 
---
## Abstract
---


## OpenGFW
---
- `config.yaml`
```yaml 
io:
  queueSize: 1024
  rcvBuf: 4194304
  sndBuf: 4194304
  local: false 
  rst: false 

workers:
  count: 4 
  queueSize: 64
  tcpMaxBufferedPagesTotal: 65536
  tcpMaxBufferedPagesPerConn: 16
  tcpTimeout: 10m 
  udpMaxStreams: 4096

# The path to load specific local geoip/geosite db files.
# If not set, they will be automatically downloaded from https://github.com/Loyalsoldier/v2ray-rules-dat
# ruleset:
#   geoip: geoip.dat
#   geosite: geosite.dat
```
- `local: false`, because OpenGFW runs on FORWARD chain (one [[OpenWRT]])
</br>

- `rule.yaml`
```yaml
- name: log horny people log: true expr: let sni = string(tls?.req?.sni); sni contains "porn" || sni contains "hentai"
```