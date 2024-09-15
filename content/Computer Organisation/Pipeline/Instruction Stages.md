---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:57:00
Last Date: 2024-09-15T09:18:02+08:00
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

>[!example] MIPS Fetch Stage
> ![[mips_fetch_stage.png|500]]
> 
> The instruction memory in MIPS is a [[Sequential Circuit|sequential circuit]] that only gets updated with the next instruction at the next [[Sequential Circuit#Edge-triggered|rising clock edge]].

## Decode
---
- [[Control Unit]] configures **different parts** of the [[CPU]] like [[ALU]] with the given [[Instruction]] based on the [[ISA Instruction Format#Opcode]] with referencing to its [[Instruction Set Architecture (ISA)]]

>[!example] MIPS Decode Stage
> ![[mips_decode_stage.png|500]]
> 
> Two [[Multiplexer|multiplexers]] are used to perform the correct [[#Operand Fetch|operand fetch]] for [[MIPS R-Type Instruction|R-type]] and [[MIPS I-Type Instruction|I-type]] instructions. The bit signals sent to `RegDst` and `ALUSrc` are `0` for R-type and `1` for I-type.

### Operand Fetch
- Fetching [[ISA Instruction Format#Instruction Operand|instruction operand]] using the corresponding [[ISA Addressing Mode|addressing mode]]

## Execute
---
- Where the execution of [[Instruction]] is performed

### Memory Access
- Retrieve required data from [[Main Memory]]

## Write Back
---
- Result is stored back into [[Main Memory]] or [[Register]] 