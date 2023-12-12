---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-28T13:12:00
Last Date: 2023-12-12T10:54:18+08:00
References: 
---
## Abstract
- Make use of [[Hash Function]] to convert a key into an index which points to a [[#Bucket]]
- Decide if a key is inside the collection quickly
- We are using space in exchange for better performance 
- [[Hash Set]] is another variant
![[hash_map.png]]
- [LeetCode Questions](https://github.com/youngyangyang04/leetcode-master#%E5%93%88%E5%B8%8C%E8%A1%A8)

>[!caution] Since input space is much bigger than the output space, it is very likely we will have [[Hash Collision]]
>For example, all the possible keys are all the integers, the output space is just the total number of buckets inside the underlying [[Array]]



## Complexity
### Time
- O(1) to Insert
- O(1) to Delete
- O(1) to Search for a value - where the value we want to search is the key

## Tips
### Use Array to save space
- When keys are fixed & manageable, we can use the key as the [[Array]] index 
- This will give us constant space, avoid the extra computation used by [[Hash Function]]

### 3 ways to iterate 
>1. Key-value pairs
>	```java
>	for (Map.Entry<Integer, String> kv: map.entrySet()) {
>		System.out.println(kv.getKey() + " -> " + kv.getValue());
>	}
>	```
>2. Key
>	```java
>	for (int key: map.keySet()) {
>		System.out.println(key);
>	}
>	```
>1. Value
>	```java
>	for (String val: map.values()) {
>		System.out.println(val);
>	}
>	```

## Terminologies 
### Bucket
- A *memory space* in an [[Array]] that can be used to hold a value
