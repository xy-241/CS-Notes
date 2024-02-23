---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-10-20T15:42:00
Last Date: 2024-02-23T10:56:39+08:00
References: 
sr-due: 2024-03-09
sr-interval: 15
sr-ease: 290
---
## Abstract
---
- [[Mathematical Statement#Compound Statement]] in the form $P \rightarrow Q$
- [[#Vacuously True]] when the [[#Hypothesis]] $P$ is $0$ aka false
- [[Propositional Logic#Logical Equivalence]] to [[#Contrapositive (逆否命题)]] and $\neg P \lor Q$ 
	
| $P$   | $Q$   | $P \rightarrow Q$ | $\neg P \lor Q$ |
| --- | --- | ------ | ------- |
| 0   | 0   | 1      |     1    |
| 0   | 1   | 1      |      1   |
| 1   | 0   | 0      |       0  |
| 1   | 1   | 1      |      1   |

### Hypothesis
- Also known as **Antecedent**
- The part after `if`
### Conclusion
- Also known as **Consequent**
- The part after `then`

### Bi-conditional
- Represented with $\leftrightarrow$
- $P \leftrightarrow Q$ means $P$ is true `if AND only if` $Q$

### Sufficient Condition
- Given $P \rightarrow Q$
- $P$ is a a **sufficient condition** for $Q$
- If $P$ is true, $Q$ is definitely true
### Necessary Condition
- Given $P \rightarrow Q$
- $Q$ is a **necessary condition** for $P$
- $Q$ **must be true** in order for $P$ to be claimed true

### Vacuously True
- **True by default** 
- When the [[#Hypothesis]] is false, then statement as a whole is said to be true regardless of whether the [[#Conclusion]] is true of false

### Implication Law
$$
P \rightarrow Q \equiv \neg P \lor Q
$$
- Convert $\rightarrow$ to $\cup$

>[!tip] Mathematical Proof
> Useful when we need to perform [[Mathematical Proof#Proof by Contradiction (反证法)]] on [[Conditional Statement]]




## 3 Variants
---
### Converse (相反)
$$
Q \rightarrow P
$$

| $P$ | $Q$ | $Q \rightarrow P$ |
| ---- | ---- | ---- |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |
- [[Propositional Logic#Logical Equivalence]] to [[#Inverse (对立)]]
### Inverse (对立)
$$
\neg P \rightarrow \neg Q
$$


| $P$   | $Q$   | $\neg P$  | $\neg Q$  | $\neg P \rightarrow \neg Q$ |
| --- | --- | --- | --- | -------- |
| 0   | 0   | 1   | 1    |        1  |
| 0   | 1   | 1    | 0    |        0  |
| 1   | 0   |  0   |  1   |     1     |
| 1   | 1   |   0  |   0  |      1    |
- [[Propositional Logic#Logical Equivalence]] to [[#Converse (相反)]]
### Contrapositive (逆否命题)
$$
\neg Q \rightarrow \neg P
$$


| $Q$   | $P$   | $\neg Q$  | $\neg P$  | $\neg Q \rightarrow \neg P$ |
| --- | --- | --- | --- | -------- |
| 0   |  0   |  1   |   1  |   1       |
| 1   |   0  |   0  |    1 |    1      |
| 0   |    1 |    1 |    0 |      0    |
| 1    |    1 |    0 |    0 |    1      |
- [[Propositional Logic#Logical Equivalence]] to **Standard Conditional Statement**