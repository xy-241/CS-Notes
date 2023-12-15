---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-07T16:41:00
Last Date: 2023-12-12T10:40:58+08:00
References: 
---

## Abstract
---

- Certainty - always gives the same output given the same input
- Efficient - takes as little computation as possible
- Evenly distributed (required in [[Hash Map]]) - with more evenly distributed, the less likely [[Hash Collision]] will happen. Different from [[Collision resistance (抗碰撞性)]]
- [Hash Value of different data structures](https://www.hello-algo.com/chapter_hashing/hash_algorithm/#634)

> [!note] Uses modular arithmetic to calculate bucket index
>
> -   We can use either [[Prime Number]] or [[Composite number]] if we are sure the key is evenly distributed.
> -   Else if there is some kind of pattern like, the key is a multiple of 3, prime number can reduce [[Hash Collision]]
> -   Thus, we usually use [[Prime Number]] to take the modules, since we can't predict the distribute of the keys

## Properties
---

### Immutable Key

- Because if the key changes, then its hash value will change, and we will lose the mapping between the key & the bucket index

>[!attention] Custom Objects can be key, because we use its [[Memory Address]] to generate the hash

## Examples
---

### Python

- Insert a random [[Salt]] to prevent [[HashDos Attack]] to improve security

## Terminologies
---

### Hash Value