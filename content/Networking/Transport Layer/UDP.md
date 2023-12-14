---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-10-03T14:42:00
Last Date:
---
## Abstract
---
- [UDP Server written in NodeJS](https://github.com/hnasr/javascript_playground/blob/master/tcp/udp.js)


## Benefits
---
### Smaller Packets 
- No overhead to implement [[TCP#Benefits]]

### Less [[Bandwidth]]
- Because [[#Smaller Packets]]

### Faster than [[TCP]]
- No waiting incurred by [[TCP#Benefits]]

### [[Stateless protocol]]
- Entities can communicate without setting up connection first

### Support Horizontal Scaling

## Cons
---
### No Acknowledgment 


### No Guaranteed Delivery
- 

### Connectionless
- 

### No Congestion Control
- 


### No Ordered Packets


### Security
- [[Host]] has no idea about [[Host]], anyone can communicate with [[Host]], can be attacked by [[DDoS]] easily. [[TCP]] can filter [[Data]] it receives by examining the identity of [[Host]] like [[IP Address]]