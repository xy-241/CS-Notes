---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-12-07, 16:09
Last Date: 2023-12-10T19:58:00+08:00
References: 
---
## Abstract
---
- Convert [[Dockerfile]] to [[Docker Container]]


## Cautions
---
### --build-arg
- Used to pass dynamic values to [[Docker#Engine]] for the building process
>[!caution] Not [[Environment Variable]], that is set with  [[Dockerfile#`ENV`]]

### Frontend Build
- Needs the [[Environment Variable]] at the *container build stage* only, not when the container is running