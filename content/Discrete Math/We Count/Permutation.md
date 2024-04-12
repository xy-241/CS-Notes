---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-02-08, 10:07
Last Date: 2024-04-11T15:22:09+08:00
References: 
draft: 
description: 
aliases:
  - ../../Discrete-Math/Permutation
---
## Abstract
---
- The arrangement of objects where **order matters**
  </br>
  
- Given $n$ objects, there is a total $n!$ permutations. For example, given 3 objects $\{a,b,c\}$, the total number of permutations is $6$ -  $\{a,b,c\}$, $\{b,a,c\}$, $\{c,a,b\}$, $\{a,c,b\}$, $\{b,c,a\}$, $\{c,b,a\}$

### Permutation Inversion
- A pair of elements that are **out of order** relative to each other compared to their **natural order** in sorted permutation
- For example, given a permutation $\{3,1,2\}$, the pairs $(3,1)$ and $(3,2)$ are inversions because $3$ comes before both $1,2$

>[!info] Indicate Chaoticness
> The number of inversions in a permutation can indicate how far the permutation is from being sorted

- We can [[Sorting#Merge Sort]] to count the total inversions in a given [[Array]]. An example is given in the code editor below. The idea here is to use merge sort to count the number of inversions at each merge, leveraging the fact that at each merge, all elements in the left subarray are smaller than all elements in the right subarray
<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/429xtgctj?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>