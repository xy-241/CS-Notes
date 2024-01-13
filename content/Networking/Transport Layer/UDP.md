---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-10-03T14:42:00
Last Date: 2024-01-13T22:19:03+08:00
---
## Abstract
---
- [UDP Server written in NodeJS](https://github.com/hnasr/javascript_playground/blob/master/tcp/udp.js)


## Benefits
---
### Smaller Packets 
- No overhead to implement [[TCP#Benefits]]

### Less Bandwidth Usage
- Because [[#Smaller Packets]]

### Faster than [[TCP]]
- No waiting incurred by [[TCP#Benefits]]

### Efficiency
- A [[Network Protocol#Stateless Network Protocol]]
- Entities can communicate without setting up connection first

### Support Horizontal Scaling
- Since each [[Host#Server]] doesn't maintain a stateful connection with [[Host#Client]]

## Cons
---
### Security
- [[Host#Server]] has no idea about [[Host#Client]], anyone can communicate with server
- Can be attacked by [[DDoS]] easily. [[TCP]] can filter data it receives by examining the identity of client like [[IP Address]]

### Other Cons
- No Acknowledgment 
- No Guaranteed Delivery
- Connectionless
- No Ordered Packets
- No Congestion Control




