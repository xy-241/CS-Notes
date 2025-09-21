---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - terraform
  - devops
Creation Date: 2025-09-21, 16:10
Last Date: 2025-09-21T16:18:41+08:00
References:
draft:
description:
---
## Provider versioning
---
- When there’s a [[Semantic Versioning#MAJOR|MAJOR change]], you can pin like `>= 4.47.0, < 5.0.0` to safely use all the newest features in v4 while avoiding v5 breakages. If you want to move to v5, you’d explicitly set `>= 5.0.0, < 6.0.0` (or `~> 5.0`) and refactor for breaking changes.