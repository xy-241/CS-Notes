#terraform 
## Abstract
- The recommended way to pass variables into Terraform
- Terraform auto loads _tfvars_ files only when they are named ``terraform.tfvars`` or ``terraform.tfvars.json`` or any files with names ending in ``.auto.tfvars`` or ``.auto.tfvars.json``


## Use Cases
### Testing infra in different env
```bash
terraform plan -var-file=”prod.tfvars”

terraform plan -var-file=”stg.tfvars”
```