---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-03-29, 17:48
Last Date: 2024-05-04T20:30:54+08:00
References: 
draft: 
description: 
---
## Abstract
---
- An [[Unix#Unix-like]] [[Inter-Process Communication (IPC)#Socket]] that provides [[Inter-Process Communication (IPC)]] using [[File#File Descriptor]], where the [[Kernel]] handles the [[System Call (系统调用)]] and put the mechanism behind a [[Abstraction (抽象)#Abstraction Barrier]]

>[!important]
> ![[unix_domain_socket_performance.png|400]]
> 
> Runs entirely in [[Main Memory]], so it is **extremely fast** to perform **read** and **write** to the **unix domain socket file**.

>[!info]
> ![[docker_http_over_uds.png|400]]
> 
> [[Docker]] uses [[HTTP]] over unix domain socket instead of [[TCP]] for better performance. Refer to this [article](https://dev.to/rajasegar/http-over-unix-sockets-in-common-lisp-4l72) for more information.


## Unix Domain Socket Lifecycle
---
![[unix_domain_socket_lifecycle.png|300]]

- The above diagram show the [[System Call (系统调用)]] used to implement [[Unix Domain Socket]]

**Server Process** 
- `socket()` - creates a new [[Unix Domain Socket]] & returns a [[File#File Descriptor]] that can be used to refer to the socket in future system calls
- `bind()` - bind the socket to a [[File System Hierarchy#Pathname]], so that the client can connect to it
- `listen()` -  mark the socket as **passive**, so the socket that will accept incoming connection requests
- `accept()` - accept an incoming connection. This call blocks until a connection request arrives. Note that this function will error out if `listen()` is not called beforehand. Importantly, this call **creates a new socket** that is connected to the **peer socket**(peer socket = the socket at the other end of the connection, in this case, socket created by client process) and returns a file descriptor associated with it. So, if you want to communicate with the peer socket, you should use the file descriptor returned from `accept()`, not the file descriptor returned from the call to `socket()`. The latter socket remains open and is used to accept further connection requests


**Client Process**
- `socket()` -  creates a new [[Unix Domain Socket]] & returns a [[File#File Descriptor]] that can be used to refer to the socket in future system calls. Note that by default, a socket created using `socket()` is marked as **active**, and can be used in a `connect()` call to connect to a **passive** socket
- `connect()` - connects to a **passive socket** on the pathname specified when the server performs the `bind()`. Note that `connect()` should be called after `listen()` is called on the server socket, otherwise it will error. However, it can be called before `accept()`

**Communication takes place**
- `read()`
- `write()`

**End**
- `close()`


>[!note]
> Server socket can accept **many client connections** at the same time.

>[!code] C Code Example
> You can refer to this [Medium Article](https://medium.com/swlh/getting-started-with-unix-domain-sockets-4472c0db4eb1) to implement UNIX Domain Socket on both the client and server using [[C]].

>[!code]
> You can use `find / -type s` to list down all the unix domain socket files on the system.
## References 
---
- [Getting Started With Unix Domain Sockets | by Matt Lim | The Startup | Medium](https://medium.com/swlh/getting-started-with-unix-domain-sockets-4472c0db4eb1)
- [Are FIFO, pipe & Unix domain socket the same thing in Linux kernel? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/75904/are-fifo-pipe-unix-domain-socket-the-same-thing-in-linux-kernel)
- [Unix Domain Socket in 100 seconds - YouTube](https://youtu.be/1UHaR54i3ak?si=M3ALYsHKrBrs4jsd)
- [HTTP over unix sockets in Common Lisp - DEV Community](https://dev.to/rajasegar/http-over-unix-sockets-in-common-lisp-4l72)