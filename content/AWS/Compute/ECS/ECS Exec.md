---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-09-04T11:16:00
Last Date: 2024-03-26T14:51:19+08:00
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

>[!caution]
> Only new ECS Task under the ECS Service will have the ECS Exec enabled!


```bash "<CLUSTER_NAME>" "<SERVICE_NAME>"
aws ecs update-service \
    --cluster <CLUSTER_NAME> \
    --service <SERVICE_NAME> \
    --enable-execute-command
```


### New ECS Cluster
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
- Based on what I know, there isn't a way to enable ECS EXEC from the GUI console
## Get into ECS Container
---
### Install Session Manager Plugin for AWS Cli
```bash
brew install --cask session-manager-plugin
```

### Add SSM permission via IAM Policy to the ECS Role

>[!attention] NOT the execution role!!!

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

```bash /<PROFILE_NAME>/ /<AWS_REGION>/ /<CLUSTER_NAME>/ /<TASK_ID>/
export AWS_PROFILE=<PROFILE_NAME>
export AWS_REGION=<AWS_REGION>

bash <( curl -Ls https://raw.githubusercontent.com/aws-containers/amazon-ecs-exec-checker/main/check-ecs-exec.sh ) <CLUSTER_NAME> <TASK_ID>
```
- Script is [open-sourced](https://github.com/aws-containers/amazon-ecs-exec-checker)
### SSH into ECS Container

```bash /<CLUSTER_NAME>/ /<TASK_ID>/ /<CONTAINER_NAME>/
aws ecs execute-command \
	--cluster <CLUSTER_NAME> \
	--task <TASK_ID> \
	--container <CONTAINER_NAME> \
	--interactive  \
	--command "/bin/sh" 
```

>[!tip] Don't want to type the command all the time?
>You can make use of [[AWS Explorer]] which can be integrated into your code editor. Then you just need to click a few buttons to have a shell into the ECS Container. No more manual copy-paste and modifying the command!

>[!bug] Error Connecting?
>Try create a new [[ECS#Task]] deployment