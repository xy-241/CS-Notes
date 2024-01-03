---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-05T14:45:43+08:00
Last Date: 2024-01-01T21:02:53+08:00
References: 
---
## Abstract
---
- A collection of elements of the same [[Datatype]]
- [[Data Structure#Linear]] and elements stored [[Data Structure#Discrete Memory]] because each node contains a [[Memory Address]] to the next node
- Node Definition
```java
public class Node {
    int val;
    Node next;
    
    Node(){}
    Node(int val) {
        this.val = val;
    }
}
```

>[!note] 3 types
>1. [[Single Linked List]]
>2. [[Double Linked List]]
>3. [[Circular Linked List]]

## Tips
---
### Virtual Node
- Make handling edge cases & reverting linked list easier 
- O(1) to access either the head node or the tail node

### Print Out Linked List
```java
public void printLinkedList(ListNode node) {
	ListNode a = node;
	while (node!=null) {
		System.out.printf("%d ", node.val);
		node = node.next;
	}
	System.out.println();
}
```


### Draw It Out
- When unsure about the relationship, drawing it out the nodes & pointers!
- It really makes the visualization of the manipulation easy



## Complexity
---
### Time
- O(1) to Insert
	- we only need the new node's previous node and next node, make the corresponding pointer changes
- O(1) to Delete 
	- we only need the new node's previous node and next node, make the corresponding pointer changes
>[!caution] [[Memory Leak]]
>- For languages without [[Garbage Collector]] like C, we need to manually release it from the [[Address Space#Data Segment]] occupied by the deleted node to prevent Memory Leak

- O(n) to Search for a value
- O(n) to access any of the elements
	- We need to traverse n-1 nodes in order to access nth node (assume the node number starts from 1)

### Space
- Uses more [[Main Memory]] compared to [[Array]], because each node contains value, and also a [[Memory Address]] to the next node

## Properties 
---
### Fixable size
- If we want to expand, we just need to modify the pointers of the previous node & the pointers of the next node







