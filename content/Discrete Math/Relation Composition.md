---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-09-07, 00:57
Last Date: 2024-09-07T00:58:03+08:00
References: 
draft: 
description: 
---
## Abstract
---
- The composite of 2 [[Relation]] - `R` and `S`
- Given [[Set]] `A`, `B`, `C`, $R \subseteq A \times B$ and $S \subseteq B \times C$
$$
\forall x \in A, \forall z \in C (x S \circ R z \leftrightarrow (\exists y \in B (xRy \cap ySz)))
$$
- For all $a$ in $A$ and all $z$ in $C$,  the below 2 conditions must be fulfilled in order to have composition of relation $S\circ R$
	1. If there is a 'path' from $x$ to $z$, there must have a path from $x$ to $y$ AND $y$ to $z$ , the $S\circ R \rightarrow (\exists y \in B (xRy \cap ySz))$ part
	2. If there is a 'path' from $x$ to $y$  and $y$ to $z$, there must has a path from $x$ to $z$, the $S\circ R \leftarrow (\exists y \in B (xRy \cap ySz))$ part

### Composition is Associative
- Let $A, B, C, D$ be [[Set]]
- The we have 3 [[Relation]]: 
	- $R \subseteq A \times B$
	- $S \subseteq B \times C$
	- $T\subseteq C \times D$

$$
T \circ (S\circ R) = (T\circ S) \circ R = T \circ S \circ R
$$
### Inverse of Composition
- Let $A, B, C$ be [[Set]]
- The we have 3 [[Relation]]: 
	- $R \subseteq A \times B$
	- $S \subseteq B \times C$

$$
(S \circ R)^{-1} = R^{-1} \circ S^{-1}
$$
