---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - java
Creation Date: 2023-11-15T17:26:00
Last Date: 2024-01-18T00:15:26+08:00
References: 
---
## Abstract
---
![[hash_collision.png|500]]
- Occurs when [[Hash Function]] on two different inputs and produces the **same output**
- In the above example $12836~\%~100$ and $20336~\%~100$ result in the same value $36$


## Hash Map Expansion 
---
- Expand the output space to avoid [[Hash Collision]] totally if expansion is big enough
- Reduce the chance of hash collision if expansion isn't big enough
</br>

![[hash_collision_expand.png|500]]
- In the above example, when $136~\%~100$ and $236~\%~100$ result in the same output $36$, we can double the output space to avoid the collision
- After expansion, $136~\%~200=136$, $236~\%~200=36$
</br>

### Load Factor
- A faction of total elements inside [[Hash Map]] and Total buckets
- Measure the severity of [[Hash Collision]]
- Triggering condition for [[#Hash Map Expansion]]

#### Java
- When **Load Factor** exceeds `0.75`, Hash Map Expansion will be triggered to expand twice the original size 

### Hash Map Expansion Cons
- However, with the change of the output space size, it requires us to re-run the [[Hash Function]] on all values to obtain the new [[Hash Map#Bucket]]
- And it is very time consuming to move all key-value pairs from old arrays to new arrays & recalculating hashes 
- Thus, we will reserve a pretty decent space to avoid frequent expanding

## Separate Chaining
---
![[separate_chaining.png|500]]
- Use each [[Hash Map#Bucket]] in the underlying output space of [[Hash Map]] to hold a [[Linked List]] node
- We put all the conflicted key-value pairs as nodes in the Linked List, we can live with a certain degree of [[Hash Collision]] and reduce the frequency of [[#Hash Map Expansion]]
- You can find a separate chaining code implementation [here](https://www.hello-algo.com/chapter_hashing/hash_collision/#621)

**Java**
- Starting from JDK 1.8, when [[Hash Map]] length reaches **64** & the **Linked List length is 8**. Linked List will be converted to [[Red Black Tree]] to improve performance

**Golang**
- Every [[Hash Map#Bucket]] has maximum 8 key-value pairs. Once exceeded, it will be linked to a overflowing bucket
- When there is too many overflowing buckets,  [[Hash Collision#Hash Map Expansion]] will be performed to ensure performance

### Mechanism
#### Search key-value pair with key
1. Obtain the index of [[Hash Map#Bucket]] by passing the key to the [[Hash Function]]
2. Obtain the starting node of the [[Linked List]] with the index
3. Iterate through the Linked List to find key-value pair node that matches with the given key

#### Add key-value pair 
1. We perform [[#Search key-value pair with key]] to ensure it is a new key-value pair we want to add
2. If unable to find, we add a new node with the key-value pair to the [[Linked List]]. Else we return *duplicated key error* 

#### Delete key-value pair
1. We perform [[#Search key-value pair with key]] to ensure the key we want to delete exists
2. Delete the key-value pair node if there is one

### Separate Chaining Cons
- More [[Main Memory]] usage
- Because each key-value pair node needs space to store a pointer to point to the next node
</br>

- Reduced search efficiently when [[Linked List]] is getting long, since searching on Linked List is linear, not constant
- We can converted the long Linked List to [[AVL(Balanced Binary Search) Tree  (平衡二叉搜索树)]] or [[Red Black Tree]] to optimise the search efficiency from `O(n)` to `O(logn)`


## Open Addressing
---
- Similar to [[#Separate Chaining]], it is an approach to live with [[Hash Collision]], so as to reduce the frequency of [[#Hash Map Expansion]]
- But unlike [[#Separate Chaining]], open addressing doesn't leverage on a [[Linked List]] to live with 
</br>

- 2 approaches - [[Linear Probing]] and [[Double Hashing]]
>[!caution] Delete key-value pair
>We need a special indicator to remove a key-value pair. If we just make it empty, the key-value pairs stored after it will be ignored when we are trying to search a key-value pair that has [[Hash Collision]] with the deleted key-value pair