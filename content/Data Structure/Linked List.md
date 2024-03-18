---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
  - java
Creation Date: 2023-08-05T14:45:43+08:00
Last Date: 2024-03-18T18:52:31+08:00
References: 
---
## Abstract
---
![[linked_list.png|700]]
- A [[Data Structure#Linear]] collection of elements of the same [[Datatype]] that stored in [[Data Structure#Discrete Memory]]. Each node contains a [[Pointer]] to the next node


>[!success] Adjustable size with minimal impact
> If we want to add in a new node, we just need to modify the pointer of the previous node & the pointer of the next node - in **constant time**. Since the connection between the 2 nodes are via **Pointer**, we can have nodes all around the [[Main Memory]]. This means we can add more nodes as long as there is free memory size that can fit a single node.
> 
> ![[linked_list_memory_operation.gif]]



>[!attention] Cache Miss!!!
> Since the connection between 2 nodes are via Pointer, the nodes are scattered around the Main Memory. This means we can't make use of [[CPU Cache#Cache Locality]] and this results in [[CPU Cache#Cache Miss]].
> 
> ![[linked_list_cache_miss.gif]]

>[!caution] Memory Leak
> For languages like [[C]] which doesn't come with a [[Garbage Collector]], we need to manually release deleted node from the [[Address Space#Heap Segment]] to prevent [[Address Space#Memory leak]].



>[!code]- Linked list node implemented with Java
> ```java
> public class Node {
> 	int val;
>     Node next;
>     
>     Node(){}
>     Node(int val) this.val = val;
> }
> ```


>[!code]- Print Out Linked List
> ```java
> public void printLinkedList(ListNode node) {
> 	ListNode a = node;
> 	while (node!=null) {
> 		System.out.printf("%d ", node.val);
> 		node = node.next;
> 	}
> 	System.out.println();
> }
> ```


>[!tip]- Draw It Out
> When unsure about the relationship, draw out the nodes & pointers. It really makes the visualization of the manipulation easy!

>[!tip]- Virtual Node
> O(1) to access either the **head node** or the **tail node**, this makes handling edge cases & reverting linked list easier.
### Time Complexity
>[!note]- Search
> $O(n)$ to search for a value. 

>[!node]- Indexing
> It takes $O(n)$ to obtain the node at a particular position, because the desired [[Memory Address]] can't be obtained by simply incrementing the index like what we can do with [[Array]]. what we have at the start of every indexing is the memory address of the next node, we need to traverse n-1 nodes in order to access nth node.
> 
> ![[linked_list_indexing.png]]

>[!note]+ Insert, Delete
> $O(1)$, we only need the node's previous node and next node, make the corresponding pointer changes.
> 
>>[!attention]
>> 
>> We need to index the node before we can perform insertion and deletion. And it takes $O(n)$ for indexing. So generally, insertion and deletion in linked list results in $O(n)$. Unless the operation is performed at the head node or tail node of the linked list.


### Space Complexity 
- Uses more [[Main Memory]] compared to [[Array]], because each node contains value, and also a [[Pointer]] to the next node


## Single Linked List
---
![[singly linked list.png|500]]

- Implement [[Stack]] and [[Queue (FIFO)]], it is $O(1)$ to add/remove node from the **tail of** [[Linked List]], counting in the indexing time
- Used in [[Hash Map]] to implement [[Hash Collision#Separate Chaining]] to handle [[Hash Collision]]
- Implement [[Graph]], where each node has [[Pointer]] to link up with other nodes

## Double Linked List
---
![[double linked list.png|500]]

- Implement **Advanced Data Structure**, like Red Black Tree where we need to know the parent node of a given node
- Implement [[Cache Server#Eviction Policy]] like [[LRU]]
- Implement **Browser History Navigation**. When we at a page, knowing what is the previous page (parent node) & what is the next page(child node). This makes the browsing experience more smooth

>[!code]- Node Implementation
> 
> ```java
> public class Node {
>   int val;
>   Node prev;
>   Node next;
>   Node() {}
> 
>   Node(int key, int val) this.val = val;
> }
> ```


## Circular Linked List
---
![[circular linked list.png|500]]

- Implement [[Process Scheduling Algorithms]], each [[Process (进程)]] get a small piece [[CPU]] time, each [[Process (进程)]] takes turn to execute, forming a loop










