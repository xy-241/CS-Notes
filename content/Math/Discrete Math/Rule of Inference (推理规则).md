---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-10-23T08:54:00
Last Date: 2023-12-06T01:41:31+08:00
References: 
---
## Abstract
- *Logical rule* that allows us to derive a [[Mathematical Argument#Conclusion]] from a set of [[Mathematical Argument#Premise]]
- A form of [[Mathematical Argument]] that is [[Mathematical Argument#Valid|Valid]]
- Examples rules are [[#Modus Ponens]], [[#Modus Tollens]]
- Tools that enable [[Deductive Reasoning (演繹推理)]]


## Terminologies
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