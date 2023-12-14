---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - terraform
Creation Date: 2023-09-15T12:39:59+08:00
Last Date: 2023-09-15T12:39:59+08:00
References:
---
## Abstract
---
- The recommended way to pass variables into Terraform
- Terraform auto loads _tfvars_ files only when they are named ``terraform.tfvars`` or ``terraform.tfvars.json`` or any files with names ending in ``.auto.tfvars`` or ``.auto.tfvars.json``


## Use Cases
---
### Testing infra in different env
```bash
terraform plan -var-file=”prod.tfvars”

terraform plan -var-file=”stg.tfvars”
```