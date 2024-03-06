---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-08-28T22:16:10+08:00
Last Date: 2024-03-06T15:01:07+08:00
References: 
---
## Abstract
- Allows us to setup multiple [[Docker Container]] with proper configuration with **one command** `docker-compose up`


>[!abstract] Default Behaviors
> Each docker compose creates a [[Docker Network#Docker Bridge Network]] and the naming of [[Docker Image]] is `<current_directory_name>-<service_name>`

>[!tip] Remove Docker Images created by Docker Compose
> `docker-compose down` doesn't remove Docker Images, use `docker-compose down --rmi all` to remove everything in all the services