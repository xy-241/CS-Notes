---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-12-18, 10:33
Last Date: 2024-02-24T15:43:36+08:00
References: 
aliases:
  - ../../Discrete-Math/Set
---
## Abstract
---
$$
\{9, 8, 7\} = \{7, 9, 8\} = \{7, 8, 7, 9, 9, 7, 7\}
$$
- A **unordered** collection of [[#Object]]
- **Order** and **duplicates** don't matter





## Notations
---
### Set-Roster Notation
$$
\{1, 2, 3\}
$$
$$
\{1, 2, 3, \ldots, 100\}
$$
$$
\{1,2,3, \ldots\}
$$
- A [[Set|Set]] may be specified by writing all of its [[#Object]] between braces 
- Symbol $\ldots$ is called **ellipsis** and read "and so forth"
### Set-Builder Notation
$$
\{x \in U : P(x)\}
$$
$$
\{x \in U | P(x)\}
$$
- The set of all `x` in `U` such that `P(x)` is true

### Replacement Notation
$$
\{t(x) : x \in A\}
$$
$$
\{t(x) | x \in A\}
$$
- For elements x in `A`, we apply the function `t(x)`
## Properties
---
### Membership of a Set
$$
\in, \not\in
$$
$$
b \in {a, b, c}
$$

### Cardinality of a Set
$$
|\{a, b, c\}| = 3
$$
- The size of the [[Set|Set]]


## Types of Sets
---
### Disjoin Set
- Given 2 [[Set|Set]], both don't have any elements in common
$$
A \cap B = \emptyset
$$

### Mutually Disjoin Subset
- Also known as **Pairwise Disjoint** or **Non-overlapping***
- Refer to [[#Partition]], the `A1`, `A2`, `A3`, `A4` partition are **Mutually Disjoin**
- `A` is called **Union of Mutually Disjoint Subsets**
- The collection of sets $\{A1, A2, A3, A4\}$ is said to be a partition of `A` 

### Partition
![[union_of_mutually_disjoint_subsets.png|300]]
- A partition of [[Set]] $A$ is a finite or infinite collection of not empty, [[#Mutually Disjoin Subset]] that can be chained with [[OR]] to form $A$

$$
\forall x \in A, \exists ! S \in \zeta (x\in S)
$$

- $S$ is one of the mutually disjoin subset, also known as **component of the partition**
- $\zeta$ is the partition
- So basically each $S$ isn't empty, and its elements are not in other mutually disjoin subset

>[!caution] Subset can contain duplicate elements
>Given a set $A =\{a,b,c,d,e,f\}$ , 
>
>$\{\{a\},\{b,f,b\},\{c,e,d,e\}\}$ is a valid partition


#### Theorem 8.3.1
- [[Relation]] **induced** by [[#Partition]]
- Two elements are related if and only if they belong to the [[#Mutually Disjoin Subset]] in the partition. This connection created by the partition is called the **relation induced by the partition**
</br>

- Let $A$ be a [[Set]] with a Partition
- Let $R$ be the relation induced by the partition
- Then $R$ is [[Relation#Reflexive]], [[Relation#Symmetric]] and [[Relation#Transitive]]
</br>

- For example, imagine dividing students in a class into groups based on their favourite sport. The relation induced by this partition would tell us which students share the same sports preference

### Power Set
- The power set of [[Set|Set]] $A$ is all the possible [[#Subset]] of $A$
- Given $A = \{x, y\}$,  $\mathcal{P}(A) = \{\emptyset, \{x\}, \{y\}, \{x,y\}\}$
#### Theorem 6.3.1
- The cardinality of [[#Superset]] of finite set is **2 to the power of the cardinality of the finite set***

## Theorems
---
### Theorem 6.2.1
#### Inclusion of Intersection
$$
A \cap B \subseteq A
$$
$$
A \cap B \subseteq B
$$

#### Inclusion in Union
$$
A \subseteq A \cup B
$$
$$
B \subseteq A \cup B
$$

#### Transitive Property of Subsets
$$
(A \subseteq B) \land (B \subseteq C) \rightarrow A \subseteq C
$$

### Set Identities
![[set_identities_Theorem 6.2.2.png|500]]
- Very similar to [[Propositional Logic#Logical Equivalence]]





## Terminologies
---
### Object
- Members or elements of [[Set|Set]]
- Example: `1`, `2`, `3` `{1}` are objects in the set of [[Integer (整数)]]
- It can be either a value or a set

### Set Equality
- Given [[Set|Set]] `A` and `B`. The [[#Cardinality of a Set]] must be the same
- **First way to prove:**
$$
A = B \leftrightarrow (A \subseteq B) \land (B \subseteq A)
$$
- **Second way to prove:**
$$
A = B \leftrightarrow \forall x (x \in A \leftrightarrow x \in B)
$$
### Ordered Pair
$$
(c, y)
$$
$$
(a, b) = (c, d) \leftrightarrow (a=c) \land (b=d)
$$

### Order n-tuples
- `n` denotes the number of [[Set|Set]] we are multiplying
- [[#Ordered Pair]] is order 2-tuples, because are multiplying 2 sets

### Cartesian Product
- Given [[Set|Set]] `A` and `B`, the Cartesian product is a set of [[#Ordered Pair]]
$$
A \times B = \{(a,b) : a\in A \land b\in B\}
$$
- Thus
$$
A \times B \neq B \times A
$$
- Cartesian Product of real numbers is basically a set that contains all the possible (x,y) coordinates on the *Cartesian Plane* 
- Depends on the number of set - `n`, the Cartesian product is a set of [[#Order n-tuples]]



