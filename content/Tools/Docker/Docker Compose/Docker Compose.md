---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-08-28T22:16:10+08:00
Last Date: 2024-02-26T23:44:34+08:00
References: 
---
>[!abstract] Allows us to run the [[Docker]] commands automatically
>- Describes how multiple containers work together, along with their configuration and relationships

>[!caution] ``docker-compose down`` doesn't remove [[Docker Image]]
>- Use ``docker-compose down --rmi all`` to remove everything in all the services

## Benefits
---
>[!success] 


## Default behaviors
---
- A [[Docker Network#Docker Bridge Network]] created

>[!note] [[Docker Image]] naming is ``<current_directory_name>-<service_name>``