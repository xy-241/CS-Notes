---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-07-15T17:02:04+08:00
Last Date: 2023-12-14T19:32:16+08:00
References: 
---
>[!note]
>Booting sequence
>1. [[BIOS]] started
>	1. Checks [[Main Memory]] capacity
>	2. Check [[IO Device]]
>		1. Scanning [[Peripheral Component Interconnect Express (PCIe) bus]] etc to detect all devices attached
>	3. Determine the [[Boot Device]] by trying out a list of devies stored in the [[CMOS]]
>2. Boot Device started
>	1. [[First sector from the boot device]] is read into memory & executed
>3. [[Secondary Boot loader]] started
>4. [[OS]] started
>	1. Get configuration info from BIOS
>	2. Check missing [[Device Controller#Device Driver]]
>	3. [[Initialize table]]
>	4. Starts up a login program/GUI