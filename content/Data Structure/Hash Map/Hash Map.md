---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - java
Creation Date: 2023-09-28T13:12:00
Last Date: 2024-03-03T15:00:53+08:00
References: 
---
## Abstract
---
![[hash_map.png|500]]
- Make use of [[Hash Function]] to convert a key into an index which points to a [[#Bucket]]. To avoid [[Hash Collision]], we want the hash function to evenly distribute the outputs

>[!bigbrain] Unique Point
> Hash map allows us to allocate any data inside in $O(1)$ time, with a higher space cost

>[!caution] Risk of Hash Collision
> When input space is much bigger than the output space, it is very likely we will have Hash Collision
> 
> For example, when all the possible keys are all the integers, the output space is just the total number of buckets inside the underlying [[Array]]


>[!tip] Use Array to save space & time
> When keys are fixed & manageable, we can use the Array index as keys. This will give us constant space and avoid the extra computation used by Hash Function

>[!info]
> - [[Hash Set]] is another variant
> - [LeetCode Questions](https://github.com/youngyangyang04/leetcode-master#%E5%93%88%E5%B8%8C%E8%A1%A8)

### Time Complexity
- O(1) to Insert
- O(1) to Delete
- O(1) to Search for a value - where the value we want to search is the key



## 3 ways to iterate 
---
**1. Key-value pairs**

```java
for (Map.Entry<Integer, String> kv: map.entrySet()) {
	System.out.println(kv.getKey() + " -> " + kv.getValue());
}
```

**2. Key**
```java
for (int key: map.keySet()) {
	System.out.println(key);
}
```

**3. Value**
```java
for (String val: map.values()) {
	System.out.println(val);
}
```

## Terminologies 
---
### Bucket
- A **memory space** for the output space of [[Hash Map]] that can be used to hold a value