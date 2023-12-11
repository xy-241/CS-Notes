#dsa 
## Basics
>[!abstract] Basic Properties
>- [[Linear Data Structure]]
>- A collection of elements of the same [[data types]]
>- Elements stored in [[DSA/Data Structure/Physical Structure (Physical)/Continuous Memory|Continuous Memory]], the next node is obtained by adding a constant to the [[Memory Address]] of current node

>[!example] Use to implement
>1. [[Hash Map]] when keys are fixed

>[!example] [Use Cases](https://github.com/youngyangyang04/leetcode-master#%E6%95%B0%E7%BB%84)



## [[Abstract Data Type (ADT)]]
>[!caution] O(n) to Insert/Delete in the **middle**
>## Insert
>- We have to move all the elements next to the new element one step to right
>## Delete
>- We have move all element next to the deleted element one step to left
>
>>[!tip] Θ(1), Theta(1) to insert/delete

>[!caution] O(n) to Search for a value

>[!success] O(1) to access any of the elements
>- Indexing formula: ```elementAddr = firtstElementAddr + elementLength * elementIndex```
>- ``elementIndex`` is 0 when we try to access the first element

## Side Notes
>[!caution] Fixed size
>If we want to expand, we have to create another bigger array & copy all the elements to the new array which is very time consuming 

>[!caution] We can't delete elements in arrays, we can only overwrite

>[!tip] Performance comparison with [[Linked List]] when going through all elements
>- Array is much faster if there is [[Cache]], otherwise it will be slightly slower (Because Array has to calculate the address of the next element, while [[Linked List]] is already calculated)
>- Array faster with [[Cache]] is because it is stored in a [[Continuous Memory]] manner, and can take advantage of [[Cache Locality (Locality of Reference)]]


## Terminologies 
### Contiguous Segment
- A continuous range of [[Array]]