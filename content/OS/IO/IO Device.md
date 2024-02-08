---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
  - java
  - cpp
Creation Date: 2023-07-14T20:53:45+08:00
Last Date: 2024-02-08T13:08:17+08:00
References: 
---
## Abstract
---
* Controlled by [[Device Controller]]
* Examples are like keyboard and monitor 

>[!info]- Same IO Device but Different Performance Between CPP and Java
> `System.out.println()` in Java is much slower than `cout` in CPP. 
> 
> `cout` typically performs **buffered output by default**, meaning it accumulates a certain amount of data before actually writing it to the output device. This reduces the number of [[System Call (系统调用)]] made, which can improve performance, especially when outputting a large amount of data.
> 
> `System.out.print` in Java is synchronized for [[Multi-threading#Thread Safety (线程安全)]], which can introduce some overhead
> 
> However, buffer takes [[Main Memory]], we need to a fine balance between the **system call we reduce** with buffer and the the **memory usage incurred** by the buffer. 512 [[Computer Data Representation#Byte]] is common buffer size


## Useful Commands
---
**`read`**
- Built-in for retrieving data from standard input and assign the value to a bash variable
- The command below displays a prompt before the input. Only works for **BASH**, not for **ZSH** 
```bash
read -p "Enter your input here: " variable
```


 ## Terminologies
---
### Plug and Play
- [[OS]] automatically collect information about the [[IO Device]]
- Centrally assign **interrupt level** & **IO Addresses**
- Tell each IO device what its numbers are
