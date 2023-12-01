#computer_organisation 
>[!abstract] It effectively shifts the value right by n bits, discarding the lower n bits
>- [[R-Type]]
>- Can be perform on [[Registers]] regardless of the values it is holding ([[Memory Address]] & values etc)

>[!caution] [[Source Register (rs, 5bits)]] is 0

>[!example] `srl $s0, $s0, 4` can be thought of as dividing the value in register `$s0` by 16 (2^4)