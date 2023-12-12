---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-18T13:05:00
Last Date:
---
## Abstract
- Implemented by the [[OS]] [[Kernel]]
- [[Stateful Protocol]]


## Lab
### Create a TCP Server
- Listen on port `8080` over TCP
- Create a new [[Process]] for each new [[TCP Connection]]
```bash
socat - TCP-LISTEN:8080,fork
```
### Create a TCP Client
- Connect to `localhost` over port `8080` over TCP
```bash
telnet 127.0.0.1 8080
```
### Create TCP Server in NodeJS
- [TCP Server written in NodeJS](https://github.com/hnasr/javascript_playground/blob/master/tcp/tcp.js)



## Benefits
### Acknowledgment
- Ensure the opposite party is actively involved 
-

### Guaranteed Delivery
- [[Host]] will keep sending to [[Host]] until an [[#Acknowledgment]] is received

### Connection Based
- 

### Congestion Control
- 


### Ordered Packets



## Cons
### Larger [[Packet]]
- Overheads to achieves the [[#Benefits]]

### More Bandwidth
- Consume more [[Bandwidth]] because [[#Larger Packet]]

### Slower than [[UDP]]
- The [[#Benefits]] incur waiting time

### [[Stateful Protocol]]
- Both [[Host]] & [[Host]] need to keep track the information of [[TCP Connection]]
- When one party is down, the another party will get notified and the [[TCP Connection]] will be shut down automatically 

### Server Memory (DOS)
- [[Main Memory]] is need for [[#Stateful Protocol]]
