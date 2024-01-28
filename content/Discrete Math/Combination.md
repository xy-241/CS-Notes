---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-01-28, 15:23
Last Date: 2024-01-28T16:33:15+08:00
References: 
draft: 
description: 
sr-due: 2024-01-29
sr-interval: 1
sr-ease: 230
---
## Abstract
---
- The **selection of items** from a larger set **without considering the order** of selection
- The number of combinations can be calculated using the [[#Binomial Coefficient]]

### Binomial Coefficient
#### Binomial
- **Bi** means two
- A mathematical expression or algebraic equation that consists of **two terms** connected by a **plus** or **minus** sign, general form is $(a+b)$ or $(a-b)$
#### Coefficient
- Constant [[Factor]] that multiplies a variable
- For example,  $5$ is the coefficient of $5x$



#### So what is Binomial Coefficient?
- $\binom{n}{k}$ is the **number of ways**, **disregarding order**, that $k$ objects **can be chosen** from among $n$ objects
</br>


- Also known as the number of **k-element** [[Set#Subset]] (or **k-combinations**) of a **n-element** [[Set]] 
- $\binom{2}{1} = 2$, because give a set of 2 elements $\{1,2\}$ for example, there are 2 subsets of 1 elements: $\{1\}$ and $\{2\}$ 

</br>

- $\binom{n}{k}$ gives the [[#Coefficient]] of one of the **term** of the **expansion** [[#Binomial]] $(a+b)^n$ 
- The term is expressed as $a^{n-k} \times b^{k}$
</br>

#### Binomial Coefficient Formula 1
$$
\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}
$$
- Formula 1 uses [[Recursion]]
- The idea is to fix an element `x` in the set. If `x` is included in the subset, we have to choose `k − 1` elements from `n − 1` elements, and if `x` is not included in the subset, we have to choose `k` elements from `n − 1` elements
- There are two independent paths here, so we perform [[Counting#Rule of Sum]]
- Since there is recursion involved, there is base case to terminate the recursion too. The base cases are $\binom{n}{0} = \binom{n}{n} = 1$. Because there is always **exactly one way** to construct an **empty subset** and a subset that contains **all the elements**
</br>

- Below is an implementation of formula 1 in Java
<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/422rh3h5s?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

>[!help]- Is the code editor above not showing the correct source code?
> Here is a backup, please report the issue [here](https://github.com/xy-241/CS-Notes/issues) or comment down below, so I can look into the issue. Thanks :)
>```java
> class Binom {
>   public static void main(String[] args) {
>     long startTime = System.currentTimeMillis();
>       
>     long res = binom(50,6);
>     
>     long endTime = System.currentTimeMillis();
>     long elapsedTime = endTime - startTime;
>     
>     
>     System.out.println("Elapsed time: " + elapsedTime + " milliseconds");
>     System.out.println(res);
>   }
>   
>   public static int binom(int n, int k) {
>     if (n == k) return 1; // C(n,n)
>     if (k == 0) return 1; // C(n,0)
>  
>     return binom(n-1, k) + binom(n-1, k-1);
>   }
> }
>```

#### Binomial Coefficient Formula 2
$$
\binom{n}{k} = \frac{n!}{k!(n-k)!}
$$


## References
---
- [Competitive Programmer’s Handbook](https://cses.fi/book/book.pdf)