#terraform 
## Abstract
- Auto-generate ``README.MD`` for each module
- [Github](https://github.com/terraform-docs/terraform-docs/)



## Example
- Bash script that generates the modules ``README.MD`` automatically
```bash
#! /bin/bash
terraform-docs markdown table --output-file README.md --output-mode inject .

terraform-docs markdown table --output-file README.md --output-mode inject ./modules/alb

terraform-docs markdown table --output-file README.md --output-mode inject ./modules/compute

terraform-docs markdown table --output-file README.md --output-mode inject ./modules/database

terraform-docs markdown table --output-file README.md --output-mode inject ./modules/networking
```