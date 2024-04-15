---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-03T17:32:00
Last Date: 2024-04-15T16:28:17+08:00
---
## Abstract
---
![[tree.png|500]]

- Represent **hierarchical structures** such as [[File System Hierarchy]], organisational charts, XML/HTML documents, and decision trees etc, consisting of **nodes** connected by [[#Edge]]


## Tree Components
---
### Root Node
- Node without parent node

### Null Node
- A node that `null`, acts a termination point for a branch of the [[Tree]]
### Leaf Node
- Node without any child nodes
- Its 2 pointers point to [[#Null Node]]
### Edge
- The link created by [[Pointer]] that links up 2 nodes


## Tree Properties
---

### Level
- Increments from the top to bottom of the Binary Tree
- [[#Root Node]] is at level 1
### Degree
- The number of child nodes of a particular node
- In Binary Tree, it is 0, 1, 2

### Depth
- The number of [[#Edge]] traversed from [[#Root Node]] to a particular node

> [!important]
> In some questions or textbook, [[#Tree Height]] and depth are defined based on the number of nodes traversed instead of [[#Edge]]. In this case, we need to +1.

## Tree Balance
---
### Tree Height
- The number of [[#Edge]] traversed from [[#Root Node]] to the furthest [[#Leaf Node]]
### Node Height
- The number of [[#Edge]] traversed from the current node to the furthest [[#Leaf Node]]

### Balance Factor
- The **difference** in [[#Tree Height]] between the left and right subtrees of **a node**
- A measure of how unbalanced the tree is at that node
### Height-Balanced
- [[Tree#Tree Height]] of the **two child subtrees** of **any node** differ by at most $1$; no greater than $1$ and not smaller than $-1$. This means that the tree is **relatively evenly distributed**, and no one subtree is significantly taller than the others

>[!success] Key benefit
> This [[#Balance Factor]] ensures that the time complexity of operations like insertion, deletion, and search remains $O(log n)$, where $n$ is the number of nodes in the tree.


