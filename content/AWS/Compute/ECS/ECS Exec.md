---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-09-04T11:16:00
Last Date: 2023-12-21T11:32:38+08:00
References: 
---
## Abstract
---
**SSH** into [[ECS#Container]] from your own laptops. Great for debugging containers under ECS.

**Setup Checklist:**
- [ ] [[#Enable ECS Exec]]
- [ ] [[#Install Session Manager Plugin for AWS Cli]]
- [ ] [[#Add SSM permission via IAM Policy to the ECS Role]]
- [ ] [[#Check if ECS Exec is configured properly]]
- [ ] [[#SSH into ECS Container]]

## Enable ECS Exec
---
### For Existing ECS Cluster
```bash "<CLUSTER_NAME>" "<SERVICE_NAME>"
aws ecs update-service \
    --cluster <CLUSTER_NAME> \
    --service <SERVICE_NAME> \
    --enable-execute-command
```

>[!caution] Only new [[ECS#Task]] under the [[ECS#Service]] will have the ECS Exec enabled

### New ECS Cluster
Based on what I know, there isn't a way to enable ECS EXEC from the GUI console

- **Option 1:** [Using Terraform](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service#enable_execute_command)

- **Option 2:** Using Cli
```bash /<CLUSTER_NAME>/ /<TASK-DEFINITION-NAME>/ /<SERVICE_NAME>/ /1/
aws ecs create-service \
--cluster <CLUSTER_NAME> \
--task-definition <TASK-DEFINITION-NAME> \
--enable-execute-command \
--service-name <SERVICE_NAME> \
--desired-count 1
``` 
## Get into ECS Container
---
### Install Session Manager Plugin for AWS Cli
```bash
brew install --cask session-manager-plugin
```

### Add SSM permission via IAM Policy to the ECS Role
**NOT the execution role!!!**

```json
{
   "Version": "2012-10-17",
   "Statement": [
       {
       "Effect": "Allow",
       "Action": [
            "ssmmessages:CreateControlChannel",
            "ssmmessages:CreateDataChannel",
            "ssmmessages:OpenControlChannel",
            "ssmmessages:OpenDataChannel"
       ],
      "Resource": "*"
      }
   ]
}
```

### Check if ECS Exec is configured properly
Script is [open-sourced](https://github.com/aws-containers/amazon-ecs-exec-checker)
```bash /<PROFILE_NAME>/ /<AWS_REGION>/ /<CLUSTER_NAME>/ /<TASK_ID>/
export AWS_PROFILE=<PROFILE_NAME>
export AWS_REGION=<AWS_REGION>

bash <( curl -Ls https://raw.githubusercontent.com/aws-containers/amazon-ecs-exec-checker/main/check-ecs-exec.sh ) <CLUSTER_NAME> <TASK_ID>
```

### SSH into ECS Container
If face error connecting, can try create a new [[ECS#Task]] deployment
```bash /<CLUSTER_NAME>/ /<TASK_ID>/ /<CONTAINER_NAME>/
aws ecs execute-command \
	--cluster <CLUSTER_NAME> \
	--task <TASK_ID> \
	--container <CONTAINER_NAME> \
	--interactive  \
	--command "/bin/sh" 
```
