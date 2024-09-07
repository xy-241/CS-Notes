---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-09-07, 01:15
Last Date: 2024-09-07T01:28:35+08:00
References: 
draft: 
description: 
---
## Abstract
---
![[relation_property_common_mistakes.png|500]]

- Not properties of the elements of the [[Set]]!
### Reflexive 
$$
\forall x \in A (xRx)
$$
- Every element in the given [[Set]] must be related to itself



### Symmetric
$$
\forall x,y \in A (xRy \rightarrow yRx)
$$
- If an element is related to another element, the another element must be related to this element too



### Transitive
$$
\forall x,y,z \in A (xRy \cap yRz \rightarrow xRz)
$$
- If an element is related to another element, and that element is related to a third element. Then this must be related to the third element



### Equivalence Relation
- Let $A$ be a [[Set]] and $R$ be a [[Relation]] on $A$
- $R$ is equivalence relation iff $R$ is [[#Reflexive]], [[#Symmetric]] and [[#Transitive]]

### Equivalence Class
- Basically same as the **component** of a [[Set Partition]] or elements of [[#Equivalence Relation]]
- Can be represented with $[a]_{relation}$, it means the Equivalence Class contains element $a$
- $[a]_{relation}$ and $[b]_{relation}$ are the same iff $b$ is in the same equivalence class as $a$
