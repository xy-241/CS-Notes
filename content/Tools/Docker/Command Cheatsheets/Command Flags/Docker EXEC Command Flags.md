#docker 
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
