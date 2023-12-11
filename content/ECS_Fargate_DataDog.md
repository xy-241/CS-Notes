# Project Title

**Pushing ECS Fargate Logs directly into DataDog using Terraform**

## Description
This will allow the intergration of ECS Logs to be pushed into DataDog directly.

You will need to create addidtional IAM Role Policy for the ECS [IAM Role](#iam-role).\
You will also need to create additional tasks in your ECS Services [ECS Task Definitions](#ecs-task-definitions).
<br><br>
Follow the steps below to integrate your Logs.

## Getting Started

### <u>IAM Role:</u>
This create an IAM Role Policy for DataDog to access the Logs.\
It will also place the IAM Role Policy into the IAM Role that the ECS uses.
<br>

* Edit the following variables:
  1. **name** = **`POLICY_NAME_HERE`**
      * Create a new name for the IAM Role Policy that you are creating.
    1. **role** = **`ECS_ROLE_NAME`**
        * The name of the IAM Role Name that your ECS is currently running on to attach the policy to the role.
* Copy the codes below to create the IAM Role policy and attach to your IAM Role after editing the variables:
```
resource "aws_iam_role_policy" "main" {
  name = "<POLICY_NAME_HERE>"
  role =  "<ECS_ROLE_NAME>"
  policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": [
          "firehose:PutRecordBatch",
          "ecs:ListContainerInstances",
          "ecs:DescribeContainerInstances",
          "ecs:ListClusters"
        ],
        "Effect": "Allow",
        "Resource": ["*"]
      }
    ]
  })
}
```
<br>

### <u>ECS Task Definitions:</u>
This integration will enable collection of Logs from the ECS Task to be pumped into DataDog.\
Follow the steps below to enable the logs collection:
1. Add the [Log Configuration](#1-log-collection-configuration) into your ECS Task Definition . 
1. Add the [Log Router(Fluent Bit)](#2-log-routerfluent-bit) Container into your ECS Task Definition to allow Log Configuration.
1. Add the [DataDog Agent](#3-datadog-agent) Container into your ECS Task Definition to install the DataDog Agent.
1. [Example](#4-example-of-an-ecs-task-definition) of how an ECS Task Definition would look like.

    #### 1. Log Collection Configuration:
    This Log Configuration allows AWS FireLens to be the log driver.\
    This enables your ECS to configure logs to be transferred through AWS Fluent Bit.

    * Edit the following variables:
      1. **apikey**: **`DataDog_API_Key`**
          * Get the API Key from DataDog to be able to link the DataDog account with your AWS account.
      1. **dd_service**: **`DataDog_Service`**
          * This is to categorize the logs optained and will be tagged under Service in DataDog.
          * You should name it to the name of your ECS that is easily identifiable and unique.
      1. **dd_source**: **`DataDog_Source`**
          * This is to categorize the logs optained and will be tagged under Source in DataDog.
          * You should name it to the name of your ECS that is easily identifiable and unique.
      1. **dd_tags**: **`DataDog_Tags`**
          * This is to categorize the logs optained and will be tagged under Tags in DataDog.
          * You should name it to the name of your ECS that is easily identifiable and unique.
    <br><br>
    * Copy the codes below into your aws_ecs_task_definition resource after editing the respective variables:
      ```
      "logConfiguration": {
        "logDriver": "awsfirelens",
        "options": {
          "Host": "http-intake.logs.datadoghq.eu",
          "Name": "datadog",
          "TLS": "on",
          "provider": "ecs"
          "apikey": "<DataDog_API_Key>",
          "dd_service": "<DataDog_Service>",
          "dd_source": "DataDog_Source",
          "dd_tags": "DataDog_Tags",
        },
        "secretOptions": []
      }
      ```

    #### 2. Log Router(Fluent Bit):
    This creates a Fluent Bit container in your existing Fargate task.\
    This container will allows FireLens to grab the logs and pump into DataDog.

    * Add the codes below into your current aws_ecs_task_definition resource to create a new container definition for the Fluent Bit Container:
      ```
      {
        "name": "log_router",
        "image": "amazon/aws-for-fluent-bit:stable",
        "cpu": 0,
        "portMappings": [],
        "essential": true,
        "environment": [],
        "mountPoints": [],
        "volumesFrom": [],
        "user": "0",
        "firelensConfiguration": {
          "type": "fluentbit",
          "options": {
            "enable-ecs-log-metadata": "true"
          }
        }
      },
      ```

    #### 3. DataDog Agent:
    This enables the DataDog Agent to be run as a container into your ECS.\
    Enabling metrics to be retrieved from the ECS.


      * Edit the following variables: 
        1. **apikey**: **`DataDog_API_Key`**
            * Get the API Key from DataDog to be able to link the DataDog account with your AWS account
    * Add the codes below into your current aws_ecs_task_definition resource to create a new container definition for the DataDog Agent after editing the respective variables:
      ```
      {
        "name": "datadog-agent",
        "image": "public.ecr.aws/datadog/agent:latest",
        "cpu": 0,
        "portMappings": [],
        "essential": true,
        "environment": [
          {
            "name": "DD_SITE",
            "value": "datadoghq.eu"
          },
          {
            "name": "ECS_FARGATE",
            "value": "true"
          },
          {
            "name": "DD_API_KEY",
            "value": "<DataDog_API_Key>"
          }
        ],
        "mountPoints": [],
        "volumesFrom": [],
        "user": "0"
      }
      ```

    #### 4. Example of an ECS Task Definition:
    ```
    resource "aws_ecs_task_definition" "main" {
      family = "ecs_datadog_logs"
      requires_compatibilities = ["EC2","FARGATE"]
      task_role_arn = "iam_role_arn"
      network_mode = "awsvpc"
      cpu = 256
      memory = 512
      container_definitions = jsonencode (
        [
          {
            "name": "ecs_task",
            "image": "image_container",
            "cpu": "0",
            "portMappings": [
              {
                "name": "ecs_main_task-80-tcp",
                "containerPort": 80,
                "hostPort": 80,
                "protocol": "tcp",
                "appProtocol": "http"
              }
            ],
            "essential": true,
            "environment": [],
            "mountPoints": [],
            "volumesFrom": [],
            "logConfiguration": {
              "logDriver": "awsfirelens",
              "options": {
                "Host": "http-intake.logs.datadoghq.eu",
                "Name": "datadog",
                "TLS": "on",
                "provider": "ecs"
                "apikey": "<DataDog_API_Key>",
                "dd_service": "<DataDog_Service_Label>",
                "dd_source": "DataDog_Source_Label",
                "dd_tags": "DataDog_Tags_Label",
              },
              "secretOptions": []
            }
          },
          {
            "name": "log_router",
            "image": "amazon/aws-for-fluent-bit:stable",
            "cpu": 0,
            "portMappings": [],
            "essential": true,
            "environment": [],
            "mountPoints": [],
            "volumesFrom": [],
            "user": "0",
            "firelensConfiguration": {
              "type": "fluentbit",
              "options": {
                "enable-ecs-log-metadata": "true"
              }
            }
          },
          {
            "name": "datadog-agent",
            "image": "public.ecr.aws/datadog/agent:latest",
            "cpu": 0,
            "portMappings": [],
            "essential": true,
            "environment": [
              {
                "name": "DD_SITE",
                "value": "datadoghq.eu"
              },
              {
                "name": "ECS_FARGATE",
                "value": "true"
              },
              {
                "name": "DD_API_KEY",
                "value": "<DataDog_API_Key>"
              }
            ],
            "mountPoints": [],
            "volumesFrom": [],
            "user": "0"
          }
        ],
      )
      runtime_platform {
          cpu_architecture = "ARM64"
          operating_system_family= "LINUX"
      }
    }
    ```