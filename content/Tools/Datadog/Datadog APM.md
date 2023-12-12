---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-12-05T10:27:00
Last Date: 2023-12-12T13:44:26+08:00
References: 
---

## Abstract

- [[Application Performance Monitoring (APM)]]

## Serverless Setup

- The example below is based on [[ECS#Fargate|ECS Fargate]]
- The entire setup is around [[ECS#Task Definition]], we need to add in 3 parts into it - [[#Pipe application log to AWS Firelens]], [[#AWS Firelens]] and [[#Datadog Agent Sidecar]]

### Pipe application log to AWS Firelens

- Add the following block inside the **application container block**
- Update the highlighted parts with your own values

```json {4, 5, 7-9}
"logConfiguration": {
  "logDriver": "awsfirelens",
  "options": {
    "Host": "http-intake.logs.datadoghq.eu",
    "Name": "datadog",
    "TLS": "on",
    "apikey": "<YOUR_API_KEY>",
    "dd_service": "AEGIS-dev-backend",
    "dd_source": "AEGIS-dev-backend-firelens",
    "provider": "ecs"
  }
}
```
- You can configure the Datadog app agent by setting the [[Environment Variable]] in the same **application container block**
```json
"environment": [
	{
		"name": "DD_SERVICE",
		"value": "aegis-dev-backend"
	}
]
```
### AWS Firelens

- Update the highlighted parts with your own values
- You can refer to [[ECS#Hardware Details]] for the `cpu` and `memory` configuration

```json {2, 4-5}
{
	"name": "log_router",
	"image": "amazon/aws-for-fluent-bit:stable",
	"cpu": 256,
	"memory": 512,
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
}
```

### Datadog Agent Sidecar

- Update the highlighted parts with your own values
- There is [a list of environment variables](https://docs.datadoghq.com/serverless/guide/agent_configuration/) you can add to fine tune the agent

```json {2, 4-5, 15, 19, 23, 27}
{
	"name": "datadog-agent",
	"image": "public.ecr.aws/datadog/agent:latest",
	"cpu": 256,
	"memory": 512,
	"portMappings": [],
	"essential": true,
	"environment": [
		{
			"name": "ECS_FARGATE",
			"value": "true"
		},
		{
			"name": "DD_SERVICE",
			"value": "aegis-dev-backend"
		},
		{
			"name": "DD_ENV",
			"value": "aegis-dev"
		},
		{
			"name": "DD_API_KEY",
			"value": "<YOUR_API_KEY>"
		},
		{
			"name": "DD_SITE",
			"value": "datadoghq.eu"
		}
	],
	"mountPoints": [],
	"volumesFrom": []
}
```

### Terraform Sample Codes

- Refer to the above [[#Pipe application log to AWS Firelens]], [[#AWS Firelens]] and [[#Datadog Agent Sidecar]] for configuration details
- Update the highlighted parts with your own values

```hcl
resource "aws_ecs_task_definition" "backend_app" {
  family                   = ""
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = 2048
  memory                   = 4096
  execution_role_arn       = ""
  task_role_arn            = ""

  container_definitions = jsonencode([
    {
      name      = ""
      image     = ""
      cpu       = 1024
      memory    = 2048
      essential = true



      portMappings = []
      secrets = []

	  environment = [
		{
			"name": "DD_SERVICE",
			"value": ""
		}
	  ]
      logConfiguration = {
        logDriver : "awsfirelens",
        options : {
          "Host": "",
          "Name": "",
          "TLS": "on",
          "apikey": "<YOUR_API_KEY>",
          "dd_service": "",
          "dd_source": "",
          "provider": "ecs"
        }
      }
    },
    {
      name: "",
      image: "amazon/aws-for-fluent-bit:stable",
      cpu: 256,
      memory: 512,
      portMappings: [],
      essential: true,
      environment: [],
      mountPoints: [],
      volumesFrom: [],
      user: "0",
      firelensConfiguration: {
        type: "fluentbit",
        options: {
          "enable-ecs-log-metadata": "true"
        }
      }
    },
    {
      "name": "",
      "image": "public.ecr.aws/datadog/agent:latest",
      "cpu": 256,
      "memory": 512,
      "portMappings": [],
      "essential": true,
      "environment": [
        {
          "name": "ECS_FARGATE",
          "value": "true"
        },
        {
          "name": "DD_SERVICE",
          "value": ""
        },
        {
          "name": "DD_ENV",
          "value": ""
        },
        {
          "name": "DD_API_KEY",
          "value": "<YOUR_API_KEY>"
        },
        {
          "name": "DD_SITE",
          "value": ""
        }
      ],
      "mountPoints": [],
      "volumesFrom": [],
    }
  ])
  runtime_platform {
    operating_system_family = "LINUX"
    cpu_architecture        = "X86_64"
  }
}
```

## Terminologies
