---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
Creation Date: 2023-12-22, 23:53
Last Date: 2024-08-21T15:18:25+08:00
References: 
draft: 
---
## Abstract
---

>[!important] Entry point function
> A C program must **have** a [[Function|function]] with the [[Function#Function Signature|function signature]] `int main()`. It is **the** standardised entry point, **ensuring** proper interaction with the operating system.


>[!question] What does `a = b = c = 3 + 6` mean?
> `9` assigned to variables `c`, `b` and `a`.
> 
> `c = 3 + 6` returns `9` which is assigned to `b`, then `b = 9` returns `9` which is assigned to `a`. `c = 3 + 6` returns `9` is known as **side effect**.

>[!attention] Remainder operation in C
> `10 % 4` gives `2`, `-10 % 4` gives `-2`. The **sign of the dividend is preserved**.

## C Terminology
---

| Terminology | Meaning                             |
| ----------- | ----------------------------------- |
| C Vector    | Basically [[Array#Dynamic Array]]   |
| C Structs   | Allow grouping of heterogenous data |







## C Operator Precedence
---
 ![[c_operator_precedence.png|500]]

- If we want operators with **lower precedence** to **execute first**, we need to **use parentheses**

