---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-04-18, 15:17
Last Date: 2024-04-18T15:57:04+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Stands for **Field Programmable Gate Array**
- The 'do anything' hardware that is made up a large number of [[#CLB]]
- FPGA can be programmed to do almost anything, we can use [[#Hardware Description Language]] to perform [[Circuit Design]], then upload to FPGA, and it will have the ability of that particular hardware circuit design. Commonly used for tasks that require parallel processing, real-time processing, or specialized hardware acceleration

>[!success] Versatile
> Since we can get a custom digital circuit with FPGA using codes without the need to design and fabricate a custom chip, it is great for prototyping new hardware design and building high performance computing system etc.

>[!success] Cheaper?
> Cheaper than [Application-specific integrated circuit (ASIC) - Wikipedia](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit) if the demand for the chip is very small. ASIC is cheaper if the demand is huge by leveraging on the economy of scale. 

>[!caution] More complex to work with
> Require special tools and knowledge in circuit design.

>[!bigbrain] Trading firms
> FPGAs as custom network cards. They obeyed just enough of the [[Network Protocol]] to work with other devices, but stripped away any and all surplus code and functionality and trimmed every bit of timing down to the bone. So the trading firms can beat some other guy's trade.
### CLB
- Stands for **Configurable Logic Block**
- A group of [[Logic Gates]] that can be programmed to perform various functions


## Hardware Description Language
---

![[hdl.png|500]]

- The programming language used to program [[Circuit Design]] onto [[FPGA]]
- Examples are [Verilog - Wikipedia](https://en.wikipedia.org/wiki/Verilog#:~:text=Verilog%2C%20standardized%20as%20IEEE%201364,register%2Dtransfer%20level%20of%20abstraction.) and [VHDL - Wikipedia](https://en.wikipedia.org/wiki/VHDL#:~:text=VHDL%20(VHSIC%20Hardware%20Description%20Language,%2C%20documentation%2C%20and%20verification%20purposes.)