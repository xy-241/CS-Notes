---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-08-28T22:34:00
Last Date: 2024-03-06T15:28:11+08:00
References: 
---
## Abstract
---
- Set of steps for [[Docker]] to build [[Docker Container]]



## Keyword at Runtime
---
- Keywords that have an effect when [[Docker Container]] is running
### ENV
- Set the Environment Variable in the Docker Container

### CMD
- Can be used to run commands we want in the Docker Container
- Can be overwritten by the 

### ENTRYPOINT
- Usually used to specify the executable that will be executed. The executable is usually the application we want to run inside the container
- Can't be overwritten by the `docker run`

### CMD + ENTRYPOINT
- If executable specified by [[#ENTRYPOINT]] doesn't take in any arguments, the stuff specified inside the [[#CMD]] will be treated as arguments
- If executable specified by [[#ENTRYPOINT]] ends itself, the stuff specified inside the [[CMD]] will execute in its own [[Process (进程)]]
- Refer to [HashiCorp Vault Dockerfile](https://github.com/hashicorp/docker-vault/blob/main/ubi/Dockerfile) for an example