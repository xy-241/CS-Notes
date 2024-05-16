---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2024-01-27, 19:55
Last Date: 2024-05-16T18:19:25+08:00
References: 
draft: 
description: 
sr-due: 2024-03-04
sr-interval: 21
sr-ease: 230
---
## Abstract
---
![[computer_booting.png|700]]
- When the power is switched on, [[#BIOS]] is executed first, followed by [[#Boot Device]], lastly [[Kernel#Kernel Booting]]


### BIOS
- Contains **low-level** IO software
- Nowadays, stored in [[ROM#EEPROM]] which enables **firmware updates** to be performed **electronically**
- The newer standard is called [UEFI](https://www.freecodecamp.org/news/uefi-vs-bios/)
</br>

- The **first program** that starts when booting up a computer
	1. Checks [[Main Memory]] capacity
	2. Check [[IO Device]]
	3. Scanning [[IO Bus]] to detect all devices attached
	4. Determine the [[#Boot Device]] by trying out a list of devices specified in the **CMOS memory**. (Users can press **keyboard shortcut - F12, F11, Esc, F8, F9** to enter a **Boot Menu** and choose the boot device manually)
	5. The [[#Boot loader]] inside the boot device will carry out the next step

>[!tip]- Keyboard shortcut to enter BIOS
> ![[bios_hotkey.jpeg]]

>[!info] CMOS memory
> [Nonvolatile BIOS memory](https://en.wikipedia.org/wiki/Nonvolatile_BIOS_memory) that stores the **BIOS configuration**,  it needs to have a **battery to preserve the data**. That is why we need to take off the battery to reset the BIOS.
> 
> CMOS memory is usually included as part of a module that provides [Real-time clock - Wikipedia](https://en.wikipedia.org/wiki/Real-time_clock).
### Boot Device
![[boot_device.png|500]]
- Storage device that contains **Master Boot Record** and the [[OS]]
- Master Boot Record is read into [[Main Memory]] to start the [[#Boot Loader]]

>[!info] Partition Table
> Contains information about how the partitions on the disk are organized. Can be created in 2 disk partitioning schemes - **Master Boot Record** and **GUID Partition Table** (Needs UEFI [[#BIOS]])

>[!info]- Essential partitions of a Linux Boot Device
> **`/boot` partition** 
> - Stores the [[Linux Kernel]], initial RAM disk image (initrd), and [[#Boot loader]]
> - 500MB - 1GB is typically sufficient
> - [[File System#Ext4]] is a common choice, but other Linux filesystems can work too
>   
> **`/boot/efi` partition**
> - **EFI System Partition (ESP)**, stores the EFI bootloader files specifically needed for systems using UEFI (most modern systems)
> - 100MB - 500MB is usually enough
> - **Formatted as FAT32** for compatibility across different architectures
> - Needs "boot" or "esp" flag
> - `/boot` becomes optional to unified the partition for kernel and boot loaders. However, non-encrypted `/boot` is required if the rest of the system is encrypted!
> 
> **`/`  partition (root partition)**
> - Core of your Linux installation. It contains all your system files, user files, program data, etc
> - The space of the rest of the boot device
> - EXT4 is the most common and reliable option

>[!info]- Optional partitions for Linux Boot Device
> These optional partitions provide extra features.
> 
> **`/home` partition**
> - Keeps your user files separate from system files, you can format your `/` partition without losing personal files and settings, great for **Distro hopping**
> - EXT4 for stability and reliability and **XFS** for big media files
> 
> **`linuxswap` partition**
> - [[Swap Space]]
> - Traditionally, double your RAM size was recommended. Modernly, it depends on your usage. If you hibernate often, matching your RAM size is wise. Otherwise, a few GB might suffice if you have ample RAM
> - "linux-swap" [[File System]] and no mount point
#### Boot loader
1. Examines the **partition table** at the end of **boot sector** to determine which **partition** is active. Providing a menu for user to select which [[OS]] to boot
2. When an OS is selected, boot loader loads in the corresponding [[Kernel]] into the [[Main Memory]]
3. [[Kernel#Kernel Booting]] will finish up on the booting of the OS
</br>

>[!info]
> One common boot loader is [Grub2](https://help.ubuntu.com/community/Grub2).


## References
---
- [How Does Linux Boot Process Work?](https://youtu.be/XpFsMB6FoOs?si=uBxjBymSdHkESwsr)
- [Where is the bios stored? - Quora](https://www.quora.com/Where-is-the-bios-stored)
- [rom - Where is the BIOS stored? - Super User](https://superuser.com/questions/707254/where-is-the-bios-stored)
- [Nonvolatile BIOS memory - Wikipedia](https://en.wikipedia.org/wiki/Nonvolatile_BIOS_memory)