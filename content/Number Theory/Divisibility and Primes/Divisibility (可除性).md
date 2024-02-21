---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - number_theory
  - discrete_math
Creation Date: 2023-12-14, 10:01
Last Date: 2024-02-21T13:22:27+08:00
References: 
---
## Abstract
---
- $d|n$ means that there is an [[Integer (整数)]] $k$ such as $n=dk$. Thus, $d$ is a [[Factor]] of $n$
- Used frequently under the topic of [[Relation]]


>[!caution] $d|n$  doesn't return a numerical value
>  It is not an actual division. It is a [[Mathematical Statement]] that is either `True` or `False`

### Divisibility Mathematical Model
----
- Let $a, b \in  \mathbb{Z}$  with $b \gt 0$. There exist unique $q,r \in \mathbb{Z}$ with $0 \le r \lt b$ such that $a = qb + r$ 
</br>

- We call $q$ and $r$ the **quotient** and **remainder** of $a$ when divided by $b$ respectively
- When $r=0$, we can say $b$ is a [[Factor]] of $a$

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


