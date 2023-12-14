---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-08-22T12:05:45+08:00
Last Date: 2023-08-22T12:05:45+08:00
References:
---
>[!note] ``-i``
>- Stands for "interactive" mode
>- It keeps STDIN (standard input) open even if you don't attach to the container's shell
>	- Allows us to interact with container by providing input to it

>[!note] ``-t``
>- Stands for "interactive" mode
>- Stands for "TTY" (Teletype) mode
>- Basically simulating a [[Terminal]]

>[!example] Open an Interactive Shell 
>```bash
>sudo docker exec -it <CONTAINER_ID>  /bin/sh
>```
>>[!caution] Some containers may use a different shell like ``/bin/bash``, instead of ``/bin/sh``