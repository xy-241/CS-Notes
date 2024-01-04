---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-29T20:13:44
Last Date: 2024-01-04T15:23:42+08:00
References: 
---
## Abstract
* A small embedded computers that are programmed to tell [[IO Device]] what to do
* Communicates with [[OS]] over [[#Device Driver]]

## Terminologies
---
### Device Driver
- A piece of software that allows [[OS]] to talk to the [[Device Controller]] over a standardised interface
### IO Device Register
- Used to control [[IO Device]]
- Act as *interfaces* between the [[CPU]] and external devices such as hard drives, keyboards, printers, and more

### IO Port Space
- A separate [[Address Space]] on a computer used for communicating with [[#IO Device Register]]
- Modern system usually use [[Register#Memory Mapped Register]]