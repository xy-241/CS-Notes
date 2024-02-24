---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-02-24, 15:33
Last Date: 2024-02-24T15:38:36+08:00
References: 
draft: 
description: 
---
### Subset
$$
A \subseteq B \leftrightarrow \forall x (x \in A \land x \in B)
$$

### Proper Subset
$$
A \subsetneq B \leftrightarrow (A \subseteq B) \land (A \ne B)
$$

### Superset
$$
B \supseteq A
$$
- $A$ is a [[#Subset]] of $B$

### Empty Set
- A [[Set|Set]] that contains $0$ element
- Represented with $\emptyset$ or $\{\}$
- $\emptyset \not\in \{\}$, but  $\emptyset \subseteq \{\}$ and $\emptyset \in \{\emptyset\}$, where $\{\emptyset\}$ contains 1 element

>[!caution] Not a Null Set

#### Theorem 6.2.4
- An [[#Empty Set]] is a s [[#Subset]] of every [[Set|Set]]
</br>

- Assume $A$ is all the possible sets, $\emptyset \subseteq A$
- Can be proved using [[Universal Statement#Vacuous Truth of Universal]]

### Singleton
- A [[Set|Set]] with exactly one element