---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-09-22, 18:32
Last Date: 2024-09-25T22:28:39+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Let $A$ be a [[Set]] and $R$ be a [[Relation]] on $A$
- $R$ is equivalence relation iff $R$ is [[#Reflexive]], [[#Symmetric]] and [[#Transitive]]

### Equivalence Class
- [[Subset]] of [[#Equivalence Relation]]
- Basically same as the **component** of a [[Set Partition]] 
- Can be represented with $[a]_{relation}$, it means the Equivalence Class contains element $a$
- $[a]_{relation}$ and $[b]_{relation}$ are the same iff $b$ is in the same equivalence class as $a$

### Lemma Rel.1
- [[Equivalence Relation]]
- Let `~` be an *[[#Equivalence Class]]* on [[Set]] $A$ and $x, y \in A$
	1. $x$ is equivalent related to $y$
	2. The equivalent class $x$ is in is same as the equivalent class $y$ is in
	3. $[x] \cap [y] \ne \emptyset$
- [here](https://youtu.be/hrumNRQwTV8?si=CJryPOO424YbsIep) is a nice proof

### Congruence Modulo 3
$$
\forall x,y \in \mathbb{Z} (xRy \leftrightarrow 3 |(x-y))
$$

- Two integers $a$ and $y$ are [[Modulo#Congruence Modulo|congruent modulo]] iff they have the **same remainder** when divided by $m$
- A [[Relation]] that is [[Equivalence Relation]], [here](https://youtu.be/-SpWfD4WsmM?si=9dYH9gRtebY-5535) is a nice proof

>[!important]
> $-2 \equiv 3$  is $1$, because $3 \text{ } mod -2$ is $-2$ but the remainder needs to be a non-negative integer. So we add $3$ to the result, and we get $1$.

>[!important]
> The [[Equivalence Relation#Equivalence Class]] of congruent modulo $m$ are called congruent classes modulo $m$.
> 
> The congruence class of an integer $x$ modulo $m$ is denoted by $[x]_{m}$. The formula is following $[x]_{m} = \{\ldots, x-2m, x-m, x, x+m, x+2m, \ldots\}$

## References
---
- [Equivalence Relation - YouTube](https://youtu.be/RexPywlCmV8?si=-mM1olxZan3dwbNM)
- [Equivalence Relation (Solved Problems) - YouTube](https://youtu.be/cJ9x3aWibhI?si=605JwWoyD1D5dINM)
- [Equivalence Relation (GATE Problems) - Set 1 - YouTube](https://www.youtube.com/watch?v=bn1uWNwuMwA)
- [Equivalence Relation (GATE Problems) - Set 2 - YouTube](https://youtu.be/fXXbM1yackI?si=dHPAkt3jTurXVun2)
- [Equivalence Relation (GATE Problem) - YouTube](https://youtu.be/4QbyMoMX4VI?si=f4SzyZ9qptJCCtbo)
- [Equivalence Classes - YouTube](https://youtu.be/TbCk79SoCYw?si=gLt5Q1IGBy0jOdIg)
- [Poset (Minimal and Maximal Elements) - YouTube](https://youtu.be/PYCO_BqWk_4?si=5T0Y-4YmstiMAlGW)
- [Equivalence Classes and Partitions - YouTube](https://youtu.be/hrumNRQwTV8?si=CJryPOO424YbsIep)
- [Equivalence Classes and Partitions (Solved Problems) - YouTube](https://youtu.be/CkAGZ69dQNk?si=A4-S973NCXquLDxG)
- [Congruence Modulo m - YouTube](https://youtu.be/-SpWfD4WsmM?si=9dYH9gRtebY-5535)
- [Poset (Least and Greatest Elements) - YouTube](https://youtu.be/MTGBBNG1g4s?si=3DNdVYlMxNovOnP6)