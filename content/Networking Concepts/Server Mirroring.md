---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-05-21, 16:49
Last Date: 2024-05-21T17:18:21+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A strategy in which data is copied from one [[Host#Server]] to another. This ensures that an **exact replica of the data** is maintained on **different servers**
- [rsync](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories) is a common tool used for server mirroring

>[!success] Redundancy
> If one server is down, the other server can still serve the data.

>[!success] Performance
> We can have servers in **different geographical locations**, users can **access data** from servers that are **closer to them**. Thus, better performance.

## Package Mirror
---
- [[Host#Server]] that hosts copies of software repositories by performing [[Server Mirroring]]

>[!tip]
> For [[Package Manager#Pacman]], the default package mirror can be **very slow**. You can run `sudo pacman-mirrors --fasttrack` which update the **mirror list** with the best **package mirrors** based on their **synchronization status** and **connection speed**. The mirror list can be accessed via `cat /etc/pacman.d/mirrorlist`.
> 
> It is recommended to run `sudo pacman -Syuu` to update and upgrade the system after updating the mirror list.



## References
---
- [Manjaro Mirrors - Manjaro](https://wiki.manjaro.org/index.php/Manjaro_Mirrors)