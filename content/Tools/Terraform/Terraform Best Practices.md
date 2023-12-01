#terraform 
>[Referece](https://cloud.google.com/docs/terraform/best-practices-for-terraform#static-files)
## General style and structure guidelines
### 1. [Follow a standard module structure](https://cloud.google.com/docs/terraform/best-practices-for-terraform#module-structure)
- Use [[terraform-docs]] to *automate* the process of generating `README.md` file in Markdown format for each module. In the `README.md` file, include basic documentation about the module
- Each module has a ``main.tf`` file for the core component
- Move documentation file to a ``docs/`` subdirectory
- In the module's root directory, include only Terraform (`*.tf`) and repository metadata files (such as `README.md` and `CHANGELOG.md`).

### 2. [Adopt a naming convention](https://cloud.google.com/docs/terraform/best-practices-for-terraform#naming-convention)
- Name all configuration objects using underscores to delimit multiple words
- Name the resource that is the only one of its type `main` (for example, a single load balancer for an entire module)
- Make resource names singular

### 3. [Use variables carefully](https://cloud.google.com/docs/terraform/best-practices-for-terraform#variables)
- Give variables [defined types](https://developer.hashicorp.com/terraform/language/expressions/types)

### 4. [Expose Outputs](https://cloud.google.com/docs/terraform/best-practices-for-terraform#outputs)

### 5. [Use data sources](https://cloud.google.com/docs/terraform/best-practices-for-terraform#data-sources)

### 6. [Limit the use of custom scripts](https://cloud.google.com/docs/terraform/best-practices-for-terraform#custom-scripts)
- Put custom scripts called by Terraform in a `scripts/` directory

### 7. [Include helper scripts in a separate directory](https://cloud.google.com/docs/terraform/best-practices-for-terraform#helper-scripts)

### 8. [Put static files in a separate directory](https://cloud.google.com/docs/terraform/best-practices-for-terraform#static-files)
- Static files that Terraform references but doesn't execute (such as startup scripts loaded onto Compute Engine instances) must be organized into a `files/` directory.
- For files that are read in by using the Terraform [`templatefile` function](https://www.terraform.io/docs/configuration/functions/templatefile.html), use the file extension `.tftpl`. Templates must be placed in a `templates/` directory

### 9. [Protect stateful resources](https://cloud.google.com/docs/terraform/best-practices-for-terraform#stateful-resources)
- See docs

### 10. [Use built-in formatting]()

### 11. [Limit the complexity of expressions](https://cloud.google.com/docs/terraform/best-practices-for-terraform#expressions)

### 12. [Use `count` for conditional values](https://cloud.google.com/docs/terraform/best-practices-for-terraform#count)

### 13. [Use `for_each` for iterated resources](https://cloud.google.com/docs/terraform/best-practices-for-terraform#for_each)
- Refer to RAiD Terraform codes on the ``public_subnet`` and ``private_subnet`` setup 
- ``for_each`` is only for ``map`` or ``set``
- Use ``count`` to loop through a list of elements
```json
resource "aws_efs_mount_target" "main" {
	count = length(var.private_subnet_ids)
	
	file_system_id = aws_efs_file_system.main.id
	subnet_id = var.private_subnet_ids[count.index]
}
```



## Reusable modules


## Terraform root modules
### [1. Minimize the number of resources in each root module](https://cloud.google.com/docs/terraform/best-practices-for-terraform#minimize-resources)
- A general rule: Don't include more than 100 resources (and ideally only a few dozen) in a single [Terraform State]

### [7. Store variables in a `tfvars` file](https://cloud.google.com/docs/terraform/best-practices-for-terraform#tfvars)
- For root modules, provide variables by using a `terraform.tfvars` [[Terraform tfvars File (terraform.tfvars)]]