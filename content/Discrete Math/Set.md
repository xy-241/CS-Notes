---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-12-18, 10:33
Last Date: 2023-12-20T10:36:56+08:00
References: 
---
## Abstract
---
- A *unordered* collection of [[#Object]]
- *Order* and *duplicates* don't matter
$$
\{9, 8, 7\} = {7, 9, 8} = {7, 8, 7, 9, 9, 7, 7}
$$




## Notations
---
### Set-Roster Notation
- A [[Discrete Math/Set|Set]] may be specified by writing all of its [[#Object]] between braces 
- Symbol `...` is called ellipsis and read "and so forth"
$$
\{1, 2, 3\}
$$
$$
\{1, 2, 3, \ldots, 100\}
$$
$$
\{1,2,3, \ldots\}
$$
### Set-Builder Notation
$$
\{x \in U : P(x)\}
$$
$$
\{x \in U | P(x)\}
$$
- The set of all `x` in `U` such that `P(x)`` is true

### Replacement Notation
$$
\{t(x) : x \in A\}
$$
$$
\{t(x) | x \in A\}
$$
- For elements x in `A`, we apply the function `t(x)`
## Properties
---
### Membership of a Set
$$
\in, \not\in
$$
$$
b \in {a, b, c}
$$

### Cardinality of a Set
$$
|\{a, b, c\}| = 3
$$
- The size of the [[Discrete Math/Set|Set]]



## Terminologies
---
### Object
- Members or elements of [[Discrete Math/Set|Set]]
- Example: `1`, `2`, `3` are objects in the set of [[Integer (整数)]]

### Subset
$$
A \subseteq B
$$
iff
$$
\forall x (x \in A \land x \in B)
$$
### Superset
$$
B \supseteq A
$$
- `B` is the supper `A`


### Proper Subset
$$
A \subseteq B
$$
iff
$$
(A \subseteq B) \land (A \ne B)
$$