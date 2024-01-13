---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-18T13:05:00
Last Date: 2024-01-13T22:09:00+08:00
---
## Abstract
---
- Implemented inside the [[Kernel]]
- [[Network Protocol#Stateful Network Protocol]]


## TCP Slow Start
---
- Only small about of data is transferred to test the water. Gradually increase. This will help to avoid [[Network Congestion]]
</br>

- Will cause a slow startup of accessing new resources like a new web page





## Benefits
---
### Acknowledgment
- Ensure the opposite party is actively involved 


### Guaranteed Delivery
- [[Host#Server]] will keep sending to [[Host#Client]] until an [[#Acknowledgment]] is received

### Other Benefits
- Connection Based
- Congestion Control
- Ordered Packets



## Cons
---
### Larger Packet
- Gotta add in some overheads to achieves the [[#Benefits]]

### More Bandwidth
- Consume more [[Bandwidth]] because [[#Larger Packet]]

### Slower than UDP
- [[UDP]] doesn't have the [[#Benefits]] which incur waiting time

### Stateful Connection
- Both [[Host]] & [[Host]] need to keep track the information of [[TCP Connection]]
- When one party is down, the another party will get notified and the [[TCP Connection]] will be shut down automatically 

### Server Memory (DOS)
- [[Main Memory]] is consumed for [[#Stateful Protocol]], the more [[TCP Connection]] the more memory usage


## Lab
---
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

