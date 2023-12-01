>[!note] 5 components
>1. Compute
>2. Logging
>3. Security
>4. Networking
>5. Storage

## Compute
### Servers
1. vaultserver launch config
2. vault server auto scaling group


### Load balancing
1. vault server alb
2. Vault server target group
3. VaultServerListenerRedirectToHTTPS
4. vauler server listener rule

### Lambda functions
1. 2 copy zip functions
2. leader election lambda
3. cluster boostrap lambda
4. acm creation lambda


## Logging
1. Vault Log Group

## Security 
### Security Group
1. Vault client 
2. Vault Server
3. ALB

### IAM
1. cluster boostrap lambda execution role
2. vault client role
3. leader election lambda execution role
4. vault instance role
5. copy role
6. vault instance profile
7. vault client instance profile

### Keys
1. vault kms key used to [auto unseal HashiCorp Vault](https://learn.hashicorp.com/vault/operations/ops-autounseal-aws-kms) as well as encrypt the AWS Secrets Manager secret.
2. vault secret (root token and unseal keys)
3. ACM Cert 

## networking
1. vault dns record
2. Existing Terraform codes (VPC with public & private subsets, bastion host)

## Storage
1. lambda zip bucket
2. Vaulter cluster member ssm (ec2 instance IDs)
4. Vault leader elected SSM (booelean value)
5. Vault leader ssm (EC2 instance ID)