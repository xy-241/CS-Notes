---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-09-15, 15:55
Last Date: 2024-09-15T16:39:35+08:00
References: 
draft: 
description: 
---
## Abstract
---

![[mips_data_memory.png|250]]

- Accepts a memory address with `Address`
- Both `MemWrite` and `MemRead` cannot be `1` at the same time. When `MemWrite` is `1`, `Write Data` is active and data is written to the `Address`. When `MemRead` is `1`, `Read Data` is active and data is read from the `Address`

>[!important]
> ![[mips_memory_or_register.png|500]]
> 
> The result from the [[ALU]] is connected to `Address`. However, some instructions, like the `add` instruction, don't involve the data element and would like the ALU result to be written back to a [[Register|register]]. That is why we add a [[Multiplexer|multiplexer]] `MemToReg` after the `Read Data` and the `ALU result`.

## Read Data 
---


![[mips_memory_load_data.png|500]]

- `RegDst` is set to `0`, so the `WR` is [[Register|register]] `rt`
- `ALUSrc` is set to `1`, so the `Immediate` value is sent to [[ALU]], instead of `RD2`
- `MemWrite` is set to `0`, and `MemRead` is set to `1`, so the [[Main Memory|memory]] is read-only

## Write Data
---

![[mips_memory_write_data.png|500]]

- `RegDst` is set to `0`, so the `WR` is [[Register|register]] `rt`
- `ALUSrc` is set to `1`, so the `Immediate` value is sent to [[ALU]], instead of `RD2`
- `MemWrite` is set to `1`, and `MemRead` is set to `0`, so the [[Main Memory|memory]] is write-only

>[!important]
> There is a wire between the `RD2` and `Write Data`, so the data inside register `rt` can be written back to the memory.