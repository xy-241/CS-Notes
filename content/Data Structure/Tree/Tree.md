---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-03T17:32:00
Last Date: 2024-03-26T10:48:55+08:00
---
## Abstract
---
- Represent hierarchical structures, consisting of **nodes** connected by [[#Edge]]
- Represent **hierarchical structures** such as [[File System Hierarchy]], organisational charts, XML/HTML documents, and decision trees etc





## Terminologies
---
### Root Node
- Node without parent node
### Leaf Node
- Node without any child nodes
- Its 2 pointers point to ``null``
### Edge
- The link created by [[Pointer]] that links up 2 nodes
### Level
- Increments from the top to bottom of the Binary Tree
- [[#Root Node]] is at level 1
### Degree
- The number of child nodes of a particular node
- In Binary Tree, it is 0, 1, 2
### Height
- The number of [[#Edge]] traversed from [[#Root Node]] to the furthest [[#Leaf Node]]
### Node Height
- The number of [[#Edge]] traversed from the current node to the furthest [[#Leaf Node]]
### Depth
- The number of [[#Edge]] traversed from [[#Root Node]] to a particular node

> [!sidenote]
> In some questions or textbook, [[#Height]] and [[#Depth]] are defined based on the number of nodes traversed instead of [[#Edge]]. In this case, we need to +1

### Balance Factor
- The **difference** in [[#Height]] between the left and right subtrees of **a node**
- A measure of how unbalanced the tree is at that node
### Height-Balanced
- For **all nodes**, [[#Balance Factor]] should be no greater than 1 or smaller than -1
- This means that the tree is relatively evenly distributed, and no one subtree is significantly taller than the others
- More efficient for search, insertion, and deletion operations