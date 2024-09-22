---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
  - calculus
Creation Date: 2024-01-01, 13:46
Last Date: 2024-09-07T01:17:35+08:00
References: 
draft: 
---
## Abstract
---
- Basically a [[Subset]] of [[Cartesian Product]] or [[Ordered Pair#Order n-tuples]] filtered by some conditions which define the relation among the elements from the given [[Set]]

>[!example] Real-world Implication 
> Commonly used in [[Database]], the columns are the different sets, the Cartesian Product of the columns are all the potential relation aka all the rows that can be stored inside the database. Each row is a actual [[Ordered Pair#Order n-tuples]] inside the relation


### Domain
- Basically the [[Set]] of elements of the left hand Set that is involved in the [[Relation]]
$$
\{a \in A : aRb \space for \space some \space b \in B\}
$$

### Co-domain
- The whole [[Set]] at the right hand side

### Range
- Basically the [[Set]] of elements of the right hand set that is involved in the [[Relation]]
$$
\{b \in B : aRb \space for \space some \space a\in A\}
$$


### Binary Relation
- Let $x \in A, y \in B$, we say $x~R~y \leftrightarrow (x,y) \in R$

### N-ary Relation 
- A [[Relation]] involving 2 [[Set]] is called **binary relation**, also known as 2-ary
- Ternary is 3-ary
- Quaternary is 4-ary

### Inversion of Relation
- Basically reverse the order of elements of the [[Ordered Pair#Order n-tuples]]
$$
R^{-1} = \{(y,x) \in B \times A : (x,y) \in R\}
$$


### Arrow Diagram 
- Visualize  [[Relation]]
- Usually used when there is more than one [[Set]] involve in the relation


## Theorem
---


### Theorem 8.3.4
- The [[Set Partition]] induced by [[Equivalence Relation]]
- If $R$ is equivalence relation on [[Set]] $A$, then the distinct [[Equivalence Relation#Equivalence Class]] form a partition of $A$



## Terminologies
---
### Congruence Modulo 3
- [[Modulo#Congruence Modulo]] 3 means the [[Integer (整数)]] is divisible by 3
$$
\forall x,y \in \mathbb{Z} (xRy \leftrightarrow 3 |(x-y))
$$
- A [[Relation]] that is [[#Reflexive]] [[#Symmetric]] & [[#Transitive]]

### Transitive Closure of Relation
- The [[Relation]] obtained by adding the least number of [[Ordered Pair]] to ensure [[#Transitive]]
- Represented with $R^{t}$
- Following 3 properties:
	1. $R^{t}$ is transitive
	2. $R \subseteq R^{t}$
	3. $R^{t} \subseteq S$, where $S$ is any other transitive relation that contains $R$
	