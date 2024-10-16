---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
  - networking
Creation Date: 2023-11-17T20:17:44
Last Date: 2024-10-15T23:29:50+08:00
References: 
aliases:
  - ../../Tools/Docker/Useful-Docker-Images
---
## Abstract
---
![[docker_workflow.png|500]]

- 3 components - [[Docker Container]], [[Docker Image]] & [[Dockerfile]]
- Built on top of [[Linux Namespace]], so on **Windows** & **Mac**, we have a hidden **Linux VM**
- Less secure compared to [[Podman]], because it has [[#Docker Daemon]] which needs root access to work

>[!help] Working with Apple Silicon
> `--platform linux/amd64` flag is needed. Refer to [ISA Unmatch error](https://stackoverflow.com/questions/66662820/m1-docker-preview-and-keycloak-images-platform-linux-amd64-does-not-match-th)

### Docker Engine
- The whole package, which includes [[#Docker Daemon]] as one of its components. Other 2 components are [[REST API]] interface and **Docker CLI**(Docker client) which provide access to Daemon

### Docker Daemon
- A background service runs on the host, managing the containers it created, and listening for [[REST API]] requests from the Docker client, which issues commands like `docker build`, `docker pull`, and `docker run`
- Single source of failure & requires **root access**
- Built on top of [[#Docker Runtime]]

### Docker Runtime 
- Used to interact with [[Kernel]]
- There are many options, the one docker uses is [containerd](https://containerd.io/)



## Docker Installation
---
### MacOS
- `brew install orbstack` -  `orbstack` is a much lightweight GUI to manage the containers, comes with [[Docker#Docker Engine]]


### Ubuntu
- Install [[Docker#Docker Engine]] with `curl -sSL https://get.docker.com | sh`
- Install [Docker Desktop](https://docs.docker.com/desktop/install/ubuntu/)(Optional)
- We can add user to the docker group with `sudo usermod -aG docker <USERNAME>`

>[!help] Fix missing dependencies
> `sudo apt --fix-broken install`

## Useful Docker Images
---
### Networking
- [wbitt/network-multitool](https://github.com/wbitt/Network-MultiTool) - `docker run -d --name eff1 --hostname eeg1 wbitt/network-multitool`

