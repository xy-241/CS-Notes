---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - security
Creation Date: 2023-09-07T16:41:00
Last Date: 2024-03-04T12:41:45+08:00
References: 
description: A hash function is a mathematical tool that converts variable-length text inputs into fixed-length outputs (hashes). For efficiency and security, an ideal hash function should be deterministic (consistent), computationally quick, exhibit the avalanche effect (small input changes cause large output changes), and offer strong collision resistance (minimize outputs that are the same).
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
> We should use [[Prime Number (质数)]] to calculate bucket index, this can greatly reduce [[Hash Collision]] when there is some kind of pattern in the give input like the input is a multiple of 3


>[!info]- Hash function in programming languages
> Refer to [hello-algo](https://www.hello-algo.com/chapter_hashing/hash_algorithm/#634)

## Desired Properties for Security 
---
### Avalanche effect (雪崩效应)
- If an **input is changed slightly**, the **output changes significantly**

### Collision resistance (抗碰撞性)
- It is hard to find two inputs that hash to the same output