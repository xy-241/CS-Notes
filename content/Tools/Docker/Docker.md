---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-12-14T18:16:44+08:00
Last Date: 
References:
---
## Abstract
---
- Less secure compared to [[Podman]], because it has [[#Daemon]] which needs root access to work
- 3 components - [[Docker Container]], [[Docker Image]] & [[Dockerfile]]
- Built on top of [[Linux Namespace]], so on *Windows* & *Mac*, we have a hidden *Linux VM*


## Cheatsheets
---
1. [[Docker Installation]]
2. [[Common Docker Command Flags]]

## Troubleshooting
---
### Working with M1 
- Refer to [ISA Unmatch error](https://stackoverflow.com/questions/66662820/m1-docker-preview-and-keycloak-images-platform-linux-amd64-does-not-match-th)
- `--platform linux/amd64`

## Terminologies 
---
### Daemon
- Background service running on the host that manages the containers created by the [[#Engine]]
- Single source of failure & requires *root access*
- Built on top of [[#Runtime]]
### Engine
- The whole package, which includes [[#Daemon]] as one of its components. Other 2 components are [[REST API]] interface and *Docker CLI* which provide access to [[#Daemon]]
### Runtime 
- Used to interact with [[Kernel]]
- There are many options, the one *docker* uses is *containerd*
- 