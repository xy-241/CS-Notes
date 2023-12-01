#vault 
>[!abstract] Current Setup Overview
>![[raid_vault_drawio_v1.jpg]]
>- We use DynamoDB as the backend storage for storing all the secrets and HashiCorp Vault configurations. DynamoDB is managed and serverless, making infrastructure management much easier compared to other backend storage options.
>- The compute component is stateless. Therefore, creating or destroying EC2 instances or Docker containers will not pose any data loss risks

## 2 methods
>[!note] Method 1: Running [[HashiCorp Vault]] on EC2
>1. Run the Terraform code to set up the infrastructure mentioned above
>2. The User Data Script attached to the EC2 instance will install HashiCorp Vault and configure it to use DynamoDB as a backend storage with the Vault Configuration File
>3. Initialize the HashiCorp Vault using either the Web UI or the CLI
>4. Use the CLI to configure [OIDC Auth with Azure AD](https://developer.hashicorp.com/vault/tutorials/auth-methods/oidc-auth-azure#oidc-auth-azure)

>[!note] Method 2: Running [[HashiCorp Vault]] in [[Docker Container]] on EC2
>1. Run the Terraform code to set up the infrastructure mentioned above
>2. The User Data attached to the EC2 instance will install Docker, pull down the [Official Vault Docker Image](https://hub.docker.com/r/hashicorp/vault), and configure it to use [[DynamoDB]] as a backend storage with the [[Configuration File, Vault|Configuration File, Vault]]
>3. Initialise the [[HashiCorp Vault]] using either the Web UI or the CLI
>4. Use the Cli to configure the [OIDC Auth with Azure AD](https://developer.hashicorp.com/vault/tutorials/auth-methods/oidc-auth-azure#oidc-auth-azure)


## Differences between Method 1 and Method 2
>[!note] Method 1: Running [[HashiCorp Vault]] on EC2
>- We need to download and install HashiCorp Vault from scratch whenever a new EC2 is created

>[!note] Method 2: Running [[HashiCorp Vault]] in [[Docker Container]] on EC2
>- HashiCorp Vault is pre-installed inside the Docker image
>- Docker Engine need to be installed inside the EC2 in order to run the Docker container


## Possible optimisation
>[!info] Method 1: Running [[HashiCorp Vault]] on EC2
>- Use [[Ansible]] to automate the process of running commands inside the [[EC2]]

>[!info] Method 2: Running [[HashiCorp Vault]] in [[Docker Container]] on EC2
>- Look into [[Elastic Container Service (ECS) on EC2]] option to make infrastructure management easier 