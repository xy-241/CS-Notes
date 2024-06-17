---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - js
Creation Date: 2023-10-08T20:10:00
Last Date: 2024-06-17T11:13:34+08:00
References: 
---
## Abstract
---
- A [[Data Structure#Linear]] collection of elements of the same [[Datatype]] that are stored in [[Data Structure#Continuous Memory]]. The next node is obtained by adding a **constant value** to the [[Memory Address]] of current node


>[!success] Cache Hit
> Elements of array are stored in [[Main Memory]] in a **compact manner**, thus making great use of [[CPU Cache#Cache Locality]].

>[!important] 
> Array has a **fixed size**. If we want to **expand**, we have to **create another bigger array** & **copy all the elements** to the new array which is very **time consuming**.
> 
> It takes $O(n)$ to **search for a value**.

>[!tip]
> Can be used to implement [[Hash Map]] when keys are fixed.
### Element Removal in Array

![[array_delete.gif]]

- [[Array]] has a **fixed size**, we can delete elements from them. However, the process is **NOT** as straightforward as simply **removing** the element and having the **array automatically adjust**. Here's a breakdown of the options:
- **Overwriting (Not true deletion):** The simplest way is to overwrite the element to be **deleted** with a **placeholder value** (e.g., null or a default value). This doesn't change the array's size, but effectively marks the element as removed
- **Shifting elements:** To truly **delete** an **element** and **maintain** the **order of the array**, you need to **shift** all **elements after** the **deleted one** to the **left by one position**. This can be **inefficient for large arrays**. This is illustrated with the animation above
- **Creating a new array:** A more flexible approach is to create a new array that excludes the deleted element. This **avoids** the **shifting process** but requires **additional memory allocation**

>[!question] What is the time complexity of deletion in array?
> For true deletion (**removing the element** and **shifting others** to **fill the gap**), it takes $O(1)$ time to **delete the last element**. However, deleting an element from the **front of the array** or the **middle of the array** takes $O(n)$ time.
> 
> This time complexity is same as the **deletion operation**.

>[!tip] Efficient array element deletion trick
> ![[replace_swap_array_element_removal.svg]]
> 
> I call this the '**replace and pop**' trick which takes only $O(1)$ time. We **replace** the **element to be deleted** with the **last element** in the array, then **pop (remove)** the **last element**. 
> 
> This allows us to perform **true deletion (removing and shifting)** in $O(1)$ time, **regardless** of the **deleted element's position**. However, this is **only suitable** if we **don't mind changing the order of elements**, as the **last element's index** will be **modified** while the **others remain unchanged**.




### Element Indexing in Array
![[array_indexing.png]]

-  It is $O(1)$  to index **any elements** in an [[Array]]
- $elementAddr = firtstElementAddr + elementLength \times elementIndex$ is the **indexing formula** where `elementIndex` is $0$ when we try to access the **first element**
- In most programming languages, `my_array[i]` is a **convenient syntax** that [[Abstraction|abstracts]] the process of accessing the element at index `i` in an array. While the underlying mechanism usually involves **calculating the [[Memory Address]]** of the element and then **[[Pointer#Pointer Dereference|dereferencing]] that address** to **obtain the value**

### Array Versus Linked List
- When iterating over **all elements** in an [[Array]] and a [[Linked List]], the **array** is typically **much faster** if the elements are present in the [[CPU Cache]]. This is because arrays store elements in [[Data Structure#Continuous Memory|contiguous memory]], allowing them to benefit from [[CPU Cache#Cache Locality|cache locality]]. However, when [[CPU Cache#Cache Miss|cache misses]] occur, an **array** may be **slightly slower** than a **linked list**, as it needs to **calculate** the [[Memory Address|memory address]] of each **subsequent element**, whereas the next **element's address** is **directly stored** within each **node of a linked list**



### Contiguous Segment
- A continuous range of [[Array]]


## Dynamic Array
---
![[dyanmic_array_memory_allocation.png|500]]
- Also known as **List**
- A [[Datatype]] that contains a [[Pointer]] to the underlying [[Array]] and other **metadata** like the **capacity** of the array and the **current size** of the array. As shown above, the **purple blocks** contain the **metadata of the dynamic array**. The **yellow blocks** are the actual **array** that **hold the elements**


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
- Used to implement [[Queue#Implementation|Queue]]

>[!info] Front Index
> A variable to keep track the index for the start of the circular array.

>[!info] Rear Index
> A variable to keep track the index of the slot after the last element of the circular array, Can be obtained with `frontIndex + arraySize`.


## JavaScript Array
---
- [[Array]] in Javascript is actually a [[Hash Map]]
![[js_array_is_hashmap.gif]]


>[!bigbrain] Inserting a big index without the memory sacrifice
> When inserting at a big index. We don't need allocate an array in the [[Virtual Memory]] that large. It is just another key-value pair in the hash map!
> 
> ![[js_array_insertion.gif]]
## References
---
- [4.1   数组 - Hello 算法](https://www.hello-algo.com/chapter_array_and_linkedlist/array/)
- [HOW ARE DYNAMIC SIZE LISTS STORED IN MEMORY? - YouTube](https://youtu.be/xFMXIgvlgcY?si=0DE9NobYKB97fFnc)