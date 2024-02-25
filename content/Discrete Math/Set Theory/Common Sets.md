---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-02-24, 15:33
Last Date: 2024-02-25T14:32:54+08:00
References: 
draft: 
description: 
---
### Subset
$$
A \subseteq B \leftrightarrow \forall x (x \in A \land x \in B)
$$

### Proper Subset
$$
A \subsetneq B \leftrightarrow (A \subseteq B) \land (A \ne B)
$$

### Superset
$$
B \supseteq A
$$
- $A$ is a [[#Subset]] of $B$

### Empty Set
- A [[Set|Set]] that contains $0$ element
- Represented with $\emptyset$ or $\{\}$
- $\emptyset \not\in \{\}$, but  $\emptyset \subseteq \{\}$ and $\emptyset \in \{\emptyset\}$, where $\{\emptyset\}$ contains 1 element

>[!caution] Not a Null Set

#### Theorem 6.2.4
- An [[#Empty Set]] is a s [[#Subset]] of every [[Set|Set]]
</br>

- Assume $A$ is all the possible sets, $\emptyset \subseteq A$
- Can be proved using [[Universal Statement#Vacuous Truth of Universal]]

### Singleton
- A [[Set|Set]] with exactly one element




### Mutually Disjoin Subset
- Also known as **Pairwise Disjoint** or **Non-overlapping***
- Refer to [[#Partition]], the elements inside $\{A_1, A_2, A_3, A_4\}$ partition are **Mutually Disjoin**
- $A$ is called **Union of Mutually Disjoint Subsets**
- The collection of sets $\{A_1, A_2, A_3, A_4\}$ is said to be a partition of $A$ 

#### Disjoin Set
$$
A \cap B = \emptyset
$$
- Given 2 [[Set|Set]], both don't have any elements in common

### Partition
![[union_of_mutually_disjoint_subsets.png|300]]
- A partition of [[Set]] $A$ is a finite or infinite collection of not empty, [[#Mutually Disjoin Subset]] that can be chained with [[OR]] to form $A$
</br>


$$
\forall x \in A, \exists ! S \in \zeta (x\in S)
$$

- $S$ is one of the mutually disjoin subset, also known as **component of the partition**
- $\zeta$ is the partition
- So basically each $S$ isn't empty, and its elements are not in other mutually disjoin subset

>[!caution]- Subset can contain duplicate elements
>Given a set $A =\{a,b,c,d,e,f\}$ , 
>
>$\{\{a\},\{b,f,b\},\{c,e,d,e\}\}$ is a valid partition, because it covers all the elements inside set $A$


#### Theorem 8.3.1
- [[Relation]] **induced** by [[#Partition]]
- Two elements are related if and only if they belong to the [[#Mutually Disjoin Subset]] in the partition. This connection created by the partition is called the **relation induced by the partition**
</br>

- Let $A$ be a [[Set]] with a Partition
- Let $R$ be the relation induced by the partition
- Then $R$ is [[Relation#Reflexive]], [[Relation#Symmetric]] and [[Relation#Transitive]]
</br>

>[!example]-
> Imagine dividing students in a class into groups based on their favourite sport. The relation induced by this partition would tell us which students share the same sports preference

### Power Set
- The power set of [[Set|Set]] $A$ is all the possible [[#Subset]] of $A$
- Given $A = \{x, y\}$,  $\mathcal{P}(A) = \{\emptyset, \{x\}, \{y\}, \{x,y\}\}$
#### Theorem 6.3.1
- The cardinality of [[#Superset]] of finite set is $2^{cardinality~of ~the~finite~set}$
