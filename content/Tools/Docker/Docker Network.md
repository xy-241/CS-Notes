---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
  - networking
Creation Date: 2023-08-22T12:09:04+08:00
Last Date: 2024-10-16T19:56:09+08:00
References: 
aliases:
  - ../../Tools/Docker/Docker-Network/Docker-Network
---
## Abstract
---
- There are 3 types of network [[Docker]] offers
	1. [[#Docker Bridge Network]]
	2. [[#Docker Host Network]]
	3. [[#Docker Null Network]]
</br>

- By default, all containers created are placed inside this default **Docker Bridge Network**
- We can create **Docker Null Network** and **Docker Bridge Network** with the drivers shipped with docker
- Network Comparison
![[docker_network_comparison.png|500]]

>[!attention] 
> We cant remove all the default Docker Network.

### Docker Bridge Network
- When we create a [[Docker Container]] inside this network
- A [[Network Interface]] is created on the Host Machine which is 7, master is `docker0` which is 3, as shown below
![[docker_bridge_host_networkInterface.png|500]]
- A network interface which is 6, is also created inside the docker container, as shown below
![[docker_bridge_container_networkInterface.png|500]]
</br>

- There is a [[Virtual Ethernet]] that connects the 2 network interface mentioned above
![[docker_bridge_network.png|500]]

>[!question] Accessing application running on host machine port
> If we have an application running on host on port `80`, we can't access the application via `localhost:80`, because the network interface of the container is isolated from the network interface of the host. This only works on [[#Docker Host Network]] in which the network interface of host is shared with the container
> 
> If we want to access the application running on host machine port, we need to use `host.docker.internal:80`, `host.docker.internal` will be converted to the [[IP Address]] of the host machine by docker automatically.  However, this is **a feature of Docker Desktop** for Mac and Windows specifically!!!

</br>

- Network communication from containers to host machine and the internet
![[docker_network_bridge_network_communication.png|500]]

>[!important] Communication via hostname
> Default docker bridge network doesn't support [[DNS Resolution]]. So it is impossible to communicate from one container to another container via [[Hostname]], same for host machine to containers.
> 
> But we are able to create a new bridge network that supports DNS Resolution, refer to [[#Create/Delete Docker Network]].

### Docker Host Network
- When we create a [[Docker Container]] inside this network, the container is basically an application running inside the host machine, sharing the same [[Network Interface]] as the host machine. That means in the host machine, we can access the container on `localhost:8080` if the the container is running on port 8080 without the need to tell docker to bridge the port between the host and container
- The container is able to **access** other **applications running on the host** port via `localhost:<PORT_OF_OTHER_APP_RUNNING_ON_HOST>`

### Docker Null Network
- When we create a [[Docker Container]] inside this network, the container only has a [[Loopback Network]], so the container is isolated fully from the outside world





## Useful Docker Network Command
---
### Read Docker Network Info
- List all Docker Networks
```bash
sudo docker network ls
```

- Inspect a Docker Network
```bash
sudo docker network inspect <NETWORK_NAME>
```

### Use Docker Network
- Select which [[Docker Network]] to start the [[Docker Container]]
```bash
docker run -d --network host hashicorp/vault server
```


### Create/Delete Docker Network
- Create a custom [[#Docker Bridge Network]]], We can only create **custom** Docker Bridge Network
```bash
# -d here refers to the driver Docker uses to create the network
# This will create a network interface on host machine similar to the docker0 network interface
sudo docker network create -d <NETWORK_DRIVER> <NETWORK_NAME>
```

- Remove a Docker Network
```bash
sudo docker network rm <NETWORK_NAME>
```


## References
---
- [Docker网络模式Linux, 哔哩哔哩](https://b23.tv/7VuBHm0)