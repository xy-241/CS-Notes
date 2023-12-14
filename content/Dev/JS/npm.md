---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-11-26T20:35:00
Last Date: 2023-11-26T20:48:50+08:00
References:
---
## Abstract
---


### Obtain the absolute path to global node modules 
```bash
npm root -g

# We can take advantage of this to copy certain runtime dep to the production build
cp -R $(npm root -g)/dd-trace ./traced-deps/node_modules
```