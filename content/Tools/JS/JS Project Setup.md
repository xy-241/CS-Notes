---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - js
Creation Date: 2023-12-15, 20:01
Last Date: 2023-12-15T20:05:21+08:00
References: 
---
## Abstract
---

## NPM
---
- Tool to install the *JS Modules*, refer to [[MacOs Setup]] for set up details
### Obtain the absolute path to global node modules 
```bash
npm root -g

# We can take advantage of this to copy certain runtime dep to the production build
cp -R $(npm root -g)/dd-trace ./traced-deps/node_modules
```


## NPX
---
- Stands for Node Package eXecute
- A *package runner tool* that comes bundled with [[#NPM]]
- Allows you to execute any package from the npm registry without having to install it globally or locally using NPM which may pollute your local or global *node_modules directory*