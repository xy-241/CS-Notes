---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-02-16, 10:36
Last Date: 2024-09-05T22:54:18+08:00
References: 
draft: 
description: 
---
## Abstract
---
- [[Rule of Inference (推理规则)]] with [[Quantifier]]

### Universal Modus Ponens

|            | Case 1                             |
| ---------- | ---------------------------------- |
| Premise 1  | $\forall x(P(x) \rightarrow Q(x))$ |
| Premise 2  | $P(a)$                             |
| Conclusion | $Q(a)$                             |

### Universal Modus Tollens

|            | Case 1                             |
| ---------- | ---------------------------------- |
| Premise 1  | $\forall x(P(x) \rightarrow Q(x))$ |
| Premise 2  | $\lnot Q(a)$                       |
| Conclusion | $\lnot P(a)$                       |


### Universal Transitivity

|            | Case 1                             |
| ---------- | ---------------------------------- |
| Premise 1  | $\forall x(P(x) \rightarrow Q(x))$ |
| Premise 2  | $\forall x(Q(x) \rightarrow R(x))$ |
| Conclusion | $\forall x(P(x) \rightarrow R(x))$ |


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
