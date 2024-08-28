---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-02-16, 10:36
Last Date: 2024-02-17T16:21:41+08:00
References: 
draft: 
description: 
---
## Abstract
---
- [[Rule of Inference (推理规则)]] with [[Quantifier]]

### Universal Modus Ponens
- [[Mathematical Argument#Premise|Premise]]: For all x, if x makes P(x) true, then x makes Q(x) true
- [[Mathematical Argument#Premise|Premise]]: a is an element of x, a makes P(x) true
- [[Mathematical Argument#Conclusion|Conclusion]]: a makes Q(x) true
### Universal Modus Tollens
- [[Mathematical Argument#Premise|Premise]]: If x makes P(x) true, then x makes Q(x) true
- [[Mathematical Argument#Premise|Premise]]: a doesn't make Q(x) true
### Universal Transitivity


### Existential Instantiation
$$
\exists x \in D, P(x)
$$
$$
\therefore P(a) \space for \space some \space a \in D
$$

### Universal Instantiation
- If some property is true of **everything in the set**, then it is true of **any particular thing in the set**
- Core tool for **deductive reasoning**
$$
\forall x \in D, P(x)
$$
$$
\therefore a \in D \rightarrow P(a) 
$$
