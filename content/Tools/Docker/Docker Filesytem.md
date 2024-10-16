---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - docker
Creation Date: 2024-10-15, 23:15
Last Date: 2024-10-16T12:08:52+08:00
References: 
draft: 
description: 
---
## Abstract
---
- [[Docker]] uses a **layered filesystem** to manage [[Docker Image]]. Each layer represents an **incremental change**, allowing us to cache modifications at each layer

>[!important]
> The layers can be reused among different docker images.