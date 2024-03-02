---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-07T16:41:00
Last Date: 2024-03-02T18:03:37+08:00
References: 
---
## Abstract
---
- Take in a **variable-length** text and give a **fixed-length** [[Hash Digest]]
- We want a hash function that calculates Hash to be **certain** - always gives the same output given the same input, and **efficient** - takes as little computation as possible


>[!caution] Key must be Immutable
> If the key changes, then its **hash value will change**, and we will lose the mapping between the key & the bucket index
> 
> Objects created on [[Address Space#Heap Segment]] can be key even if we can manipulate the elements inside the object. This is because we use its [[Memory Address]] to generate the Hash, instead of the elements inside the object

> [!note]- Uses modular arithmetic to calculate bucket index
> We should use [[Prime Number (质数)]] to calculate bucket index, this can greatly reduce [[Hash Collision]] when there is some kind pattern in the give input like the input is a multiple of 3


>[!info]- Hash function in programming languages
> Refer to [hello-algo](https://www.hello-algo.com/chapter_hashing/hash_algorithm/#634)

## Desired Properties 
---
### Avalanche effect (雪崩效应)
- If an **input is changed slightly**, the **output changes significantly**

### Collision resistance (抗碰撞性)
- It is hard to find two inputs that hash to the same output