---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-03-02, 16:16
Last Date: 2024-03-02T17:19:05+08:00
References: 
draft: "true"
description: 
---
## Abstract
---
- [[Data Structure]] that lets you manage a collection of [[Common Sets#Disjoin Set]] also known **Dynamic Relation** **efficiently**

>[!info] Dynamic Relation
> A Dynamic Relation is a [[Relation]] that has a different set of elements inside the relation depends on the given input. In Union Find, the operation `union(x, y)` gives the dynamic property, it combine 2 relations into one relation
> 
> And all the relations in Union Find are [[Relation#Equivalence Relation]]!

>[!abstract] 2 main operations 
> `find(x)`
> - Determines the **representative element** of the disjoin set that contains element $x$. The representative acts as the **unique identifier** for the whole disjoin set
> 
> `union(x, y)`
> - Combines the disjoint sets containing elements $x$ and $y$ into a **single disjoin set**

>[!question] What does it mean 'efficiently'?
> `find(x)`
> - Time complexity is $O(1)$ using [[#Path Compression]]
> 
> `union(x, y)`
> - Time complexity is $O(1)$ , we use `find(x)` and `find(y)` to obtain the representative element of both disjoin set in $O(1)$, then we attach the representative element of one disjoin set to the representative element of another disjoin set in $O(1)$. Thus, overall is $O(1)$

>[!success] Solve Grouping Problems 
> Union Find is able to tell us if two elements are connected by certain relationship in $O(1)$




## Optimisation Techniques
---
### Path Compression
- reduce the time complexity of Find operation to $O(1)$
- During a **Find** operation, directly link each node on the path to the root node. This flattens the trees, making subsequent **Find** operations much faster.