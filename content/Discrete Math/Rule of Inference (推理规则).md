---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-10-23T08:54:00
Last Date: 2023-12-11T21:43:16+08:00
References: 
---
## Abstract
---
- A form of [[Mathematical Argument]] that is guaranteed to be [[Mathematical Argument#Valid|Valid]] if all its [[Mathematical Argument#Premise]] are true
- Tools that enable [[Deductive Reasoning (演繹推理)]]


## Basics
---
### Modus Ponens
### Modus Tollens
- Denying the consequent
### Generalization
#### Case 1
- [[Mathematical Argument#Premise|Premise]]: `p`
- [[Mathematical Argument#Conclusion|Conclusion]]: `p v q`
#### Case 2
- [[Mathematical Argument#Premise|Premise]]: `q`
- [[Mathematical Argument#Conclusion|Conclusion]]: `p v q`
### Specilisation 
- Allow us to discard some information to focus on things that we are interested
#### Case 1
- [[Mathematical Argument#Premise|Premise]]: `p AND q` 
- [[Mathematical Argument#Conclusion|Conclusion]]: `p`
#### Case 2
- [[Mathematical Argument#Premise|Premise]]: `p AND q`
- [[Mathematical Argument#Conclusion|Conclusion]]: `q`
### Elimination
#### Case 1
- [[Mathematical Argument#Premise|Premise]]: `p v q`, `~q`
- [[Mathematical Argument#Conclusion|Conclusion]]: `p`
#### Case 2
- [[Mathematical Argument#Premise|Premise]]: `p v q`, `~p`
- [[Mathematical Argument#Conclusion|Conclusion]]: `q`
### Transitivity
- [[Mathematical Argument#Premise|Premise]]: `p -> q`, `q -> r`
- [[Mathematical Argument#Conclusion|Conclusion]]: `p -> r`
### Division into Cases
- [[Mathematical Argument#Premise|Premise]]: `p v q`, `p -> r`, `q -> r`
- [[Mathematical Argument#Conclusion|Conclusion]]: `r`
- The above only 2 cases, we can have more than 2 cases
### Contradiction Rule
- [[Mathematical Argument#Premise|Premise]]: `~p -> false`
- [[Mathematical Argument#Conclusion|Conclusion]]: `p`
- The core of [[Mathematical Proof#Proof by Contradiction (反证法)]]
- If a *assumption* leads to a *contradiction*, then that *assumption* must be false

## With [[Predicate#Quantifiers]]
---
### Universal Modus Ponens
- [[Mathematical Argument#Premise|Premise]]: For all x, if x makes P(x) true, then x makes Q(x) true
- [[Mathematical Argument#Premise|Premise]]: a is an element of x, a makes P(x) true
- [[Mathematical Argument#Conclusion|Conclusion]]: a makes Q(x) true
### Universal Modus Tollens
- [[Mathematical Argument#Premise|Premise]]: If x makes P(x) true, then x makes Q(x) true
- [[Mathematical Argument#Premise|Premise]]: a doesn't make Q(x) true
### Universal Transitivity