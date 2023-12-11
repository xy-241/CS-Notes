---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 
Last Date: 
References:
---
## Abstract
- Occurs when [[Hash Function]] on two different inputs produces the same output
![[hash_collision.png]]
```java
12836 % 100 = 36
20336 % 100 = 36
```

## 2 ways to handle
1. [[Hash Map Expansion]] to avoid [[Hash Collision]] totally
2. [[Open Addressing]] or [[Separate Chaining]] to live with a certain degree of [[Hash Collision]]

- [[Open Addressing]] or [[Separate Chaining]] reduces the frequency of [[Hash Map Expansion]] which increase the overall performance of [[Hash Map]]. Since [[Hash Map Expansion]] is a very expensive [[Operation]] 