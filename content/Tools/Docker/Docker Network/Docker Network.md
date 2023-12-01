#docker #networking 
## 3 Network Types
1. [[Docker Bridge Network]]
2. [[Docker Host Network]]
3. [[Docker Null Network]]

>[!note] By default, all containers created are placed inside this default [[Docker Bridge Network]]

>[!note] These [[Network]] are created by drivers shipped with [[Docker]]

>[!note] Comparison
>![[docker_network_comparison.png]]

>[!caution] We cant remove all the default Docker Network

## Commands
>[!note] List all Docker Networks
>```bash
>sudo docker network ls
>```

>[!note] Inspect a Docker Network
>```bash
>sudo docker network inspect <NETWORK_NAME>
>```

>[!note] Remove a Docker Network
>```bash
>sudo docker network rm <NETWORK_NAME>
>```

>[!note] Create a custom [[Docker Bridge Network]]
>```bash
># -d here refers to the driver Docker uses to create the network
># This will create a network interface on host machine similar to the docker0 network interface
>sudo docker network create -d <NETWORK_DRIVER> <NETWORK_NAME>
>```
>>[!caution] We can only create custom [[Docker Bridge Network]]

>[!quote] References
>- [Docker网络模式Linux, 哔哩哔哩](https://b23.tv/7VuBHm0)