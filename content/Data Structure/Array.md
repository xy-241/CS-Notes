---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-10-08T20:10:00
Last Date: 2024-03-18T18:47:10+08:00
References: 
---
## Abstract
---
- A [[Data Structure#Linear]] collection of elements of the same [[Datatype]] that are stored in [[Data Structure#Continuous Memory]]. The next node is obtained by adding a **constant value** to the [[Memory Address]] of current node
- Can be used to implement [[Hash Map]] when keys are fixed
- [Leetcode questions](https://github.com/youngyangyang04/leetcode-master#%E6%95%B0%E7%BB%84)

>[!success] Cache Hit
> Elements of array are stored in [[Main Memory]] in a compact manner, thus making great use of [[CPU Cache#Cache Locality]]

>[!caution] Fixed Size
> If we want to expand, we have to create another bigger array & **copy all the elements** to the new array which is very time consuming 

>[!attention] Element Removal
> We can't delete elements in arrays, we can only overwrite

### Time Complexity 
>[!note]- Search
> $O(n)$ to search for a value.

>[!note]- Indexing
> It is $O(1)$  to index any elements in an array. The indexing formula is `elementAddr = firtstElementAddr + elementLength * elementIndex`, `elementIndex` is $0$ when we try to access the first element.
> 
> ![[array_indexing.png]]

>[!note]- Insert, Delete
> $O(1)$ at the 2 ends of the array
> 
> $O(n)$ in the middle of the array
> - For insert, we have to move all the elements next to the new element one step to right
> - For delete, we have move all element next to the deleted element one step to left
> 
> ![[array_delete.gif]]

>[!info]- Performance comparison with Linked List when going through all elements
> Array is much faster if there is [[CPU Cache]], otherwise it may be slightly slower. Because Array has to calculate the address of the next element, while [[Linked List]] is already calculated.
> 
> The reason why array is faster with CPU Cache is because array is stored in a [[Data Structure#Continuous Memory]] manner. Thus array is able to take advantage of [[CPU Cache#Cache Locality]]

### Contiguous Segment
- A continuous range of [[Array]]


## Dynamic Array
---
![[dyanmic_array_memory_allocation.png|500]]
- Also known as **List**
- A [[Datatype]] that contains a [[Pointer]] to the underlying [[Array]] and other metadata like the capacity of the array and the current size of the array. As shown above, the purple blocks contain the metadata of the dynamic array. The yellow blocks are the actually array that hold the elements


>[!bigbrain] Dynamic array mechanism visualisation
> ![[dyanamic_array_visual.gif]]


>[!success] Convenient
> Developers don't need to re-write battle-tested logic of re-sizeing Array etc, battery-packed with best practices.

>[!success] Secure
> With the built-in expansion mechanism and `length` metadata, we are sure new elements aren't added into [[Memory Address]] that belong to other parts of the [[Process (进程)]]. Thus, ensuring [[Memory Safety]].

>[!attention] More Resource Intense
> We can't fine tune every Array operations because the implementation details are abstracted away. We only have a limited interface to interact with it. And Dynamic array comes with metadata to support the different functionalities it offers.

>[!tip] Minimise re-sizing
> If you know how big an array you want, it is usually recommended to set it as the capacity of your dynamic array. This reduce the need of frequent **re-sizing operations** which mean fewer allocation on [[Address Space#Heap Segment]]. Thus, better performance.
## Circular Array
---
- Connect the start and end of the [[Array]] to form a loop
- With taking remainder from ``frontIndex % arrayCapacity``, we are able to implement circular array on an array. Take a look at [Visual](https://www.hello-algo.com/chapter_stack_and_queue/queue/#2) for better understanding
- Used to implement [[Queue (FIFO)#Implementation|Queue]]

>[!info] Front Index
> A variable to keep track the index for the start of the circular array.

>[!info] Rear Index
> A variable to keep track the index of the slot after the last element of the circular array, Can be obtained with `frontIndex + arraySize`.

## References
---
- [HOW ARE DYNAMIC SIZE LISTS STORED IN MEMORY? - YouTube](https://youtu.be/xFMXIgvlgcY?si=0DE9NobYKB97fFnc)