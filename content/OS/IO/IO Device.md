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
Last Date: 2024-05-27T19:41:45+08:00
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


## IO Operation
---
![[io_operation.png|500]]
- The process of [[CPU]] communicating with the outside world. This can include interactions with **humans**, other **computers**, or **peripheral devices** as shown above. CPU is **only involved** in **initiating** the operation and **processing** the **results of the operation**!!!

### Sequential IO
- [[#IO Operation]] that reads from or writes to a storage device in a **linear manner**, so the data written is all **clustered** on the **same physical area** of the storage device 

| **Aspect**            | **Sequential I/O**                                    | **Random I/O**                                       |
| --------------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| **Access Pattern**    | Linear, ordered                                       | Arbitrary, unordered                                 |
| **Performance**       | Generally higher due to reduced overhead              | Can be slower, especially on **mechanical drives**   |
| **Typical Use Cases** | Streaming media, backups, reading/writing large files | Database queries, accessing individual records/files |

>[!success] Much faster HDD
> ![[sequneial_io_hdd.png|500]]
> 
> HDD comes with a physical needle that needs to move around physically to write or retrieve data. This physical movement takes a lot of time.
> 
> With Sequential IO, we can make sure the data we write or retrieve live on the **same physical spot**, thus **minimise physical movement**. This property allows us to get `100MB/s` **throughput** from HDD! HDD is an order of magnitude cheaper than [[Flash Memory]] given the same storage size.

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
- [[Kernel]] automatically collect information about the [[IO Device]]
- Centrally assign **interrupt level** & **IO Addresses**
- Tell each IO device what its numbers are

