---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-06T15:13:00
Last Date: 2024-03-07T10:36:02+08:00
References: 
---
## Abstract
---
- Analysis **space** & **time** used, related with the input size and observing the trend when input size gets bigger
- The analysis isn't limited to particular machine. It applies to all the machines

>[!caution]- It is all about Infinity (∞)
> ![[time_analysis_worstIsBetter.png|500]]
>- We are only thinking what is the complexity when the input size is approaching Infinity (∞)
>- So when the actual input size in real world is small, the algorithms with worst time complexity may run fast! 

>[!tip] Use codes to find algorithm complexity analysis
> We can write out the given program, then place a counter at the core part of the program. Then we can obtain the relationship by observing the value we substituted to the input and the value of the counter

## Big-O Notation
---
- Big-O Notation doesn't represent some good approximations of the time the program takes to run. We mean the time taken by the program bounded by **some constant** $\times$ **a function** when the **input size is bigger** than a **certain constant**
- $O()$ represents the upper bound
- $\Theta()$ represents the space in between upper bound and lower bound
- $\Omega()$ represents the lower bound 

>[!caution]- Tricky ones to evaluate tightest upper bound!
> $4n^2log(n)$
> - $O(n^2)$ is wrong because $logn(n)$ isn't a constant, $O(n^2)$ is going to be a lower bound
> - $O(n^2logn)$ is the valid tightest upper bound. The next tightest upper bound is $O(n^3)$
> 
> $2^{2n}$
> - $O(2^n)$ is wrong, because $2^{2n} = (2^n)^2$, the $2$ raises the complexity one magnitude. It isn't same as $O(2 \times 2^n)$ in which we can ignore the constant $2$
> 
> $log(n!)$
> - The answer is $O(nlogn)$, don't have the math knowledge yet to further explain :(

>[!bigbrain]- Evaluate time complexity of if/else 
> Lets $f$ be the cost of first, and $s$ be the cost of second
> 
> $$
> Cost = max(f, s) \le f + s
> $$
### Worst Space Complexity
- The [[Main Memory]] used **relative to the input size**
### Worst Time Complexity
- The time it takes **relative to the input size**






## References
---
- [SimonDev](https://www.youtube.com/watch?v=gCzOhZ_LUps)
- [Hello-algo](https://www.hello-algo.com/chapter_computational_complexity/time_complexity/)