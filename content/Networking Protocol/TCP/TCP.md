---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - bash
Creation Date: 2023-08-18T13:05:00
Last Date: 2024-10-16T16:09:38+08:00
aliases:
  - ../../Networking/Transport-Layer/TCP/TCP
---
## Abstract
---
- The [[Network Protocol#Stateful Network Protocol]] used transfer data from one [[Computer Network]] to another
- Implemented inside the [[Kernel]], so if we want some custom features for TCP, we need to modify the kernel codes

>[!important] TCP is bidirectional
> Both peers can send and receive data, which means each peer has a [[#Sequence Number]] to track the bytes sent and an [[#Acknowledgement Number]] to track the bytes received.


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


### Sequence Number
- Tracks what is sent
- A measure of bytes

>[!important] Initial Sequence Numbers (ISN) 
> The initial sequence numbers are randomly chosen by the sender. This information is shared between the peers during the [[TCP Connection]].



### TCP Retransmission Timeout
- Sender caches a packet when he sends out it. If a [[#TCP ACK]] isn't received in a specific timeframe, the packet is resent
- The sender caches a packet when it is sent. If an TCP ACK isn't received within a specific timeframe, the packet is resent

>[!question] What if the receiver receives the packet, but the ACK is lost?
> A TCP retransmission timeout will be triggered, and the same packet with the same old sequence number will be resent. The receiver will recognise it as a duplicate, understand that the ACK didn’t reach the sender, and will **simply resend the ACK**.
> 
> Thus, this mechanism handles **packet drops in either direction**.

### TCP Window Size
- Also **bytes in flight**
- Limits how much [[#TCP ACK|unacknowledged]] data can be sent before the sender needs to stop and wait for TCP ACK

>[!important] Enables receiver to receive data at the optimal rate
> The window size is sent with each segment, meaning it can be **dynamically updated** during the connection. This is used for **flow control**, where the sender can instruct the receiver to stop sending data by setting the window size to `0` in the [[#TCP ACK]]. Later, the sender can send another TCP ACK, with a window size of `600`, for example, to indicate that it is ready to receive up to `600` bytes of data.

## TCP ACK
---
### Acknowledgement Number
- Tracks what is received
- A measure of bytes

>[!important]
> The acknowledgment number (ACK) that the receiver sends back to the sender is the [[#Sequence Number|sequence number]] the sender will use in the next packet.
> 
> The ACK number indicates that all bytes before that number have been received. In other words, the receiver is ready to receive the next byte, and this byte should begin at the ACK number sent to the sender.

>[!important] Phantom byte
> The ACK number is used to inform the sender that the previous packet has been received. **Even if the previous packet doesn't contain any data**, just the packet itself, the ACK number that the receiver sends will still **increase by one**.
> 
> This phantom byte is added for [[#Sequence Number|SYN]] and [[TCP Connection#Graceful TCP Connection Termination|FIN]], but not for [[#TCP ACK]].
> 
> The phantom byte is critical for sender to **differentiate** between resending an `ACK` and acknowledging a new `SYN` or `FIN` from the receiver.

### TCP Delayed Acknowledgements
- Send a [[#TCP ACK]] for every two packets to reduce [[Bandwidth|bandwidth usage]]

>[!important]
> The acknowledgements are **cumulative**. The ACK number in the TCP ACK is the sum of the **base sequence number and the total bytes received in the two packets**.

>[!question] What if the sender only transmits one packet?
> A TCP ACK will be sent after `500 ms` if the receiver never receives the second packet.




## TCP Slow Start
---
- Only a small amount of data is transferred to test the water at the start of the communication. If data is delivered smoothly, TCP will gradually increase the amount of data

>[!success] Avoid network congestion
> If a particular network path is congested and we dump a lot of data to the data. The congested network path will result in a lot of [[Network Router#Packet Loss|packet loss]], and this incurs extra time to resend the network packets

>[!caution] Initial lag
> A slower startup speed means accessing new resources like a new web page will appear laggy



## References
---
- [TCP - 12 simple ideas to explain the Transmission Control Protocol - YouTube](https://youtu.be/JFch3ctY6nE?si=eA6r_i0hMVqE36jA)

