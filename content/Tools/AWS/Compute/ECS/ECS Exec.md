---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-09-04T11:16:00
Last Date: 2023-12-07T15:00:01+08:00
References: 
---
## Abstract
- Obtain a **shell** into [[ECS]] from a local machine

## Enable ECS Exec for [[ECS]]
### Existing [[ECS]]
>[!caution] Only new [[ECS#Task]] under the [[ECS#Service]] will have the ECS Exec enabled
```bash
aws ecs update-service \
    --cluster <CLUSTER_NAME> \
    --service <SERVICE_NAME> \
    --enable-execute-command
```


### New [[ECS]]
>[!info] Based on what I know, there isn't a way to enable ECS EXEC from the GUI console

Option 1. [Using Terraform](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service#enable_execute_command)

Option 2. Using Cli
```bash
aws ecs create-service \
--cluster cluster-name \
--task-definition task-definition-name \
--enable-execute-command \
--service-name service-name \
--desired-count 1
``` 

## Obtain a Shell
### Install [[Session Manager]] plugin for AWS Cli
```bash
brew install --cask session-manager-plugin
```

### Add SSM permission ([[IAM Policy]]) to the ECS Role
>[!caution] NOT the execution role

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

### Check if ECS Exec is enabled on the [[ECS#Task]]
- [Script is open-sourced](https://github.com/aws-containers/amazon-ecs-exec-checker)
```bash
export AWS_PROFILE=<PROFILE_NAME>
export AWS_REGION=<AWS_REGION>

bash <( curl -Ls https://raw.githubusercontent.com/aws-containers/amazon-ecs-exec-checker/main/check-ecs-exec.sh ) <CLUSTER_NAME> <TASK_ID>
```

### SSH into [[ECS#Container]]
```bash
aws ecs execute-command \
	--cluster <CLUSTER_NAME> \
	--task <TASK_ID> \
	--container <CONTAINER_NAME> \
	--interactive  \
	--command "/bin/sh" 
```
>[!tip] If face error connecting, can try create a new [[ECS#Task]] deployment


