#computer_organisation 
>[!abstract] ``R[rt] = (R[rs]<SignExtImm) ? 1 : 0``
>- If value in [[Source Register (rs, 5bits)]] is smaller than [[Immediate Value (16 bits, 2's Complement)]], then [[Target Register (rt, 5bits)]] is set to 1 else 0

>[!example] Set ``$t0`` to 1 if ``$t0`` is less than 1
>```mips
>slti $t0, $t0, 1
>```

