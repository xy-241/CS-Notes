---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-10-08T20:10:00
Last Date: 2024-03-05T10:40:09+08:00
References: 
---
## Abstract
---
- A collection of elements of the same [[Datatype]]
- [[Data Structure#Linear]] and elements stored in [[Data Structure#Continuous Memory]], the next node is obtained by adding a **constant value** to the [[Memory Address]] of current node
- Can be used to implement [[Hash Map]] when keys are fixed
- We can't delete elements in arrays, we can only overwrite
- [Leetcode questions](https://github.com/youngyangyang04/leetcode-master#%E6%95%B0%E7%BB%84)

>[!bigbrain] Fixed Size
> If we want to expand, we have to create another bigger array & **copy all the elements** to the new array which is very time consuming 


## Complexity 
---
### Time
- O(n) to search for a value
- O(1) to access any of the elements
	- Indexing formula: ```elementAddr = firtstElementAddr + elementLength * elementIndex```
	- ``elementIndex`` is 0 when we try to access the first element
- O(1) to Insert/Delete at the 2 ends
>[!caution] O(n) to Insert/Delete in the **middle**
>- For insert, we have to move all the elements next to the new element one step to right
>- For delete, we have move all element next to the deleted element one step to left
>- However, it is Θ(1), Theta(1) to insert/delete

>[!info] Performance comparison with [[Linked List]] when going through all elements
>- Array is much faster if there is [[CPU Cache]], otherwise it will be slightly slower (Because Array has to calculate the address of the next element, while [[Linked List]] is already calculated)
>- Array faster with CPU Cache is because it is stored in a [[Data Structure#Continuous Memory]] manner, and can take advantage of [[CPU Cache#Cache Locality]]






## Terminologies 
---
### Contiguous Segment
- A continuous range of [[Array]]