---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-12-18, 10:33
Last Date: 2024-02-25T14:38:32+08:00
References: 
aliases:
  - ../../Discrete-Math/Set
---
## Abstract
---
$$
\{9, 8, 7\} = \{7, 9, 8\} = \{7, 8, 7, 9, 9, 7, 7\}
$$
- A **unordered** collection of elements
- **Order** and **duplicates** don't matter

>[!info]- Set Elements
> - Example: `1`, `2`, `3` `{1}` are objects in the set of [[Integer (整数)]]
> - It can be either a **value** or a **set**




## Notations
---
### Set-Roster Notation
$$
\{1, 2, 3\}
$$
$$
\{1, 2, 3, \ldots, 100\}
$$
$$
\{1,2,3, \ldots\}
$$
- A [[Set|Set]] may be specified by writing all of its elements between braces 
- Symbol $\ldots$ is called **ellipsis** and read "and so forth"
### Set-Builder Notation
$$
\{x \in U : P(x)\}
$$
$$
\{x \in U | P(x)\}
$$
- The set of all `x` in `U` such that `P(x)` is true

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
- The size of the [[Set|Set]]



## Theorems
---
### Theorem 6.2.1
#### Inclusion of Intersection
$$
A \cap B \subseteq A
$$
$$
A \cap B \subseteq B
$$

#### Inclusion in Union
$$
A \subseteq A \cup B
$$
$$
B \subseteq A \cup B
$$

#### Transitive Property of Subsets
$$
(A \subseteq B) \land (B \subseteq C) \rightarrow A \subseteq C
$$

### Set Identities
![[set_identities_Theorem 6.2.2.png|500]]
- Very similar to [[Propositional Logic#Logical Equivalence]]





## Terminologies
---


### Set Equality
- Given [[Set|Set]] `A` and `B`. The [[#Cardinality of a Set]] must be the same
- **First way to prove:**
$$
A = B \leftrightarrow (A \subseteq B) \land (B \subseteq A)
$$
- **Second way to prove:**
$$
A = B \leftrightarrow \forall x (x \in A \leftrightarrow x \in B)
$$
### Ordered Pair
$$
(c, y)
$$
$$
(a, b) = (c, d) \leftrightarrow (a=c) \land (b=d)
$$

### Order n-tuples
- `n` denotes the number of [[Set|Set]] we are multiplying
- [[#Ordered Pair]] is order 2-tuples, because are multiplying 2 sets

### Cartesian Product
- Given [[Set|Set]] `A` and `B`, the Cartesian product is a set of [[#Ordered Pair]]
$$
A \times B = \{(a,b) : a\in A \land b\in B\}
$$
- Thus
$$
A \times B \neq B \times A
$$
- Cartesian Product of real numbers is basically a set that contains all the possible (x,y) coordinates on the *Cartesian Plane* 
- Depends on the number of set - `n`, the Cartesian product is a set of [[#Order n-tuples]]



