---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-03-29, 17:48
Last Date: 2024-03-30T18:10:30+08:00
References: 
draft: 
description: 
---
## Abstract
---
- An [[Unix#Unix-like]] [[Inter-Process Communication (IPC)#Socket]] that provides [[Inter-Process Communication (IPC)]] using [[File#File Descriptor]], where the [[Kernel]] handles the [[System Call (系统调用)]] and put the mechanism behind a [[Abstraction (抽象)#Abstraction Barrier]]


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

>[!code] Code Example
> You can refer to this [Medium Article](https://medium.com/swlh/getting-started-with-unix-domain-sockets-4472c0db4eb1) that implements UNIX Domain Socket on both the client and server using [[C]].

## References 
---
- [Getting Started With Unix Domain Sockets | by Matt Lim | The Startup | Medium](https://medium.com/swlh/getting-started-with-unix-domain-sockets-4472c0db4eb1)
- [Are FIFO, pipe & Unix domain socket the same thing in Linux kernel? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/75904/are-fifo-pipe-unix-domain-socket-the-same-thing-in-linux-kernel)