---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:57:00
Last Date: 2024-09-15T16:52:12+08:00
---
## Abstract
---

![[pipeline_stages.gif|600]]

- 3 main stages, [[#Fetch]], [[#Decode]] & [[#Execute]]
- Thew 2 main [[Register]] involved are the [[Register#Instruction Register]] and the **address register** ([[Register#Program Counter]])

>[!caution] Wasted computation
> Each pipeline stage is **isolated** and **independent from each other**. When one stage is running, the other stages will be idle. You can see from the animation above, when the [[Instruction]] is decoded, the instruction register is actually ready to take in the next instruction. 
> 
> This can be optimised with [[Instruction-Level Parallelism]].


## Fetch
---
- Retrieve [[Instruction]] from [[Main Memory]] using [[Register#Program Counter]] and [[Register#Instruction Register]]

>[!example] MIPS fetch stage
> ![[mips_fetch_stage.png|500]]
> 
> The instruction memory in MIPS is a [[Sequential Circuit|sequential circuit]] that only gets updated with the next instruction at the next [[Sequential Circuit#Edge-triggered|rising clock edge]].

## Decode
---
- [[Control Unit]] configures **different parts** of the [[CPU]] like [[ALU]] with the given [[Instruction]] based on the [[ISA Instruction Format#Opcode]] with referencing to its [[Instruction Set Architecture (ISA)]]

>[!example] MIPS decode stage
> ![[mips_decode_stage.png|500]]
> 
> Two [[Multiplexer|multiplexers]] are used to perform the correct [[#Operand Fetch|operand fetch]] for [[MIPS R-Type Instruction|R-type]] and [[MIPS I-Type Instruction|I-type]] instructions. The bit signal sent to `RegDst` is `1` for R-type and `0` for I-type. The bit signal sent to `ALUSrc` is `0` for R-type and `1` for I-type.

### Operand Fetch
- Fetching [[ISA Instruction Format#Instruction Operand|instruction operand]] using the corresponding [[ISA Addressing Mode|addressing mode]]

## Execute
---
- Where the execution of [[Instruction]] is performed. See [[ALU#MIPS ALU]] for more information

### Memory Access
- Retrieve required data from [[Main Memory]] for [[ISA Addressing Mode#Displacement Addressing Mode|displacement addressing mode]]
- See [[MIPS Data Memory#Read Data|MIPS read data]] for more information

## Write Back
---
- Result is stored back into [[Main Memory]] or [[Register]] 
- See [[MIPS Data Memory#Write Data]] for more information


>[!example] MIPS register write back
> ![[mips_register_write_back.png|500]]
> 
> `RegWrite` is set to `1`, so data sent to `WD` is written to the register at `WR`. `MemToReg` is set to `1`, so the `ALU result` is sent to `WD`, instead of the `Read Data` from the [[MIPS Data Memory|MIPS data memory]].