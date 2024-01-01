---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-12T16:15:46+08:00
Last Date: 2024-01-01T21:02:03+08:00
References: 
---
## Abstract
---
![[double linked list.png]]
- Node Definition
```java
public class Node {
    int val;
    Node prev;
    Node next;
    Node(){}

    Node(int key, int val) {
        this.val = val;
    }
}
```
## Use Cases
---
### Advanced Data Structure
- like Red Black Tree where we need to know the parent node of a given node

### Browser History 
- When we at a page, knowing what is the previous page (parent node) & what is the next page(child node) makes the browsing experience more smooth

### Cacheing
- [[LRU]], a [[Cache Server#Eviction Policy]]