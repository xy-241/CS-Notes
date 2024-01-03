---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-13T19:06:12+08:00
Last Date: 2024-01-03T15:44:09+08:00
References: 
---
## Abstract
---
1. Provide user as an *extended machine*
2. Resource Manager for resources like [[IO Device]] & [[Main Memory]] etc
- Consists of [[Kernel]] and [[OS System Program]]

## Booting OS
---
1. Get configuration info from [[BIOS]]
2. Check for missing [[Device Controller#Device Driver]]
3. Initialise [[Page Table]]
4. Starts up a login program/GUI


## Types of OS
---
### Embedded OS
- Run on devices like ovens, no un-trusted software will ever run on it
- All software in **ROM**
- One example is embedded [[Linux]]

### Smart Card OS
- Smallest [[OS]] run on smart cards
- Used in [[Electronic Payment]] etc
- Some are [[Java]] oriented 

### Server OS
- Provides file service or Web services etc
- Examples are [[FreeBSD]], [[Linux]] and [[Windows Server]]

### Sensor-Node OS
- Running on sensor node that has very limited [[CPU]], [[Main Memory]] & [[ROM]]
- Example is [[TinyOS]]

### Real-Time OS
- 2 Types - [[Hard Real-Time System]] & [[Soft Real-Time System]]
- Example is [[FreeRTOS]], used by [[ESP32]]

### Personal Computer OS
- Support [[Multi-programming]] - dozens of programs started up at boot time
- Provide good support to a single user
- Widely used for word processing, spreadsheets & gaming etc
- Example are [[Linux]] and [[Windows]]

### Handheld Computer OS
- Examples are [[Android]] and [[iOS]]

### Mainframe OS
- Act as [[#Batch System]], [[Multi-tasking]], [[#Transaction-processing System]]
- IO intense, for enterprise
- Gradually replaced by UNIX variants like [[Linux]]
- Examples are like OS/390 and OS/360

### Multi-processor OS
- Make use of multiple [[CPU]] and [[Multi-core Chip]] in a single system
- Examples are [[Linux]] and [[Windows]]


## Terminologies
---
### Batch System
- Process jobs without any interactive user present
### Transaction-processing System
- Handle large number of of small requests, hundreds/thousands per second