---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-01-01, 13:46
Last Date: 2024-01-14T14:23:52+08:00
References: 
draft: 
---
## Abstract
---
- Basically a [[Set#Subset]] of [[Set#Cartesian Product]] filtered by some conditions which define the relation among the elements from the given [[Set]]
- Commonly used in [[Database]], the columns are the different sets, the Cartesian Product of the columns are all the potential relation. Each row is a actual [[Set#Order n-tuples]] inside the relation



## Binary Relation
---
- Let $x \in A, y \in B$, we say $x~R~y \leftrightarrow (x,y) \in R$
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
- $x \in A$ and $z \in C$ are $S\circ R$ related
	1. If there is a 'path' from `x` to `z`, there must have a path from ($x$ to $y$ and $y$ to $z$ )
	2. If there is a path from ($x$ to $y$  and $y$ to $z$), there must a path from $x$ to $z$

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

### Equivalence Relation
- Let $A$ be a [[Set]] and $R$ be a [[Relation]] on $A$
- $R$ is equivalence relation iff $R$ is [[#Reflexive]], [[#Symmetric]] and [[#Transitive]]

### Equivalence Class
- Basically same as the *component* of a [[Set#Partition]] or elements of [[#Equivalence Relation]]
- Can be represented with $[a]_{relation}$, it means the Equivalence Class contains element $a$
- $[a]_{relation}$ and $[b]_{relation}$ are the same iff $b$ is in the same equivalence class as $a$

## Theorem
---
### Lemma Rel.1
- [[#Equivalence Relation]]
- Let `~` be an *[[#Equivalence Class]]* on [[Set]] $A$ and $x, y \in A$
	1. $x$ is equivalent related to $y$
	2. The equivalent class $x$ is in is same as the equivalent class $y$ is in
	3. $[x] \cap [y] \ne \emptyset$

### Theorem 8.3.4
- The [[Set#Partition]] induced by [[#Equivalence Relation]]
- If $R$ is equivalence relation on [[Set]] $A$, then the distinct [[#Equivalence Class]] form a partition of $A$
## Terminologies
---
### Arrow Diagram 
- Visualize  [[Relation]]
- Usually used when there is more than one [[Set]] involve in the relation


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

### Congruence Modulo 3
- [[Modulo#Congruence Modulo]] 3 means the [[Integer (整数)]] is divisible by 3
$$
\forall x,y \in \mathbb{Z} (xRy \leftrightarrow 3 |(x-y))
$$
- A [[Relation]] that is [[#Reflexive]] [[#Symmetric]] & [[#Transitive]]

### Transitive Closure of Relation
- The [[Relation]] obtained by adding the least number of [[Set#Ordered Pair]] to ensure [[#Transitive]]
- Represented with $R^{t}$
- Following 3 properties:
	1. $R^{t}$ is transitive
	2. $R \subseteq R^{t}$
	3. $R^{t} \subseteq S$, where $S$ is any other transitive relation that contains $R$
	