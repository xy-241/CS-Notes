---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-08-30, 11:17
Last Date: 2024-09-14T20:28:04+08:00
References: 
draft: 
description: 
---
## Abstract
---
![[MIPS_Register.png|500]]

>[!question] What is the purpose of register zero?
> We can use it to assign the value of one variable to another, like `add $s0, $s1, $zero`, which is equivalent to `$s0 = $s1`.

>[!important] 
> `$v0` and `$v1` are used by functions to return values.
> 
> `$a0`, `$a1`, `$a2`, and `$a3` are used to pass arguments to functions.
> 
> `$at` is used by the [[Language Processors#Assembler|assembler]] to store temporary values for [[Instruction#Pseudo Instruction|pseudo-instructions]].
> 
> `$t0` through `$t9` are not preserved across [[Function|function calls]]. If a function calls another function, the values in `$t0` through `$t9` may be overwritten when the called function returns. We can push the values in `$t0` through `$t9` onto the [[Address Space#Stack Frame|stack]] before calling the function and restore the values back to the registers when the called function returns.
> 
> `$s0` through `$s7` are preserved across functions calls!
> 
> `$v0` is same as `$2`!