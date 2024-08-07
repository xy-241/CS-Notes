---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - math
  - discrete_math
Creation Date: 2024-07-29, 16:06
Last Date: 2024-08-07T15:16:36+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Also known as **Geometric Series**
- Sum of numbers in a [[Sequence|sequence]]

## Finite Series Partial Sum
---
$$
S_n = \frac{a(1-r^n)}{1-r}
$$

>[!question] What is the proof?
> Given [[Sequence|sequence]] $S_n = a + ar + ar^2 + \cdots + ar^{n-1}$. We can multiply both sides with a common ratio $r$, and we get $rS_n = ar + ar^2 + ar^3 + \cdots + ar^n$.
> 
> We then subtract the second equation from the first, so most of the terms cancel out, $S_n - rS_n = a - ar^n$.
> 
> To solve for $S_n$, we perform factorisation $S_n(1-r) = a(1-r^n)$, and we get $S_n = \frac{a(1-r^n)}{1-r}$.

## References
---
- [【漫士科普】为什么说数学思维就是抽象 - YouTube](https://youtu.be/6tT0PN7E2GM?si=OIfQMJZbfNzK5VND)