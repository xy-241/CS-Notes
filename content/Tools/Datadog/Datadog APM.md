---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-12-05T10:27:00
Last Date: 2024-03-13T15:25:13+08:00
References: 
title: Datadog APM in ECS Fargate
description: "Unlock the full potential of Datadog APM for Application Performance Monitoring (APM) with our comprehensive guide on setting up Datadog APM in ECS Fargate. Whitelist outbound traffic, integrate AWS Firelens, and deploy the Datadog Agent Sidecar effortlessly. Optimize your ECS Fargate setup with Terraform sample codes and fine-tune Datadog Agent settings. Dive into seamless monitoring with Datadog and elevate your AWS integration game. #APM #Datadog #ECSFargate #AWSIntegration"
---

## Abstract
---
- Datadog APM is used for [[Application Performance Monitoring (APM)]]



## ECS Fargate Setup
---
>[!tip]- Security: whitelist outbound traffic to Datadog Endpoints
>In some deployment environment, by default all outbound traffic is denied. [Here](https://docs.datadoghq.com/agent/configuration/network/?tab=agentv6v7) is a list of datadog endpoints you can use to whitelist the traffic. So the [[#Datadog Agent Sidecar]] is able to pipe the application [[Trace]] to Datadog.

>[!attention] Prerequisites
> - [ ] [[Datadog#AWS Integration]]
> - [ ] [[Datadog#Datadog ddtrace]] 

The setup is around [[ECS#Task Definition]], we need to have the following 3 components inside the task definition:
- [ ] Pipe container log to AWS Firelens
>[!code]- Configuration for ECS Container logging
> Add the following block inside the **container** that we want to pipe the log to Datadog. Update the highlighted parts with your own values
> 
> ```json {4-5, 7-9}
> "logConfiguration": {
>   "logDriver": "awsfirelens",
>   "options": {
>     "Host": "http-intake.logs.datadoghq.eu",
>     "Name": "datadog",
>     "TLS": "on",
>     "apikey": "<YOUR_API_KEY>",
>     "dd_service": "AEGIS-dev-backend",
>     "dd_source": "AEGIS-dev-backend-firelens",
>     "provider": "ecs"
>   }
> }
> ```


- [ ] AWS Firelens - Log Router Container 
>[!code]- Configuration for Log Router Container
> AWS Firelens container functions as a [[Monitoring#Log Router]]. Update the highlighted parts with your own values, you can refer to [[ECS#Hardware Details]] for the `cpu` and `memory` configuration
> 
> ```json {2, 4-5}
> {
>   "name": "log_router",
>   "image": "amazon/aws-for-fluent-bit:stable",
>   "cpu": 256,
>   "memory": 512,
>   "portMappings": [],
>   "essential": true,
>   "environment": [],
>   "mountPoints": [],
>   "volumesFrom": [],
>   "user": "0",
>   "firelensConfiguration": {
>     "type": "fluentbit",
>     "options": {
>       "enable-ecs-log-metadata": "true"
>     }
>   }
> }
> ```


- [ ] Datadog Agent Sidecar Container
>[!code]- Configuration for Datadog Agent Sidecar Container
> This Datadog agent sidecar container is needed to pipe the traces collected by [[Datadog#Datadog ddtrace]] to Datadog. Update the highlighted parts with your own values, here is [a list of environment variables](https://docs.datadoghq.com/serverless/guide/agent_configuration/) you can add to further fine tune the agent
> 
> ```json {2, 4-5, 11, 15, 19, 23, 27}
> {
>   "name": "datadog-agent",
>   "image": "public.ecr.aws/datadog/agent:latest",
>   "cpu": 256,
>   "memory": 512,
>   "portMappings": [],
>   "essential": true,
>   "environment": [
>     {
>       "name": "ECS_FARGATE",
>       "value": "true"
>     },
>     {
>       "name": "DD_API_KEY",
>       "value": "<YOUR_API_KEY>"
>     },
>     {
>       "name": "DD_SITE",
>       "value": "datadoghq.eu"
>     },
>     {
>       "name": "DD_APM_ENV",
>       "value": "aegis-stg"
>     },
>     {
>       "name": "DD_APM_IGNORE_RESOURCES",
>       "value": "GET /health"
>     }
>   ],
>   "mountPoints": [],
>   "volumesFrom": []
> }
> ```
> 
> - `DD_APM_ENV` overrides `DD_ENV`
> - We can use `DD_APM_IGNORE_RESOURCE` to ignore [[Trace]] from transmitted to Datadog

This Terraform code template below can help you create a task definition with Datadog APM integration
>[!code]- Terraform Code Template
> You can use the following Terraform code template to create the task definition with Datadog APM integrated.
>  ```hcl
> resource "aws_ecs_task_definition" "backend_app" {
>   family                   = ""
>   requires_compatibilities = ["FARGATE"]
>   network_mode             = "awsvpc"
>   cpu                      = 2048
>   memory                   = 4096
>   execution_role_arn       = ""
>   task_role_arn            = ""
> 
>   container_definitions = jsonencode([
>     {
>       name      = ""
>       image     = ""
>       cpu       = 1024
>       memory    = 2048
>       essential = true
> 
> 
> 
>       portMappings = []
>       secrets      = []
> 
>       environment = [
>         {
>           "name" : "DD_SERVICE",
>           "value" : ""
>         },
>         {
>           "name" : "DD_ENV",
>           "value" : ""
>         }
>       ]
> 
>       logConfiguration = {
>         logDriver : "awsfirelens",
>         options : {
>           "Host" : "",
>           "Name" : "",
>           "TLS" : "on",
>           "apikey" : "<YOUR_API_KEY>",
>           "dd_service" : "",
>           "dd_source" : "",
>           "provider" : "ecs"
>         }
>       }
>     },
>     {
>       name : "",
>       image : "amazon/aws-for-fluent-bit:stable",
>       cpu : 256,
>       memory : 512,
>       portMappings : [],
>       essential : true,
>       environment : [],
>       mountPoints : [],
>       volumesFrom : [],
>       user : "0",
>       firelensConfiguration : {
>         type : "fluentbit",
>         options : {
>           "enable-ecs-log-metadata" : "true"
>         }
>       }
>     },
>     {
>       "name" : "",
>       "image" : "public.ecr.aws/datadog/agent:latest",
>       "cpu" : 256,
>       "memory" : 512,
>       "portMappings" : [],
>       "essential" : true,
>       "environment" : [
>         {
>           "name" : "ECS_FARGATE",
>           "value" : "true"
>         },
>         {
>           "name" : "DD_API_KEY",
>           "value" : "<YOUR_API_KEY>"
>         },
>         {
>           "name" : "DD_SITE",
>           "value" : ""
>         },
>         {
>           "name" : "DD_APM_ENV",
>           "value" : ""
>         },
>         {
>           "name" : "DD_APM_IGNORE_RESOURCES",
>           "value" : ""
>         }
>       ],
>       "mountPoints" : [],
>       "volumesFrom" : [],
>     }
>   ])
>   runtime_platform {
>     operating_system_family = "LINUX"
>     cpu_architecture        = "X86_64"
>   }
> }
> ```
> 
> >[!bug] 
> >`DD_APM_IGNORE_RESOURCES` takes in a list of resources, but I wasn't able to pass a list object to the key-value pair environment variable. Please let me know if you find a way around it 😃







## References
---

- [Official ECS Fargate Integration](https://docs.datadoghq.com/integrations/ecs_fargate/?tab=webui)
- [Official Datadog Agent Configuration](https://docs.datadoghq.com/serverless/guide/agent_configuration)