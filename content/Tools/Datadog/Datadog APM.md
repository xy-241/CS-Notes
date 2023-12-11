---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-12-05T10:27:00
Last Date: 2023-12-11T14:59:39+08:00
References: 
---

## Abstract

- [[Application Performance Monitoring (APM)]]

## Serverless Setup

- The example below is based on [[ECS#Fargate|ECS Fargate]]
- The entire setup is around [[ECS#Task Definition]]

### Pipe application log to AWS Firelens

- Add the following block to [[ECS#Task Definition]] inside the application container block
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

### AWS Firelens

- Update the highlighted parts with your own values

```json {4-5}
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

>[!info] `"cpu": 256` means 256/1024 vCPU
>- Click [here](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-cpu-memory-error.html) to find out more about the hardware configuration
### Datadog Agent Sidecar

- Add the following block to the same [[ECS#Task Definition]]
- Update the highlighted parts with your own values

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

## Terminologies
