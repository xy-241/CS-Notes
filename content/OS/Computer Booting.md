---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-01-27, 19:55
Last Date: 2024-02-02T00:47:53+07:00
References: 
draft: 
description: 
sr-due: 2024-02-12
sr-interval: 9
sr-ease: 230
---
## Abstract
---
![[computer_booting.png|700]]
- When the power is switched on, [[#BIOS]] is executed first, followed by [[#Boot Device]], lastly [[Kernel#Kernel Booting]]


### BIOS
- Contains **low-level** IO software
- Nowadays, stored in **Flash RAM** - nonvolatile & can be updated
- The newer standard is called [UEFI](https://www.freecodecamp.org/news/uefi-vs-bios/)
</br>

- The **first program** that starts when booting up a computer
	1. Checks [[Main Memory]] capacity
	2. Check [[IO Device]]
	3. Scanning [[IO Bus#PCI Bus]] etc to detect all devices attached
	4. Determine the [[#Boot Device]] by trying out a list of devices stored in the **CMOS**
	5. The [[#Boot loader]] inside the boot device will carry out the next step


### Boot Device
![[boot_device.png|500]]
- Storage device that contains **Master Boot Record** and the [[OS]]
- Master Boot Record is read into [[Main Memory]] to start the [[#Boot Loader]]

#### Boot loader
1. Examines the **partition table** at the end of **boot sector** to determine which **partition** is active. Providing a menu for user to select which [[OS]] to boot
2. When an OS is selected, boot loader loads in the corresponding [[Kernel]] into the [[Main Memory]]
3. [[Kernel#Kernel Booting]] will finish up on the booting of the OS
</br>

- Common boot loaders are [Grub2](https://help.ubuntu.com/community/Grub2)


## References
---
- How Does Linux Boot Process Work?
![How Does Linux Boot Process Work? - YouTube](https://youtu.be/XpFsMB6FoOs?si=uBxjBymSdHkESwsr)