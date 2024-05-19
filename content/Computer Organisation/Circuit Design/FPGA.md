---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-04-18, 15:17
Last Date: 2024-05-19T19:35:10+08:00
References: 
draft: 
description: 
---
## Abstract
---

![[fpga.gif]]

- Stands for **Field Programmable Gate Array**
- The 'do anything' hardware that is made up a large number of [[#CLB]]
- FPGA can be programmed to do almost anything, we can use [[#Hardware Description Language]] to perform [[Circuit Design]], then upload to FPGA, and it will have the ability of that particular hardware circuit design. Commonly used for tasks that require parallel processing, real-time processing, or specialized hardware acceleration

>[!success] Versatile
> Since we can get a custom digital circuit with FPGA using codes without the need to design and fabricate a custom chip, it is great for prototyping new hardware design and building high performance computing system etc.

>[!success] Cheaper?
> Cheaper than [Application-specific integrated circuit (ASIC) - Wikipedia](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit) if the demand for that particular chip design is very small. ASIC is cheaper if the demand is huge by leveraging on the economy of scale. 

>[!success] Much faster
> Normal processor needs to perform [[Pipeline Stages#Fetch]], [[Pipeline Stages#Decode]] of the **software [[Instruction]]**, FPGA can just go straight to [[Pipeline Stages#Execute]] since the hardware is structured in a way that process the incoming zeros and ones without the need of pre-processing.

>[!caution] More complex to work with
> Require special tools and knowledge in circuit design.

>[!bigbrain] Trading firms's FPGA use case
>![[fpga_in_tading.png]]
>
> FPGAs are used by trading firms to process market orders without the involvement of [[CPU]] and [[Kernel]] to minimise latency. They obeyed just enough of the [[Network Protocol]] to work with other devices, but stripped away any and all surplus code and functionality and trimmed every bit of timing down to the bone. So the trading firms can beat some other guy's trade.
> 
> FPGA takes **10ns** from receiving the market order to running the trading strategies and sending back a response, it is insanely fast considering accessing L1 [[CPU Cache]] takes about [[Latency Number|1ns]]. OS and CPU are so bloated compared to FPGA!
### CLB
- Stands for **Configurable Logic Block**
- A group of [[Logic Gates]] that can be programmed to perform various functions


## Hardware Description Language
---

![[hdl.png|500]]

- The programming language used to program [[Circuit Design]] onto [[FPGA]]
- Examples are [Verilog - Wikipedia](https://en.wikipedia.org/wiki/Verilog#:~:text=Verilog%2C%20standardized%20as%20IEEE%201364,register%2Dtransfer%20level%20of%20abstraction.) and [VHDL - Wikipedia](https://en.wikipedia.org/wiki/VHDL)


## References 
---
- [The "Do Anything" Chip: FPGA - YouTube](https://www.youtube.com/watch?v=ePwo3P1iZO4)
- [FPGA in trading | Ultra low latency trading | HFT System Design - YouTube](https://www.youtube.com/watch?v=uJT33dnTlqY)
- [What's an FPGA? - YouTube](https://youtu.be/iHg0mmIg0UU?si=aqlvfXdkPlzbajlQ)
- [CPU vs FPGA - YouTube](https://www.youtube.com/watch?v=BML1YHZpx2o)