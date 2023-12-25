---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-12-18, 10:33
Last Date: 2023-12-25T21:58:29+08:00
References: 
---
## Abstract
---
- A *unordered* collection of [[#Object]]
- *Order* and *duplicates* don't matter
$$
\{9, 8, 7\} = {7, 9, 8} = {7, 8, 7, 9, 9, 7, 7}
$$




## Notations
---
### Set-Roster Notation
- A [[Discrete Math/Set|Set]] may be specified by writing all of its [[#Object]] between braces 
- Symbol `...` is called ellipsis and read "and so forth"
$$
\{1, 2, 3\}
$$
$$
\{1, 2, 3, \ldots, 100\}
$$
$$
\{1,2,3, \ldots\}
$$
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
- The size of the [[Discrete Math/Set|Set]]


## Types of Sets
---
### Subset
$$
A \subseteq B \leftrightarrow \forall x (x \in A \land x \in B)
$$

### Superset
$$
B \supseteq A
$$
- `A` is a [[#Subset]] of `B`


### Proper Subset
$$
A \subsetneq B \leftrightarrow (A \subseteq B) \land (A \ne B)
$$

### Empty Set
$$
\emptyset
$$
$$
\{\}
$$
$$
\emptyset \not\in \{\}
$$
$$
\emptyset \subseteq \{\}
$$
- A [[Discrete Math/Set|Set]] that contains `0` [[#Object]]
- Itself is a [[#Object]]
>[!caution] Not a **Null Set**

### Singleton
- A [[Discrete Math/Set|Set]] with exactly one [[#Object]]

### Disjoin Set
- Given 2 [[Discrete Math/Set|Set]], both dont have any elements in common
$$
A \cap B = \emptyset
$$

### Partition of Sets are Mutually Disjoin
*Mutually Disjoin* is also known as *Pairwise Disjoint* or *Non-overlapping*

![[union_of_mutually_disjoint_subsets.png]]
- `A1`, `A2`, `A3`, `A4` are *Mutually Disjoin*
- `A` is called *Union of Mutually Disjoint Subsets*
- The collection of sets `{A1, A2, A3, A4}` is said to be a partition of `A` 


## Theorems
---
### Theorem 6.2.4
- An [[#Empty Set]] is a s [[#Subset]] of every [[Discrete Math/Set|Set]]
- Assume `A` is all the possible sets
$$
\emptyset \subseteq A
$$
- Proved using [[Mathematical Statement#Vacuous Truth of Universal]]
## Terminologies
---
### Object
- Members or elements of [[Discrete Math/Set|Set]]
- Example: `1`, `2`, `3` `{1}` are objects in the set of [[Integer (整数)]]
- It can be either a value or a set

### Set Equality
- Given [[Discrete Math/Set|Set]] `A` and `B`. The [[#Cardinality of a Set]] must be the same
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


### Cartesian Product
- Given [[Discrete Math/Set|Set]] `A` and `B`, the Cartesian product is a set of [[#Ordered Pair]]
$$
A \times B = \{(a,b) : a\in A \land b\in B\}
$$
- Thus
$$
A \times B \neq B \times A
$$
- Cartesian Product of real numbers is basically a set that contains all the possible (x,y) coordinates on the *Cartesian Plane* 



