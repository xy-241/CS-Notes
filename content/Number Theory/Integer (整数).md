---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - number_theory
Creation Date: 2023-12-16, 17:40
Last Date: 2024-08-19T15:43:16+08:00
References: 
---
## Abstract
---
- **Discrete objects**, for example there is a clear separation between $1$ and $2$, unlike there can be $1.25$ between $1.2$ and $1.3$
- Used a lot in [[Discrete Math]]
- The mathematical symbol is $\mathbb{Z}$ (315, -9045), positive integers are represented with $\mathbb{N}$ (0,1,2,3,4...)

>[!important]
> $0$ is neither negative or positive.

### Integer Mathematical Model
- any integer can be obtain from $\sum_{i=0}^{i=n-1}d_{i} \times 10^{i}$
	- $n$: total number of digits in the given integer 
	- $i$: the index position of the given integer counting from the right hand side
	- $d_{i}$: the value of the digit at position $i$

>[!example]- Given the integer $9213$, $n$ is $4$
> $\sum_{i=0}^{i=3}d_{i} \times 10^{i} = d_{0} \times 10^{0} + d_{1} \times 10^{1} + d_{2} \times 10^{2} + d_{3} \times 10^{3}$
> 
> Substitute in the digits, we get $3 \times 10^{0} + 1 \times 10^{1} + 2 \times 10^{2} + 9 \times 10^{3}$
> 
> Simplify it, we obtain $3 \times 1 + 1 \times 10 + 2 \times 100 + 9 \times 1000 = 3 + 10 + 200 + 9000$ 
> 
> Finally we obtain $9213$


## Theorems
---
### Theorem 4.4.1
- **The Quotient-Remainder Theorem**
- Given any [[Integer (整数)]] `n` and positive integer `d`, there exist unique integers `q` and `r` such that
$$
(n = dq + r) \land (0 \le r < d )
$$

![[quotient-remainder-theorem.png|500]]
### Theorem 4.6.1
- **There is no greatest integer**
- Proved by [[Indirect Proof#Proof by Contradiction (矛盾证明法)]]