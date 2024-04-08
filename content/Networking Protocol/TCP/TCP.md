---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - bash
Creation Date: 2023-08-18T13:05:00
Last Date: 2024-04-02T15:11:44+08:00
aliases:
  - ../../Networking/Transport-Layer/TCP/TCP
---
## Abstract
---
- The [[Network Protocol#Stateful Network Protocol]] used transfer data from one [[Computer Network]] to another
- Implemented inside the [[Kernel]]


>[!success]- Guaranteed Delivery
> [[Host#Server]] will keep sending to [[Host#Client]] until an **Acknowledgment** is received


>[!caution]- Require more bandwidth
> Compared to [[UDP]], TCP has more features which result in larger packet, thus consuming more bandwidth when transferring the same amount of data 

>[!caution]- Vulnerable to DDoS
> ![[tcp_connection_socat_demo.png|500]]
> TCP is a stateful network protocol, [[Main Memory]] is consumed to store the state of each [[TCP Connection]] and [[CPU]] is also involved 

>[!caution]- Slower than UDP
> The extra features TCP offers incur extra time to execute 

>[!caution]- Communication is easy to break
> Both [[Host]] need to keep track the information of [[TCP Connection]]. When one party is down, the another party will get notified and the TCP Connection will be shut down automatically. This means we need to reinitialised another TCP connection again  

>[!caution]- Hard to customise
> [[Kernel]] handles the implementation of TCP. If we want some custom features for TCP, we need to modify the kernel codes

>[!code] Get your hands dirty
> **Create a TCP Server on port 8080**
> - `socat - TCP-LISTEN:8080,fork` spins up a TCP server that creates a new [[Process (进程)]] for each new [[TCP Connection]]
>   
> ![[tcp_connection_socat_demo.png|500]]
>   
> **Create a TCP Client**
> - `telnet 127.0.0.1 8080` (intall on mac `brew install telnet`) connects to `localhost:8080` over TCP. A new `socat` process should be created
> 
> **Create TCP Server in NodeJS**
> - Refer to [TCP Server written in NodeJS](https://github.com/hnasr/javascript_playground/blob/master/tcp/tcp.js)


## TCP Slow Start
---
- Only a small amount of data is transferred to test the water at the start of the communication. If data is delivered smoothly, TCP will gradually increase the amount of data

>[!success] Avoid network congestion
> If a particular network path is congested and we dump a lot of data to the data. The congested network path will result in a lot of packet loss, and this incurs extra time to resend the network packets

>[!caution] Initial lag
> A slower startup speed means accessing new resources like a new web page will appear laggy





