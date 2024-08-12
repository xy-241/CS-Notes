---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-21T21:43:00
Last Date: 2024-06-10T21:18:02+08:00
References: 
---
## Abstract
---
- The **path** that **data** takes to flow through the [[CPU]]. The path consists of the following **CPU components**


| CPU Component                             | Description                                                                                                                                                                                      |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [[Multiplexer]]                           | Consolidate **multiple inputs(多路)** into one **single output（复用)**.<br><br>Gives the flexibility of picking **one of the inputs** based on the [[Instruction]]'s [[Instruction#Opcode\|opcode]]. |
| [[ALU]]                                   | Performs **arithmetic** and **logic** operations on the data.                                                                                                                                    |
| [[Register#Register File\|Register File]] | Provides the **fastest reading** and **writing** of data.                                                                                                                                        |
| [[Adder]]                                 | Often used for **incrementing** [[Register#Program Counter\|program counter]] or **calculating** [[Memory Address]].                                                                             |
| [[Clock Oscillator\|Clock]]               | **Synchronises** the operations of the CPU by providing a **timing signal**.                                                                                                                     |
| Instruction Memory                        | [[Main Memory]] that **stores the instructions** that are fetched and executed by the CPU.                                                                                                       |
| Data Memory                               | Main memory that stores **data** that can be read from or written to by the CPU during program execution.                                                                                        |
