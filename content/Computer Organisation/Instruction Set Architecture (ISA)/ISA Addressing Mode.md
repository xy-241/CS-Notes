---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-09-03, 17:21
Last Date: 2024-09-03T22:37:17+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Ways to specify an [[Instruction#Instruction Operand]] in an assembly language


## Register Addressing Mode
---
- [[ISA Instruction Format#Instruction Operand]] is in a [[Register]] (`add $t1, $t2, $t3`)


## Immediate Addressing Mode
---
- [[ISA Instruction Format#Instruction Operand]] is in a [[Instruction]] directly (`addi $t1, $t2, 98`)

## Displacement Addressing Mode
---
- [[ISA Instruction Format#Instruction Operand]] is in [[Main Memory|memory]] with [[Memory Address]] calculated as `Base + Offset` (`lw $t1, 20($t2)`)


## PC-relative Addressing Mode
---
- [[ISA Instruction Format#Instruction Operand]] is the sum of [[Register#Program Counter]] and constant in the instruction (`beq`, `bne`)