---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - number_theory
  - discrete_math
Creation Date: 2023-12-14, 10:01
Last Date: 2024-02-27T15:03:02+08:00
References: 
---
## Abstract
---
- $d|n$ means that there is an [[Integer (整数)]] $k$ such as $n=dk$. Thus, $d$ is a [[Factor]] of $n$
- Used frequently under the topic of [[Relation]]


>[!caution] $d|n$  doesn't return a numerical value
>  It is not an actual division. It is a [[Mathematical Statement]] that is either `True` or `False`

### Divisibility Mathematical Model
- Let $a, b \in  \mathbb{Z}$  with $b \gt 0$. There exist unique $q,r \in \mathbb{Z}$ with $0 \le r \lt b$ such that $a = qb + r$ 
</br>

- We call $q$ and $r$ the **quotient** and **remainder** of $a$ when divided by $b$ respectively
- When $r=0$, we can say $b$ is a [[Factor]] of $a$


## Divisibility Rule
---
- An efficient way to determine if a given [[Integer (整数)]] is divisible by a fixed [[Factor]] without performing the division, usually by examining the digits of the given integer

>[!success] Save Resource Usage
> In order to perform division in programming, we need to store the number in a variable. If the given integer is too huge, we need a ton of memory space to store the integer and a ton of computation power to perform the division. Not to mention, In some programming languages, there is a upper value limit a variable can store before overflow.
### Typical Divisibility Rules
- **Divisibility by 2:** Check if the last digit is even
- **Divisibility by 3:** Calculate the sum of the digits, if the sum is divisible by 3, the original number is as well
- **Divisibility by 5:** Check if the last digit is 0 or 5
- **Divisibility by 10:** Check if the number ends in a 0

>[!bigbrain] Divisibility by 6
> Since $6=2 \times 3$, $2|6 \land 3|6$ , thus the given number must fulfil both **Divisibility by 2** and **Divisibility by 3** to be **Divisible by 6**

### Divisibility Rules Exceptions
- **Divisibility by 4:** Look at the last two digits. If the number formed by them is divisible by 4, the original number is too. Here, you might need to divide the two-digit number by 4
- **Divisibility by 7:** This rule is trickier:
    - Double the last digit and subtract it from the remaining number
    - If the result is divisible by 7, the original number is too. You might need to divide during this subtraction step
- **Divisibility by 11:**
    - Alternately subtract and add groups of digits
    - If the result is divisible by 11, so is the original number. Some division might be needed in these steps



## Theorems
---
### Theorem 4.3.1
- **A positive divisor of a positive integer**
- For all positive integers `a` and `b`, if `a|b`, then `a<=b` 
### Theorem 4.3.2
- **Divisors of 1**
- The only divisors of `1` are `1` and `-1`

### Theorem 4.4.3
- **Transitivity of Divisibility**
- For all integers a, b, c. If `a|b` and `b|c`, then `a|c`


