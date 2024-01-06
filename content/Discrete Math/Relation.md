---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-01-01, 13:46
Last Date: 2024-01-06T13:43:28+08:00
References: 
draft: 
---
## Abstract
---
- Basically a [[Set#Subset]] of [[Set#Cartesian Product]] filtered by some conditions which define the relation among the elements from the given [[Set]]
- Commonly used in [[Database]], the columns are the different sets, the Cartesian Product of the columns are all the potential relation. Each row is a actual [[Set#Order n-tuples]] inside the relation



## Inversion of Relation
---
- Basically reverse the order of elements of the [[Set#Order n-tuples]]
$$
R^{-1} = \{(y,x) \in B \times A : (x,y) \in R\}
$$

## Composition of Relation
---
- The composite of 2 [[Relation]] - `R` and `S`
- Given [[Set]] `A`, `B`, `C`, $R \subseteq A \times B$ and $S \subseteq B \times C$
$$
\forall x \in A, \forall z \in C (x S \circ R z \leftrightarrow (\exists y \in B (xRy \cap ySz)))
$$
- $x \in A$ and $z \in C$ are $S\circ R$ related iff there is a 'path' from `x` to `z` via some intermediate element $y \in B$ in the [[#Arrow Diagram]]

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

## Relation Properties 
---
- Not properties of the elements of the [[Set]]!
### Reflexive 
- Every element in the given [[Set]] must be related to itself

$$
\forall x \in A (xRx)
$$

### Symmetric
- If an element is related to another element, the another element must be related to this element too

$$
\forall x,y \in A (xRy \rightarrow yRx)
$$

### Transitive
- If an element is related to another element, and that element is related to a third element. Then this must be related to the third element

$$
\forall x,y,z \in A (xRy \cap yRz \rightarrow xRz)
$$

## Terminologies
---
### Arrow Diagram 
- Visualize  [[Relation]]

### Relation Domain
- Basically the [[Set]] of elements of the left hand Set that is involved in the [[Relation]]
$$
\{a \in A : aRb \space for \space some \space b \in B\}
$$

### Relation Co-domain
- The whole [[Set]] at the right hand side

### Range
- Basically the [[Set]] of elements of the right hand set that is involved in the [[Relation]]
$$
\{b \in B : aRb \space for \space some \space a\in A\}
$$

### N-ary Relation 
- A [[Relation]] involving 2 [[Set]] is called *binary relation*, also known as 2-ary
- Ternary is 3-ary
- Quaternary is 4-ary
