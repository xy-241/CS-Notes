#aws 

## Check if ECS Exec is enabled on the [[ECS Task]]
```bash
export AWS_PROFILE=<PROFILE_NAME>
export AWS_REGION=<AWS_REGION>

bash <( curl -Ls https://raw.githubusercontent.com/aws-containers/amazon-ecs-exec-checker/main/check-ecs-exec.sh ) <CLUSTER_NAME> <TASK_ID>
```
- [Github Link](https://github.com/aws-containers/amazon-ecs-exec-checker)

## Install [[Session Manager]] plugin for AWS Cli
```bash
brew install --cask session-manager-plugin
```

## Add SSM permission ([[IAM Policy]]) to the [[ECS Task]] role, NOT the execution role
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

## Enable ECS Exec for [[ECS Task]]
### Existing [[ECS Service]]
```bash
aws ecs update-service \
    --cluster <CLUSTER_NAME> \
    --service <SERVICE_NAME> \
    --enable-execute-command
```
>[!caution] Only new [[ECS Task]] under the service will have the ECS Exec enabled

## When creating a [[ECS Service]]
1. [Terraform](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_service#enable_execute_command)
%% 2. Cli
	```bash
	aws ecs create-service \
	    --cluster cluster-name \
	    --task-definition task-definition-name \
	    --enable-execute-command \
	    --service-name service-name \
	    --desired-count 1
	``` %%

## SSH into [[ECS Task]] Containers
```bash
aws ecs execute-command \
	--cluster <CLUSTER_NAME> \
	--task <TASK_ID> \
	--container <CONTAINER_NAME> \
	--interactive  \
	--command "/bin/sh" 
```