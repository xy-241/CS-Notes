---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-08-31, 16:57
Last Date: 2024-09-05T21:47:28+08:00
References: 
draft: 
description: 
---
## Abstract
---
- [[MIPS]] executes [[Instruction|instructions]] in a **sequential manner**. It follows the instructions one by one in order. If we want to have loops, we need the **ability to change the order of executing instructions**

>[!important] Labels are not instructions
> Labels usually point to the target of branching or jumping. They aren't stored in the generated machine codes!

>[!important]
> Any form of loop can be written in [[Assembly language]] with the help of [[#Conditional Branch]] and [[#Unconditional Jump]].
> 
> For `for`, we convert it to a `while` loop first.
> For `while` loop, we can rewrite it with `if` statements and `goto`.
> 
> For `if` statements, we can rewrite it with conditional branch.
> For `goto`, we can rewrite it with unconditional jump.
## Conditional Branch
---
- `bne $t0, $t1, label` branches to `label` when `$t0 != $t1`. This is similar to `if ($t0 != $t1) goto label`
- `beq $t0, $t1, label` branches to `label` when `$t0 == $t1`. This is similar to `if ($t0 == $t1) goto label`

>[!tip] Translating from C to MIPS
> To optimise the number of MIPS instructions, consider inverting the condition. For example, use `bne` (branch if not equal) for `if ($t0 == $t1) goto label` and `beq` (branch if equal) for `if ($t0 != $t1) goto label`.

>[!important] New address
> When branch is taken, [[Register#Program Counter]] PC = (PC + 4) + ([[MIPS I-Type Instruction#Immediate Value]] * 4).
## Unconditional Jump
---
```asm
j label
j label
```
- `j label` branches to `label`. This is similar to `goto label`

## MIPS Inequality
---
- `slt $t0, $s1, $s2` is same as `$t0 = $s1 < $s2 ? 1 : 0`

>[!important]
> `blt $s1, $s2, L` is a [[Instruction#Pseudo Instruction]] which gets translated to `slt $t0, $s1, $s2`, followed by `bne $t0, $zero, L` by the [[Language Processors#Assembler]].