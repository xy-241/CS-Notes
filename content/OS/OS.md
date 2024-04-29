---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-13T19:06:12+08:00
Last Date: 2024-04-26T19:25:08+08:00
References: 
description: The giant that powers the software application we use on a daily basis!
---
## Abstract
---
- Consists of [[Kernel]] and [[OS System Program]]
- 2 main functionalities
	1. Provide user like you and me features to interact with the hardware like browsing the web
	2. Resource Manager for resources like [[IO Device]] & [[Main Memory]] etc



## Types of OS
---
### Embedded OS
- Run on devices like ovens, no un-trusted software will ever run on it
- All software in [[ROM]]
- Example are [[OpenWRT]] and [FreeRTOS](https://www.freertos.org/index.html)

### Smart Card OS
- Smallest [[OS]] run on smart cards
- Used in [[Electronic Payment]] etc
- Some are [[Java]] oriented 

### Server OS
- Provides file service or Web services etc
- Examples are [[FreeBSD]], [[Linux Kernel]] and [[Windows Server]]

### Sensor-Node OS
- Running on sensor node that has very limited [[CPU]], [[Main Memory]] & [[ROM]]
- Example is [TinyOS](https://en.wikipedia.org/wiki/TinyOS)

### Real-Time OS
- Allow **multiple tasks** to run at the **same time**
- 2 Types - [[Hard Real-Time System]] & [[Soft Real-Time System]]
- Example is [FreeRTOS](https://www.freertos.org/index.html), used by [ESP32](https://en.wikipedia.org/wiki/ESP32)

### Personal Computer OS
- Support [[Multi-programming]] - dozens of programs started up at boot time
- Provide good support to a single user
- Widely used for word processing, spreadsheets & gaming etc
- Example are [[Linux Kernel]] and [[Windows]]

### Handheld Computer OS
- Examples are [[Android]] and [[iOS]]

### Mainframe OS
- Act as [[#Batch System]], [[Concurrency (并发)#Multi-tasking]], [[#Transaction-processing System]]
- IO intense, for enterprise
- Gradually replaced by UNIX variants like [[Linux Kernel]]
- Examples are like OS/390 and OS/360

### Multi-processor OS
- Make use of multiple [[CPU]] and [[Multi-core Chip]] in a single system
- Examples are [[Linux Kernel]] and [[Windows]]


## Terminologies
---
### Batch System
- Process jobs without any interactive user present
### Transaction-processing System
- Handle large number of of small requests, hundreds/thousands per second