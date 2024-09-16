---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-08-30, 11:47
Last Date: 2024-09-14T11:48:37+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A technique used in programming to **manipulate individual bits within binary data**


## AND Bitmasking
---

```
     1 1 1 0 1 1 0 1     input
(&)  0 0 0 0 1 1 1 1      mask
------------------------------
     0 0 0 0 1 1 0 1    output
```

- The mask position set to `1` extracts the [[Computer Data Representation#Bit|bits]] of the given input, thus extracting a subnet of bits from the input. In the example above, we are extracting the last 4 bits of the input.

>[!code] MIPS `andi`
> Perform an AND bitmasking operation between a register and an immediate value.
> 
> Given `andi $t0, $s0 , 0xF`, the mask is `0xF` which `1111`, so we are getting the last 4 significant bits of `$s0`.


## OR Bitmasking
---
```
     1 1 1 0 1 1 0 1     input
(|)  0 0 0 0 1 1 1 1      mask
------------------------------
     1 1 1 0 1 1 1 1    output
```

- The mask position set to `1` turns the [[Computer Data Representation#Bit|bits]] of the given input to `1`. In the example above, we are turning the last 4 bits of the input to `1`

>[!code] MIPS `ori`
> Perform an OR bitmasking operation between a register and an immediate value.
> 
> Given `ori $t0, $s0 , 0xF`, the mask is `0xF` which `1111`, so we are turning the last 4 significant bits of `$s0` to `1`.

>[!code] MIPS loading 32-bit constant
> ![[mips_load_32_bits_constant.png|500]]
> 
> Why not just use `lw` to load the 32-bit constant from memory? Because `lw` requires us to access memory to fetch data, which is slow.
> 
> Why not just use `li`? It is a [[Instruction#Pseudo Instruction|pseudo-instruction]] that gets translated to something similar to what's shown above.


## NOR Bitmasking
---
```
       1 1 1 0 1 1 0 1     input
(nor)  0 0 0 0 0 0 0 0      mask
--------------------------------
       0 0 0 1 0 0 1 0    output
```

- With `0` mask we are able to use [[NOR]] as an [[NOT]] to invert the given input

>[!code] MIPS NOR bitmasking
> `nor $t0, $t0, $zero` is used to to perform NOT operation. MIPS doesn't have a dedicated NOT instruction to keep the instruction set small.


## XOR Bitmasking
---
```
     1 1 1 0 1 1 0 1     input
(^)  0 0 0 0 1 1 1 1      mask
------------------------------
     1 1 1 0 0 0 1 0    output
```

- Flip a subset of [[Computer Data Representation#Bit|bits]] in the given input. The positions in the mask that are set to `1` determine which bits in the input are flipped. The positions in the mask that are set to `0` will not make any changes to the given input


>[!important] Using XOR as NOT
> We can use XOR as [[NOT]] by setting the mask to `1`.