---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-07-14T21:06:58+08:00
Last Date: 2024-02-26T16:34:38+08:00
References: 
---
## Abstract
---
- A **communication pathway** within a computer system that facilitates the exchange of **data** between the [[CPU]], [[Main Memory]], and [[IO Device]]




## IO Bus Architecture
---
### Shared Bus Architecture
- Multiple [[IO Device]] uses the same wire to transfer data
### Parallel Bus Architecture
* Send each [[Computer Data Representation#Word]] of data over multiple wires

>[!caution] Overhead of Synchronisation
> Extra logic and overhead are involved to ensure data transferred over multiple [[IO Bus]] are re-arranged back its original form  
### Serial Bus Architecture
- Sending data one [[Computer Data Representation#Bit]] at a time, **sequentially**, over **a single** [[IO Bus]]
- The current modern standard as of 2024, capable of delivering more data than other [[#IO Bus Architecture]]
- Common standards are [[PCI]], [[USB]] and [[UART]] etc

>[!success] Simplicity
> No need to have complicated logic to handle synchronisation of many parallel busses like the [[#Parallel Bus Architecture]]

