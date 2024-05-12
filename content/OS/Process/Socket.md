---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - js
Creation Date: 2024-03-29, 17:48
Last Date: 2024-05-12T17:22:53+08:00
References: 
draft: 
description: 
---
## Abstract
---
- **Bidirectional communication channels** that can be used by **a lot of [[Process (进程)]]** simultaneously - A process can accept **many connections** on the **same socket** and attend several [[Host#Client]] simultaneously
- There are 2 main types of socket - [[#Unix Domain Socket]] & [[#Network Domain Socket]]


|             | Network Domain Socket                                                  | Unix Domain Socket                                                   |
| ----------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Scope       | Network-wide communication                                             | Communication within the same machine                                |
| Addressing  | IP Address + [[Network Port]]                                          | Filesystem path to **socket file**                                   |
| Protocols   | TCP/IP (TCP, UDP, etc)                                                 | Unix-specific IPC protocols                                          |
| Overhead    | Higher due to network layers                                           | Lower, everything happens on the same machine, no network overhead   |
| Security    | More exposed, may accidentally expose the connection to public network | More restricted with file permissions & contained within the machine |
| Performance | Slow                                                                   | Fast                                                                 |


## Unix Domain Socket
---
- [[Socket]] in [[Unix#Unix-like]] system that provides [[Inter-Process Communication (IPC)]] using [[File#File Descriptor]], where the [[Kernel]] handles the [[System Call (系统调用)]] and put the mechanism behind a [[Abstraction (抽象)#Abstraction Barrier]]

>[!important]
> ![[unix_domain_socket_performance.png|400]]
> 
> Runs entirely in [[Main Memory]], so it is **extremely fast** to perform **read** and **write** to the **unix domain socket file**.

>[!info]
> ![[docker_http_over_uds.png|400]]
> 
> [[Docker]] uses [[HTTP]] over unix domain socket instead of [[TCP]] for better performance. Refer to this [article](https://dev.to/rajasegar/http-over-unix-sockets-in-common-lisp-4l72) for more information.


### Unix Domain Socket Lifecycle
![[unix_domain_socket_lifecycle.png|300]]

- The above diagram show the [[System Call (系统调用)]] used to implement [[Socket]]

**Server Process** 
- `socket()` - creates a new [[Socket]] & returns a [[File#File Descriptor]] that can be used to refer to the socket in future system calls
- `bind()` - bind the socket to a [[File System Hierarchy#Pathname]], so that the client can connect to it
- `listen()` -  mark the socket as **passive**, so the socket that will accept incoming connection requests
- `accept()` - accept an incoming connection. This call blocks until a connection request arrives. Note that this function will error out if `listen()` is not called beforehand. Importantly, this call **creates a new socket** that is connected to the **peer socket**(peer socket = the socket at the other end of the connection, in this case, socket created by client process) and **returns a file descriptor associated with it**. So, if you want to communicate with the peer socket, you should use the file descriptor returned from `accept()`, not the file descriptor returned from the call to `socket()`. The latter socket remains open and is used to accept further connection requests


**Client Process**
- `socket()` -  creates a new [[Socket]] & returns a [[File#File Descriptor]] that can be used to refer to the socket in future system calls. Note that by default, a socket created using `socket()` is marked as **active**, and can be used in a `connect()` call to connect to a **passive** socket
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

### Unix Domain Socket with Nodejs

>[!abstract]
> We have 2 Nodejs files. One file is the client process and another one is server process. Client process passes dummy text to the server process by writing to `./server.sock`, and the server process simply prints out what it reads from `./server.sock` to the screen.

- [[Socket]] **server process**

```js
const net = require('net')

const server = net.createServer((socket) => { // where socket() takes place
  socket.on('data', data => { // where read() takes place
    console.log(data.toString())
  })
})

server.listen('./server.sock') // where bind(), listen() & accept() take place
```

- Unix domain socket **client process**

```js
const net = require('net');

function delay(ms) {
  // We need to wrap setTimeout inside a Promise to apply async-await
  return new Promise(resolve => setTimeout(resolve, ms)) ;
}

const client = net.createConnection( // where socket() takes place
  './server.sock', // where connect() takes place
  async () => {
    while (true) {
      await delay(1000);
      client.write(process.argv[2]); // where write() takes place
    }
  }
)
```


## Network Domain Socket
---
- The [[Socket]] [[Host#Client]] & [[Host#Server]] use to communicate over the [[Computer Network]]

## References 
---
- [Getting Started With Unix Domain Sockets | by Matt Lim | The Startup | Medium](https://medium.com/swlh/getting-started-with-unix-domain-sockets-4472c0db4eb1)
- [Are FIFO, pipe & Unix domain socket the same thing in Linux kernel? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/75904/are-fifo-pipe-unix-domain-socket-the-same-thing-in-linux-kernel)
- [Unix Domain Socket in 100 seconds - YouTube](https://youtu.be/1UHaR54i3ak?si=M3ALYsHKrBrs4jsd)
- [HTTP over unix sockets in Common Lisp - DEV Community](https://dev.to/rajasegar/http-over-unix-sockets-in-common-lisp-4l72)