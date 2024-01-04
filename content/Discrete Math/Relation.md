---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-01-01, 13:46
Last Date: 2024-01-03T23:44:26+08:00
References: 
draft: 
---
## Abstract
---
- Basically a [[Set#Subset]] of [[Set#Cartesian Product]] filtered by some conditions which define the relation among the elements from the given [[Set]]
- Commonly used in [[Database]], the columns are the different sets, the Cartesian Product of the columns are all the potential relation. Each row is a actual [[Set#Order n-tuples]] inside the relation

## Important Definition
---
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

## Inversion of Relation
---
- Basically reverse the order of elements of the [[Set#Order n-tuples]]
$$
R^{-1} = \{(y,x) \in B \times A : (x,y) \in R\}
$$

## Terminologies
---
### Arrow Diagram 
- Visualize  [[Relation]]