---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - java
  - python
Creation Date: 2023-11-15T17:26:00
Last Date: 2024-03-03T15:24:34+08:00
References: 
description: Strategies for handling hash collisions, including hash map expansion, load factor, and resolution methods like separate chaining and open addressing
---
## Abstract
---
![[hash_collision.png|500]]
- Occurs when running [[Hash Function]] on two different inputs and we obtain the **same output**
- In the above example, $12836~\%~100$ and $20336~\%~100$ result in the same value $36$
</br>

- There 3 approaches to handle - [[#Hash Map Expansion]], [[#Separate Chaining]] and [[#Open Addressing]]


## Hash Map Expansion 
---
- Expand the output space to avoid [[Hash Collision]] **totally** if expansion is big enough
- **Reduce the chance** of hash collision if expansion isn't big enough
</br>

![[hash_collision_expand.png|500]]
- In the above example, when $136~\%~100$ and $236~\%~100$ result in the same output $36$, we can double the output space to avoid the collision
- After expansion, $136~\%~200=136$, $236~\%~200=36$

>[!caution] Intense Computation Needed
> With the change of the output space size, it requires us to re-run the [[Hash Function]] on all keys to obtain the new [[Hash Map#Bucket]]
> 
> It is very time consuming to recalculate hashes and move all key-value pairs from old arrays to new arrays
> 
> So the best practice is to **reserve** a pretty decent space to **avoid frequent expanding**


### Load Factor
- A faction of total elements inside [[Hash Map]] and total buckets inside the hash map
- Measures the severity of [[Hash Collision]], acts as a triggering condition for [[#Hash Map Expansion]]

>[!example]- Java
> When **Load Factor** exceeds `0.75`, Hash Map Expansion will be triggered to **expand twice** the original size 





## Separate Chaining
---
![[separate_chaining.png|500]]
- Use each [[Hash Map#Bucket]] in the underlying output space of [[Hash Map]] to hold a [[Linked List]] node. We put all the conflicted key-value pairs as nodes in the Linked List. This allows us to live with a certain degree of [[Hash Collision]]. Thus, reducing the frequency of [[#Hash Map Expansion]]
- You can find the code implementation of separate chaining [here](https://www.hello-algo.com/chapter_hashing/hash_collision/#621)

>[!caution] More Memory Usage
> Each key-value pair node needs space to **store** a **pointer** to point to the next node

>[!caution] Linear Efficient
> Operations like searching, insertion, and deletion takes $O(n)$ time on [[Linked List]]
> 
> We can converted the long Linked List to [[AVL Tree]] or [[Red Black Tree]] to optimise the search efficiency from $O(n)$ to $O(logn)$

>[!example]- Implementation in Programming Languages
> **Java**
> - Starting from JDK 1.8, when [[Hash Map]] length reaches **64** & the **Linked List length is 8**. Linked List will be converted to [[Red Black Tree]] to improve performance
> 
> **Golang**
> - Every [[Hash Map#Bucket]] has maximum 8 key-value pairs. Once exceeded, it will be linked to a overflowing bucket
> - When there is too many overflowing buckets,  [[Hash Collision#Hash Map Expansion]] will be performed to ensure performance

**Mechanism of Common Operations**
>[!note]- Search key-value pair with key
> 1. Obtain the index of bucket by passing the key to the [[Hash Function]]
> 2. Obtain the starting node of the Linked List with the index
> 3. Iterate through the Linked List to find key-value pair node that matches with the given key

>[!note]- Add key-value pair
> 1. We perform [[#Search key-value pair with key]] to ensure it is a new key-value pair we want to add
> 2. If unable to find, we add a new node with the key-value pair to the [[Linked List]]. Else we return **duplicated key error** 

>[!note]- Delete key-value pair
> 1. We perform [[#Search key-value pair with key]] to ensure the key we want to delete exists
> 2. Delete the key-value pair node if there is one

## Open Addressing
---
- Similar to [[#Separate Chaining]], it is an approach to live with [[Hash Collision]], so as to reduce the frequency of [[#Hash Map Expansion]]
- But unlike Separate Chaining, open addressing doesn't leverage on extra data structures like [[Linked List]] to live with. There are mainly 2 approaches - [[#Linear Probing]] and [[#Double Hashing]]

>[!caution] Delete key-value pair
>We need a special indicator to remove a key-value pair. If we just make it empty, the key-value pairs stored after it will be ignored when we are trying to search a key-value pair that has [[Hash Collision]] with the deleted key-value pair. Because the key-value pair may be stored right after the deleted key-value pair


### Linear Probing
![[linear_probing.png|500]]
- The idea is to find the **next empty [[Hash Map#Bucket]]** for the conflicted key-value pair **linearly**

>[!caution] Key-value pair clustering
>When the array is filled up with key-value pairs in a continuous manner. We may need to iterate through many key-value pairs, including key-value pairs that has a hash index to get/delete the desired key-value pair

>[!example]- Implementation in Programming Language
> **Python**
> - Uses [[Pseudorandomness]] to find the next empty bucket for conflicted key-value pair

**Mechanism of Common Operations**
> [!note]- Search key-value pair with key
> 1. Obtain the [[Array]] index by passing the key to the [[Hash Function]]
> 2. If the key-value pair in the bucket doesn't match with the key, iterate through the buckets linearly until the correct key-value is found
> 3. Else, if the bucket is empty, then key-value pair isn't inside, return None

>[!note]- Add key-value pair 
>1. Obtain the Array index by passing the key to the [[Hash Function]]
>2. If the bucket already has a key-value pair, then iterating linearly until a empty bucket is found, and then insert the key-value pair

>[!note]- Delete key-value pair
>1. Obtain the Array index by passing the key to the [[Hash Function]]
>2. Iterating through linearly until the desired key-value pair is found
>3. Deleting the key-value pair by placing a **special indicator** in the bucket to denote the bucket is empty and it shouldn't break the iteration flow
### Double Hashing
- The idea here to find the **next empty bucket** for the conflicted key-value pair by executing the [[Hash Function]] **multiple times**

>[!success] More Distributed
> Not easy to have key-value pair clustering

>[!caution] More Computational Demanding
> More Hash Function performed means more computation is required

**Mechanism of Common Operations**
> [!note]- Search key-value pair with key
> 1. Obtain the [[Array]] index by passing the key to the [[Hash Function]]
> 2. If the desired key-value pair isn't inside the bucket, perform the Hash Function again until we find the correct key-value pair
> 3. If empty bucket is countered, then the desired key-value isn't stored in the [[Hash Map]]

>[!note]- Add key-value pair 
>1. Obtain the Array index by passing the key to the Hash Function
>2. If the bucket already has a key-value pair, then keep performing Hash Function until an empty bucket is found, then insert the key-value pair




