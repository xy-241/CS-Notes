#computer_organisation 
## Abstract
- [[Latch]] that stores a single bit
- Can be built with either [[NOR Gates]]([[Active-high]]) or [[NAND Gates]]([[Active-low]])
>![[S-R_Latch_diagram.png]]
- Circuit Diagram & [[Truth Table]] using [[NOR Gates]]  (Active-high input S-R Latch)
- When the pin from ``Q`` or ``Q'`` is low, the [[NOR Gates]] is active which means it is ready to take in the input from either ``R`` or ``S``
>![[S-R Latch.png]]

>[!sidenote] S and R meaning
>- S means [[Set in digital circuit]]
>- R mean [[Reset in digital circuit]]

>[!sidenote] ``Q``
>- The storage that stores the value

## Meaning of 4 different combinations
1. **S is 0 & R is 0**([[Main Memory]]): We aren't going to set a value and we aren't going to reset the value stored. So we expect the storage to return the value we set last time (which is 1), or reset which is (0)
2. **S is 0 & R is 1**(Reset Value): We aren't going to set a value and we are going to reset the value stored. So we expect the storage to return 0 since reset will reset the storage to 0
3. **S is 1 & R is 0**(Set Value): we are going to set a value (which is 1) in the storage and we aren't going to reset the value stored. So we expect the storage to return 1 since we just set the storage to 1
4. **S is 1 & R is 1**(Invalid): We are going to set a value (which is 1) in the storage and we are going reset the value stored (which turns the storage to 0). So we expect the storage to return both 0 and 1 which is impossible. Thus INVALID 
>[!caution] Invalid condition exists and must be avoided
>- When both S & R are 1, both `Q` & `Q'` will be 0

