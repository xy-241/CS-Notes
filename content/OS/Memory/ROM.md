---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
  - arduino
Creation Date: 2024-02-27, 15:57
Last Date: 2024-06-03T17:08:04+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Stands for **Read-Only Memory**
- Stores data and [[Instruction]] that are **non-volatile** and **permanent** like [firmware](https://en.wikipedia.org/wiki/Firmware) and [[Computer Booting#BIOS]]

## EEPROM
---
- Stands for **Electrically Erasable Programmable Read-Only Memory**
- A type of [[ROM]] that allows **individual bytes** of data to be **erased** and **reprogrammed**

>[!caution] Comes with Lifespan
> We can only write to each [[Memory Address]] of the EEPROM a certain number of times before it starts to fail and become unreliable. Most has a lifespan of 100,000 write/erase cycles, so be careful with placing EEPROM read / writes in loops!
> 
> We can counter this by [Wear Leveling](https://en.wikipedia.org/wiki/Wear_leveling) where we keep track of the the number of times we have written to an memory address. When it reaches the limit, we change to a fresh address. This will greatly increase the life expectancy of the EEPROM 

>[!example] Arduino Uno
> Comes with 1kB of EEPROM storage which can be accessed using the [Arduino EEPROM Library](https://docs.arduino.cc/learn/built-in-libraries/eeprom/)


## References 
---
- [Arduino Workshop - Chapter 4 - Using EEPROM - YouTube](https://youtu.be/hH9WalIMaeM?si=2pM7FJbjsDRvA4Ba)