---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
Creation Date: 2023-11-15T17:13:00
Last Date: 2024-04-26T13:58:39+08:00
References: 
---
## Abstract
---
- A collection of pre-written classes and interfaces provided by Oracle Corporation as part of the Java Development Kit (JDK)

## java.util.*
---
- Package in Java that provides a collection of [[Data Structure]] and [[Algorithm]], **not automatically imported**
### java.util.TreeSet
- [[Hash Map]] but with elements sorted, the time complexity is $O(logn)$ for insertion, deletion, search. $O(n)$ to list all elements in a sorted manner

### java.util.Arrays
- For `Arrays.sort()`, the elements inside the [[Array]] must be a type of Object. `int[]` can't, because `int` is a [[Datatype#Primitive Datatype]]

### java.util.ArrayDeque
- Doesn't support ``null`` elements, but `LinkedList` can 

## java.lang.*
---
- **Core package** in Java that is **automatically imported** into every Java program