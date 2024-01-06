---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-01-01, 13:46
Last Date: 2024-01-05T16:19:42+08:00
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