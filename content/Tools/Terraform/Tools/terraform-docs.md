---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - terraform
Creation Date: 2023-09-10T19:01:10+08:00
Last Date: 2023-09-10T19:01:10+08:00
References:
---
## Abstract
---
- Auto-generate ``README.MD`` for each module
- [Github](https://github.com/terraform-docs/terraform-docs/)



## Example
---
- Bash script that generates the modules ``README.MD`` automatically
```bash
#! /bin/bash
terraform-docs markdown table --output-file README.md --output-mode inject .

terraform-docs markdown table --output-file README.md --output-mode inject ./modules/alb

terraform-docs markdown table --output-file README.md --output-mode inject ./modules/compute

terraform-docs markdown table --output-file README.md --output-mode inject ./modules/database

terraform-docs markdown table --output-file README.md --output-mode inject ./modules/networking
```