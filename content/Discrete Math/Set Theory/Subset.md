---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-09-06, 16:03
Last Date: 2024-09-06T16:21:31+08:00
References: 
draft: 
description: 
---
## Abstract
---
$$
A \subseteq B \leftrightarrow \forall x (x \in A \rightarrow x \in B)
$$

### Proper Subset
$$
A \subsetneq B \leftrightarrow  (A \subseteq B) \land (A \ne B)
$$

### Superset
$$
B \supseteq A
$$
- $A$ is a [[#Subset]] of $B$

### Mutually Disjoin Subset
- Also known as **Pairwise Disjoint** or **Non-overlapping***
- Refer to [[#Partition]], the elements inside $\{A_1, A_2, A_3, A_4\}$ partition are **Mutually Disjoin**
- $A$ is called **Union of Mutually Disjoint Subsets**
- The collection of sets $\{A_1, A_2, A_3, A_4\}$ is said to be a partition of $A$ 

#### Disjoin Set
$$
A \cap B = \emptyset
$$
- Given 2 [[Set|Set]], both don't have any elements in common

### Power Set
- The power set of [[Set|Set]] $A$ is all the possible [[#Subset]] of $A$
- Given $A = \{x, y\}$,  $\mathcal{P}(A) = \{\emptyset, \{x\}, \{y\}, \{x,y\}\}$
#### Theorem 6.3.1
- The cardinality of [[#Superset]] of finite set is $2^{cardinality~of ~the~finite~set}$