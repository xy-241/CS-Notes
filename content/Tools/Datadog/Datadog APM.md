---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-12-05T10:27:00
Last Date: 2023-12-11T10:33:53+08:00
References: 
---
## Abstract
- [[Application Performance Monitoring (APM)]]

## Serverless Setup
- The example below is based on [[ECS#Fargate|ECS Fargate]]
- The entire setup is around [[ECS#Task Definition]]
### Pipe application log to AWS Firelens
- Add the following block to application container [[ECS#Task Definition]]
```json {4}
"logConfiguration": {
	"logDriver": "awsfirelens",
	"options": {
		"Host": "<THE_HOST_ENDPOINT_YOU_WANT>",
		"Name": "<THE_NAME_YOU_WANT>",
		"TLS": "on",
		"apikey": "<YOUR_API_KEY>",
		"dd_service": "<THE_SERVER_NAME_YOU_WANT>",
		"provider": "ecs"
	},
	"secretOptions": []
}
```
- Refer [Logging Endpoints](https://docs.datadoghq.com/logs/log_collection/?tab=host#logging-endpoints) for more information on the `Host`
### Datadog Agent Sidecar
- Add the following block to the same [[ECS#Task Definition]]
```json {10-11, 24-33}
{
	"name": "datadog-agent",
	"image": "public.ecr.aws/datadog/agent:latest",
	"cpu": 10,
	"memory": 512,
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
			"value": "<YOUR_API_KEY>"
		}
	],
	"mountPoints": [],
	"volumesFrom": [],
	"logConfiguration": {
		"logDriver": "awslogs",
		"options": {
			"awslogs-create-group": "true",
			"awslogs-group": "/ecs/myApp-datadog-agent",
			"awslogs-region": "ap-southeast-1",
			"awslogs-stream-prefix": "ecs"
		},
		"secretOptions": []
	}
},
```
- For `DD_SITE`, update it to the region you are using
- `logConfiguration` pipes the log of the datadog agent sidecar to **CloudWatch**, can be useful for debugging

## Terminologies 