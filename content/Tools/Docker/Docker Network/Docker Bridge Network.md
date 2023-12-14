---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-08-13T17:17:41+08:00
Last Date: 2023-08-13T17:17:41+08:00
References:
---
## When we create a [[Docker Container]] inside this [[Network]]
---
>[!note] A [[Network Interface]] is created on the [[Host Machine]], master is docker0
>[[Network Interface]] 7
>![[docker_bridge_host_networkInterface.png]]

>[!note] A [[Network Interface]] is created on the [[Docker Container]]
>[[Network Interface]] 6
>![[docker_bridge_container_networkInterface.png]]

>[!note] There is a [[Virtual Ethernet]] that connects the 2 [[Network Interface]] above
>![[docker_bridge_network.png]]

## Network Communication
---
>[!note]
>![[docker_network_bridge_network_communication.png]]
>>[!caution] Default [[Docker Bridge Network]] doesn't support local [[DNS Resolution]] (Unable to communicate from one container to another container by hostname, same for host machine to containers)


## Commands
---