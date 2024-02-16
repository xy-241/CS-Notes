---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-10-23T08:54:00
Last Date: 2024-02-16T10:47:15+08:00
References: 
---
## Abstract
---
- A form of [[Mathematical Argument]] that is guaranteed to be [[Mathematical Argument#Valid|Valid]] if all its [[Mathematical Argument#Premise]] are true
- Tools that enable [[Deductive Reasoning (演繹推理)]]


### Modus Ponens
### Modus Tollens
- Denying the consequent
### Generalisation

|  | Case 1 | Case 2 |
| ---- | ---- | ---- |
| Premise | $p$ | $q$ |
| Conclusion | $p \lor q$ | $p \lor q$ |

### Specialisation 
- Allow us to discard some information to focus on things that we are interested

|  | Case 1 | Case 2 |
| ---- | ---- | ---- |
| Premise | $p \cap q$ | $p \cap q$ |
| Conclusion | $p$ | $q$ |

### Elimination

|  | Case 1 | Case 2 |
| ---- | ---- | ---- |
| Premise | $p \cup q$, $\neg q$ | $p\cup q$, $\neg p$ |
| Conclusion | $p$ | $q$ |

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
