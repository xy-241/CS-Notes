---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-08-28T18:26:33+08:00
Last Date: 2024-03-06T15:12:00+08:00
References: 
---
## Abstract
---
- A running [[Process (进程)]]
- We obtain a Docker Container form [[Docker Image]] with `docker run`, [[Docker RUN Command Flags | Flag Cheatsheet]]

## Useful Container Commands
---
>[!code]- Obtain log output
> `docker logs <CONTAINER_ID>`

>[!code]- Obtain information of all running containers
> `docker ps`

>[!code]- Remove a container forcefully
> `docker rm -f <CONTAINER_ID>`

>[!code] Execute a command inside a running container
> `docker exec`, [[Docker EXEC Command Flags | Flag Cheatsheet]]