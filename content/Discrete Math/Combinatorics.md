---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-01-20, 15:49
Last Date: 2024-01-27T19:05:54+08:00
References: 
draft: 
description: 
sr-due: 2024-01-28
sr-interval: 1
sr-ease: 210
---
## Abstract
---
- Deals with [[Counting]], [[Permutation]] and [[Combination]] of objects etc
- "How many ways can a certain event occur?" or "How many arrangements are possible with a given set of elements?"



### Binomial Coefficient
#### Binomial
- **Bi** means two
- A mathematical expression or algebraic equation that consists of **two terms** connected by a **plus** or **minus** sign, general form is $(a+b)$ or $(a-b)$
#### Coefficient
- Constant [[Factor]] that multiplies a variable
- For example,  $5$ is the coefficient of $5x$

$$
\binom{n}{k} = \frac{n!}{k!(n-k)!}
$$


- $\binom{n}{k}$ is the **number of ways**, **disregarding order**, that $k$ objects **can be chosen** from among $n$ objects
</br>


- Also known as the number of **k-element** [[Set#Subset]] (or **k-combinations**) of a **n-element** [[Set]] 
- $\binom{2}{1} = 2$, because give a set of 2 elements $\{1,2\}$ for example, there are 2 subsets of 1 elements: $\{1\}$ and $\{2\}$ 

</br>

- $\binom{n}{k}$ gives the [[#Coefficient]] of one of the **term** of the **expansion** [[#Binomial]] $(a+b)^n$ 
- The term is expressed as $a^{n-k} \times b^{k}$
</br>

#### Formula 1
$$
\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}
$$
```java
class Binom {
    public static void main(String[] args) {
        System.out.println(binom(5,3));
    }
    
    public static int binom(int n, int k) {
        if (n == k) return 1; // C(n,n)
        if (k == 0) return 1; // C(n,0)
	
        return binom(n-1, k) + binom(n-1, k-1);
    }
}
```
