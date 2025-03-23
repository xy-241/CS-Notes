---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - devops
  - terraform
Creation Date: 2025-03-23, 13:29
Last Date: 2025-03-23T14:24:02+08:00
References: 
draft: 
description: A comprehensive guide to organizing Terraform infrastructure with a directory-based approach, featuring proven strategies for managing multiple environments, automating deployments, and ensuring consistency across dev, staging, and production.
---
## Directory-Based Approach
---
```shell
project-root/
├── README.md                     # Project documentation
├── .gitignore                    # Ignore .tfstate, .tfvars files, etc.
├── scripts/                      # Automation scripts
│   ├── init.sh                   # Initialize all Terraform directories
│   ├── apply-all.sh              # Apply all environments in correct order
│   ├── teardown.sh               # Destroy all resources in reverse order
│   ├── lint.sh                   # Run terraform fmt and validation
│   └── aws-nuke/                 # AWS-Nuke configuration for cleanup
│       └── aws-nuke-config.yaml  # AWS-Nuke configuration file
├── modules/                      # Reusable modules
│   ├── networking/               # Example: VPC, subnets, security groups
│   │   ├── main.tf               # Module resources
│   │   ├── variables.tf          # Input variables
│   │   ├── outputs.tf            # Output values
│   │   └── README.md             # Module documentation
│   ├── compute/                  # Example: EC2, auto-scaling groups
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── README.md
│   └── database/                 # Example: RDS, DynamoDB
│       ├── main.tf
│       ├── variables.tf
│       ├── outputs.tf
│       └── README.md
├── global/                       # Resources shared across environments
│   ├── iam/                      # Identity and Access Management
│   │   ├── main.tf               # IAM roles, policies, users
│   │   ├── variables.tf          # Input variables
│   │   ├── outputs.tf            # Outputs like role ARNs
│   │   ├── providers.tf          # Provider configuration
│   │   ├── backend.tf            # State configuration (e.g., S3)
│   │   └── versions.tf           # Terraform and provider versions
│   ├── dns/                      # DNS zones and global records
│   │   ├── main.tf               # Route53 zones, ACM certificates
│   │   ├── variables.tf 
│   │   ├── outputs.tf            # Outputs like zone IDs
│   │   ├── providers.tf
│   │   ├── backend.tf
│   │   └── versions.tf
│   └── monitoring/               # Global monitoring resources
│       ├── main.tf               # CloudWatch dashboards, alarms
│       ├── variables.tf
│       ├── outputs.tf
│       ├── providers.tf
│       ├── backend.tf
│       └── versions.tf
└── environments/                 # Environment-specific configurations
    ├── dev/                      # Development environment
    │   ├── main.tf               # Calls modules with dev params
    │   ├── variables.tf          # Environment variables
    │   ├── terraform.tfvars      # Dev-specific values
    │   ├── outputs.tf            # Environment outputs
    │   ├── providers.tf          # Provider configuration
    │   ├── backend.tf            # Dev state config
    │   └── versions.tf           # Version constraints
    ├── staging/                  # Staging/QA environment
    │   ├── main.tf               # Similar structure to dev
    │   ├── variables.tf
    │   ├── terraform.tfvars
    │   ├── outputs.tf
    │   ├── providers.tf
    │   ├── backend.tf
    │   └── versions.tf
    └── prod/                     # Production environment
        ├── main.tf               # Production configuration
        ├── variables.tf
        ├── terraform.tfvars
        ├── outputs.tf
        ├── providers.tf
        ├── backend.tf
        └── versions.tf
```

>[!success]-  Benefits of Directory-Based Separation
> - **Complete isolation between environments**: Each environment has its own state file, reducing the risk of accidental changes to other environments.
>   
> - **Granular control**: You can apply changes to one environment without affecting others.
>   
> - **Clear visibility**: It's easy to understand which environment you're working with.
>   
> - **State file management**: Smaller, focused state files are easier to manage and less prone to conflicts.
>   
> - **Parallelism**: Multiple team members can work on different environments simultaneously.
>   
> - **Environment-specific configurations**: Each environment can have its own variables, providers, and backend configurations.
>   
> - **Security segregation**: You can implement different access controls for different environments.

>[!missing]- Drawbacks of Directory-Based Separation
> - **Duplication**: Some configuration may be duplicated across environments.
> - **Multiple applies required**: You must run `terraform apply` separately for each global directory and environment.
> - **Coordination needed**: Changes that affect all environments require coordinated updates across multiple directories.
> - **Complex module references**: Relative paths to modules can become complex.
> - **State file dependencies**: Environments depend on global state being available, creating ordering requirements.


### Global Resource Configuration

- Global resources are configured and **applied independently**

```hcl title="global/iam/main.tf"
# global/iam/main.tf
resource "aws_iam_role" "lambda_execution" {
  name = "lambda-execution-role"
  
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

# Define outputs that environments will need
```

```hcl
# global/iam/outputs.tf
output "lambda_execution_role_arn" {
  value       = aws_iam_role.lambda_execution.arn
  description = "ARN of the Lambda execution role"
}
```

### Environment Access to Global Resources

- Environments access global resources **via remote state**

```hcl title="environments/dev/main.tf"
# environments/dev/main.tf
data "terraform_remote_state" "global_iam" {
  backend = "s3"
  config = {
    bucket = "my-terraform-states"
    key    = "global/iam/terraform.tfstate"
    region = "us-west-2"
  }
}

module "api_service" {
  source = "../../modules/compute"
  
  # Pass the global IAM role to the module
  lambda_role_arn = data.terraform_remote_state.global_iam.outputs.lambda_execution_role_arn
  
  # Environment-specific variables
  instance_count  = 2
  instance_type   = "t3.small"
  environment     = "dev"
}
```


### Automation Scripts to Create and Destroy

- Including automation scripts helps standardize operations and reduces human error

```bash title="init.sh"
#!/bin/bash
# Initialize all Terraform directories

echo "Initializing global resources..."
cd global/iam && terraform init
cd ../dns && terraform init
cd ../monitoring && terraform init

echo "Initializing environments..."
cd ../../environments/dev && terraform init
cd ../staging && terraform init
cd ../prod && terraform init

echo "Terraform initialization complete!"
```


```bash title="apply-all.sh"
#!/bin/bash
# Apply all resources in the correct order
set -e  # Exit on any error

echo "Applying global IAM resources..."
cd global/iam 
terraform apply -auto-approve

echo "Applying global DNS resources..."
cd ../dns
terraform apply -auto-approve

echo "Applying global monitoring resources..."
cd ../monitoring
terraform apply -auto-approve

echo "Applying dev environment..."
cd ../../environments/dev
terraform apply -auto-approve

echo "Applying staging environment..."
cd ../staging
terraform apply -auto-approve

echo "Applying production environment..."
cd ../prod
terraform apply -auto-approve

echo "All resources applied successfully!"
```


```bash title="teardown.sh"
#!/bin/bash
# Destroy all resources in reverse order with AWS-Nuke fallback
set -e  # Exit on any error

read -p "WARNING: This will destroy ALL infrastructure. Are you sure? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi

# Function to handle terraform destroy with error catching
terraform_destroy() {
    local dir=$1
    local env=$2
    echo "Destroying $env..."
    cd $dir
    terraform destroy -auto-approve
    if [ $? -ne 0 ]; then
        echo "WARNING: Terraform destroy failed for $env. Resources may remain."
        FAILED_ENVS="$FAILED_ENVS $env"
    fi
}

# Initialize empty array for environments where destroy failed
FAILED_ENVS=""

echo "Destroying environments (in reverse order)..."
terraform_destroy "environments/prod" "production"
terraform_destroy "environments/staging" "staging"
terraform_destroy "environments/dev" "development"

echo "Destroying global resources..."
terraform_destroy "../../global/monitoring" "global monitoring"
terraform_destroy "../dns" "global DNS"
terraform_destroy "../iam" "global IAM"

# Check if any destroys failed
if [ ! -z "$FAILED_ENVS" ]; then
    echo "Some environments failed to destroy completely:$FAILED_ENVS"
    read -p "Would you like to run AWS-Nuke to clean up remaining resources? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Running AWS-Nuke..."
        
        # Change to the directory containing AWS-Nuke config
        cd ../../scripts/aws-nuke
        
        # Run AWS-Nuke with appropriate config
        # Note: You should have AWS-Nuke installed and configured properly
        aws-nuke -c aws-nuke-config.yaml --profile default --no-dry-run
        
        if [ $? -eq 0 ]; then
            echo "AWS-Nuke completed successfully."
        else
            echo "WARNING: AWS-Nuke encountered issues. Some resources may still exist."
            echo "Please check the AWS Console for any remaining resources."
        fi
    else
        echo "Skipping AWS-Nuke. Some resources may still exist in your AWS account."
    fi
else
    echo "All resources destroyed successfully!"
fi
```

```bash title="aws-nuke-config.yaml"
# scripts/aws-nuke/aws-nuke-config.yaml
regions:
  - "global"
  - "us-east-1"
  - "us-west-2"  # Add all regions you use

account-blocklist:
  - "999999999999"  # Replace with production account IDs you want to protect

accounts:
  "123456789012": # Replace with your account ID
    presets:
      - "terraform-managed"

resource-types:
  # Exclude resources that should not be deleted
  excludes:
    - "IAMUser:root"
    - "IAMUserPolicyAttachment:root"
    - "IAMUserAccessKey:root"

presets:
  terraform-managed:
    filters:
      # Filter resources with specific tags managed by your Terraform project
      IAMRole:
        - property: "tag:Project"
          value: "MyTerraformProject"
      EC2Instance:
        - property: "tag:Environment"
          values:
            - "dev"
            - "staging"
            - "prod"
      # Add more resource types and filters as needed
```

- Refer to [[AWS Nuke]] for the setup and other details