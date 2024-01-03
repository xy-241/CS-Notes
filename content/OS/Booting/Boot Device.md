---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-12-20, 15:30
Last Date: 2023-12-24T16:20:13+08:00
References: 
---
## Abstract
---
- Physical or logical storage device that contains [[#Master Boot Record]]

## Boot Device in Booting
---
1. [[#Master Boot Record]] is read into [[Main Memory]]
2. [[#Secondary Boot Loader]] started

## Terminologies
---
### Master Boot Record
- Contains [[#Primary Boot Loader]]
### Primary Boot Loader
- Initiate the process of loading the [[OS]] into the computer's [[Main Memory]]
- Examines the **partition table** at the end of **boot sector** to determine which **partition** is active. Providing a menu for user to select which OS to boot

### Secondary Boot Loader
- Loading the [[Kernel]] and initialising the [[OS]] environment from **active partition** and start it
