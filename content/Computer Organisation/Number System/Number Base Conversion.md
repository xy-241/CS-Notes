---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-17, 20:32
Last Date: 2024-06-17T20:22:56+08:00
References: 
---
## Abstract
---

| Decimal | Binary | Hexadecimal |
| ------- | ------ | ----------- |
| $0$     | $0000$ | $0$         |
| $1$     | $0001$ | $1$         |
| $2$     | $0010$ | $2$         |
| $3$     | $0011$ | $3$         |
| $4$     | $0100$ | $4$         |
| $5$     | $0101$ | $5$         |
| $6$     | $0110$ | $6$         |
| $7$     | $0111$ | $7$         |
| $8$     | $1000$ | $8$         |
| $9$     | $1001$ | $9$         |
| $10$    | $1010$ | $A$         |
| $11$    | $1011$ | $B$         |
| $12$    | $1100$ | $C$         |
| $13$    | $1101$ | $D$         |
| $14$    | $1110$ | $E$         |
| $15$    | $1111$ | $F$         |


## Decimal to Binary
---
### Integer
- Keep diving by 2 until we get 0
- Then the binary form counts from *bottom to top*
![[decimal_to_binary_1.png]]

### Decimal Places
- Keep multiple by 2 until we get *1* or *infinite loop*
- Then the binary form counts from *top to bottom*
![[decimal_to_binary_2.png]]

## Decimal to any base 
---
### Integer 
![[base10_to_base8.jpg]]
- keep diving by the base you want to convert to e.g(base8,base3 etc )
- take the reminder and multiply it by the base 
- repeat the steps until we are left with 1 or infinite loop 

### decimal
- multiply by the desired base you want to convert
- take the integer portion of the result that is the converted number 
- continue by multiplying the reminder
- repeat the steps until you get 1 or infinite loop 
## convert any base to any base
--- 
### method 1 
convert initial base to decimal/base 10 and then convert to desiered base using the [[Decimal to any base ]]



