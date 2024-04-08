---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-29T20:13:44
Last Date: 2024-04-08T16:39:53+08:00
References: 
---
## Abstract
* A small embedded computers that are programmed to tell [[IO Device]] what to do
* Communicates with [[Kernel]] over [[#Device Driver]]


## Device Driver
---
- A piece of software that allows [[Kernel]] to talk to the [[Device Controller]] over a **standardised interface**

## IO Device Register
---
- Act as **interfaces** for [[CPU]] to control [[OS/IO/IO Device|IO Device]] like hard drives, keyboards, printers etc

### IO Port Space
- A separate [[Address Space]] on a computer used for communicating with [[#IO Device Register]]
- Modern system usually use [[Register#Memory Mapped Register]]
