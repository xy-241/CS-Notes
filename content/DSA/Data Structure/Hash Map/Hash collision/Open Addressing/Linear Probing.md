---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-17T20:13:22+08:00
Last Date: 2023-08-17T20:13:22+08:00
References:
---
>[!note]
>![[linear_probing.png]]
>- Trying to find the next empty bucket for the conflicted key-value pair linearly

>[!tip] [Example Implementation](https://www.hello-algo.com/chapter_hashing/hash_collision/#_1)

>[!example] Used by [[Python]]
>Uses [[Pseudorandomness]] to find the next empty bucket for conflicted key-value pair

## Mechanism 
---
> [!note] Search key-value pair with key
> 1. Obtain the [[Array]] index by passing the key to the [[Hash Function]]
> 2. If the key-value pair in the bucket doesn't match with the key, iterate through the buckets linearly until the correct key-value is found
> 3. Else, if the bucket is empty, then key-value pair isn't inside, return None

>[!note] Add key-value pair 
>1. Obtain the [[Array]] index by passing the key to the [[Hash Function]]
>2. If the bucket already has a key-value pair, then iterating linearly until a empty bucket is found, and then insert the key-value pair

>[!note] Delete key-value pair
>1. Obtain the [[Array]] index by passing the key to the [[Hash Function]]
>2. Iterating through linearly until the desired key-value pair is found
>3. Deleting the key-value pair by placing a special indicator in the bucket to denote the bucket is empty but it doesn't break the iteration flow


## Cons
---

>[!caution] Key-value pair clustering
>When the array is filled up with key-value pairs in a continuous manner. We may need to iterate through many key-value pairs, including key-value pairs that has a hash index to get/delete the desired key-value pair