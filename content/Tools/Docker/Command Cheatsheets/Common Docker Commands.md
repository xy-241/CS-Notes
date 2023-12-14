---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-08-27T17:24:56+08:00
Last Date: 2023-08-27T17:24:56+08:00
References:
---
## Commands used in standard docker workflow
---
![[docker_workflow.png]]
>[!note] ``docker build``
>Build [[Docker Image]] from [[Dockerfile]]

>[!note] ``docker run``
>- Start a [[Docker Container]] from [[Docker Image]]
>- [[Docker RUN Command Flags | Flag Cheatsheet]]

>[!note] ``docker push``
>- Push a [[Docker Image]] to a central repo

>[!note] ``docker pull``
>- Download a [[Docker Image]] from a central repo to local machine






## Debugging  Commands
---
>[!note] ``docker logs <CONTAINER_ID>``
>Get the log output of the [[Docker Container]]

>[!note] ``docker ps``
>Obtain the information of running [[Docker Container]]

## Other useful commands
---
>[!note] ``docker exec``
>- Execute a command in a running container
>- [[Docker EXEC Command Flags | Flag Cheatsheet]]

>[!note] ``docker rm -f <CONTAINER_ID>``
>- Remove a [[Docker Container]] forcefully 