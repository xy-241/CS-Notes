---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-11-13T19:06:12+08:00
Last Date: 2023-11-13T19:06:12+08:00
References:
---
>[!note] ``-d``
>Run in detached mode aka run in background

>[!note] ``--rm``
>- Removes the container and associated resources like volumes when the container stops running
>- Useful for temporary containers

>[!note] ``-p``
>Maps the host port to the container port
>```bash 
>docker run -p host_port:container_port image_name
>```



>[!note] ``--name``
>- Provide a custom name for a container when you start it

### ``--network``
- Select which [[Docker Network]] to start the [[Docker Container]]
```bash
docker run -d --network host hashicorp/vault server
```

>[!note] `--cap-add`
>- Used to add specific [[Linux Kernel]] capabilities to a [[Docker Container]]
>  >[!example] `--cap-add=IPC_LOCK`
>  >- Granting that container the ability to lock [[Shared Memory]] segments in the host's [[IPC Namespace]]
>  >- Allows the container to lock shared memory in a way that prevents it from being paged out to [[Disk]], potentially improving performance for applications that rely heavily on shared memory operations.
>  


## [[Docker Volume]]
---
>[!note] ``-v``
>- Used to mount a [[Volume]] inside a Docker container
>- It allows you to create a link between a directory or file on your host system (the system running Docker) and a directory or file inside the container
>- This enables data to be shared and persisted between the host and the container, even after the container is stopped and removed
>```bash
># Mounting 2 volume, the config.yml file & .aws folder
>docker run \ 
>	-v /home/xy241/Dropbox/RAid/aws_nuke/config.yml:/home/aws-nuke/config.yml \ 
>	-v /home/xy241/.aws:/home/aws-nuke/.aws
>```

>[!tip] Append ``:ro`` at the end of ``-v`` to make the host machine read-only inside the [[Docker Container]]
>- [[Docker Container]] can't write to host machine, but can only read the changes 

>[!tip] Add extra ``-v`` to specify the files & folders that we don't want to sync from [[Docker Container]] to host machine 