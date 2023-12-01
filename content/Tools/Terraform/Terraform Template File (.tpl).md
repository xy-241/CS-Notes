#terraform 

>[!example] Passing 4 variables to the .tpl file
>```bash
>user_data = base64encode(templatefile("./userdata.tpl", { kms_key = aws_kms_key.vault.id, vault_url = "https://releases.hashicorp.com/vault/1.14.1/vault_1.14.1_linux_amd64.zip", aws_region = "ap-southeast-1", table_name = aws_dynamodb_table.vault_storage.name }))
>```

>[!caution] 
>- Avoid the use of [Template Module, it is deprecated & doesn't support M1](https://registry.terraform.io/providers/hashicorp/template/latest/docs#deprecation)
>- Use [templatefile Function](https://developer.hashicorp.com/terraform/language/functions/templatefile)instead, as shown above

>[!example] References
>- [Terraform template | How to use terraform template - Part 20](https://www.youtube.com/watch?v=6SQwoLv3N98)