---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-10-07T16:38:00
Last Date: 2023-12-13T18:39:21+08:00
References: 
---
## Abstract
- [[Data Structure#Linear]]
- [[Data Structure#Discrete Memory]] because each node contains a **Memory Pointer** to the next node
- A collection of elements of the same [[Datatype]]


>[!example] [Use Cases](https://github.com/youngyangyang04/leetcode-master#%E9%93%BE%E8%A1%A8)

>[!note] 3 types
>1. [[Single Linked List]]
>2. [[Double Linked List]]
>3. [[Circular Linked List]]


## [[Abstract Data Type (ADT)]]
>[!success] O(1) to Insert
>- We only need the new node's previous node and next node, make the corresponding pointer changes

>[!success] O(1) to Delete
>- We only need the new node's previous node and next node, make the corresponding pointer changes
>>[!caution] [[Memory Leak]]
>>- For languages without [[Garbage Collector]] like C, we need to manually release the [[Heap Memory]] occupied by the deleted node to prevent [[Memory Leak]]

>[!caution] O(n) to Search for a value

>[!caution] O(n) to access any of the elements
>- We need to traverse n-1 nodes in order to access nth node (assume the node number starts from 1)

## Side Notes
>[!success] Fixable size
>If we want to expand, we just need to modify the pointers of the previous node & the pointers of the next node

>[!success] We can delete elements in arrays by modifying the pointers, and release the memory occupied by the deleted nodes

>[!success] When unsure about the relationship, drawing it out the nodes & pointers!

>[!success] Java snippets to print out the linked list from the the head
>```java
>public void printLinkedList(ListNode node) {
>	ListNode a = node;
>	while (node!=null) {
>		System.out.printf("%d ", node.val);
>		node = node.next;
>	}
>	System.out.println();
>}
>```

>[!success] Edge case handling & Reverting linked list
>- Make use of [[Virtual nodes]]

>[!caution] Uses more [[Main Memory]], because each node contains besides value, also a [[pointer]] to the next node