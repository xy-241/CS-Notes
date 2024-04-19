---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-03T17:41:00
Last Date: 2024-04-19T13:39:57+08:00
---
## Abstract
---
![[binary_search_tree.png|300]]

- Also known as **BST** 
- Nodes have **a value attached** to it. If the **left sub-tree** isn't empty, all nodes on that sub-tree is **smaller** than the value of [[Tree#Root Node]]. If the **right sub-tree** isn't empty, all nodes on that sub-tree is **bigger** than the root node value. Its **left sub-tree** and **right sub-tree** are also **binary search tree**

>[!tip] Access previous node from current node
> Use a variable `prevNode` to keep track of the previous node. Handy in solving some problems.

>[!check] Practice questions
> - [ ] [98. Validate Binary Search Tree](https://leetcode.cn/problems/validate-binary-search-tree/)
> - [ ] [108. Convert Sorted Array to Binary Search Tree](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)



## BST Node Traversal
---

![[bst_inorder_traversal.png|300]]

- We can use [[In-Order Traversal]] to print the nodes inside a BST from smallest to the biggest or from biggest to smallest with $O(n)$

>[!note] From smallest to the biggest
> Go to the left subtree then right subtree. Useful in finding the **minimum absolute difference among the nodes**

>[!note] From biggest to the smallest
> Go to the right subtree then left subtree. Useful in converting the BST to [[#Greater Tree]].


## BST Node Search
---
>[!attention]
> We can only achieve $log(n)$ if the BST is [[Tree#Height-Balanced]]. A not height-balanced BST can be degraded into a [[Binary Tree#Degenerate Binary Tree]].

- If the current node isn't the node we are finding, select the `node.left` when target value is smaller than the current node, otherwise select `node.right`
- This allows us to choose only one side of the [[Binary Search Tree (二叉搜索树)]] at each [[Tree#Level]], achieving $log(n)$ speed

>[!check] Practice questions
> - [ ] [700. Search in a Binary Search Tree](https://leetcode.cn/problems/search-in-a-binary-search-tree/)

## BST Node Insertion
---

>[!attention]
> We can only achieve $log(n)$ if the BST is [[Tree#Height-Balanced]]. A not height-balanced BST can be degraded into a [[Binary Tree#Degenerate Binary Tree]].

![[bst_node_insertion.png|500]]

- The idea is to insert the new node as a [[Tree#Leaf Node]] to minimise modification to the [[Binary Search Tree (二叉搜索树)]]
- The suitable `null` slot can be found in $log(n)$ speed by going down the BST using the [[#BST Node Search]]

>[!check] Practice questions
> - [ ] [701. Insert into a Binary Search Tree](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)

## BST Node Deletion
---
- When the [[Tree#Degree]] of the deleted node is $0$, we can just **remove it** without any other modifications

![[bst_node_deletion_1.png|500]]

```java
/* 
pre is the parent node of the deleted node
root is the root node of the binary search tree
cur is the deleted node
*/

TreeNode child = cur.left != null ? cur.left : cur.right;
// delete node
if (cur != root) {
  if (pre.left == cur)
    pre.left = child;
  else pre.right = child;
} else {
  // if the deleted node is the root node，we assign its child node as the new root node
  root = child;
}
```

- When the [[Tree#Degree]] of the deleted node is $1$, we can just need to **smallest node from its right subtree** without any other modifications

![[bst_node_deletion_2.png|500]]

```java
/* 
pre is the parent node of the deleted node
root is the root node of the binary search tree
cur is the deleted node
*/

TreeNode child = cur.left != null ? cur.left : cur.right;
// delete node
if (cur != root) {
  if (pre.left == cur)
    pre.left = child;
  else pre.right = child;
} else {
  // if the deleted node is the root node，we assign its child node as the new root node
  root = child;
}
```

- When the [[Tree#Degree]] of the deleted node is $2$, we can just need to replace it with **smallest node from its right subtree** or the **biggest node from its left subtree**. Below shows replacing the deleted node with the **smallest node from its right subtree**

![[bst_node_deletion_3.png]]

```java
// cur is the deleted node

// finding the smallest node from deleted node's right subtree, and assign it to tmp
TreeNode tmp = cur.right;
while (tmp.left != null) {
  tmp = tmp.left;
}

// Delete tmp from the right subtree of the deleted node, the remove() implementation is same as delete node that has a degree of 0
remove(tmp.val);
// replace the deleted node with the smallest node from its right subtree
cur.val = tmp.val;
```

- We can encapsulate the logic of BST node deletion in the three situations described above into a single `remove()` function

```java
/*
pre is the parent node of the deleted node
root is the root node of the binary search tree
cur is the deleted node
*/

void remove(int num) {
  // if tree is empty, no node to delete, terminate the remove() operation
  if (root == null) return;
  
  TreeNode cur = root, pre = null;
  
  // Find the deleted node - curr
  while (cur != null) {
    // Deleted node found! Proceed to deletion
    if (cur.val == num) break;
    
    pre = cur;
    // Since the value of deleted node is bigger, go to right subtree to find the deleted node
    if (cur.val < num)
      cur = cur.right;
    // Since the value of deleted node is smaller, go to left subtree to find the deleted node
    else cur = cur.left;
  }
  
  // Deleted node not found, terinate the remove() operation
  if (cur == null) return;
  
  // The degree of deleted node is 0 or 1
  if (cur.left == null || cur.right == null) {
    TreeNode child = cur.left != null ? cur.left : cur.right;
    // delete node
    if (cur != root) {
      if (pre.left == cur)
        pre.left = child;
      else
        pre.right = child;
    } else {
      // if the deleted node is the root node，we assign its child node as the
      // new root node
      root = child;
    }
  }
  // The degree of deleted node is 2
  else {
    // finding the smallest node from deleted node's right subtree, and assign
    // it to tmp
    TreeNode tmp = cur.right;
    while (tmp.left != null) {
      tmp = tmp.left;
    }

    // Delete tmp from the right subtree of the deleted node, the remove()
    // implementation is same as delete node that has a degree of 0
    remove(tmp.val);
    // replace the deleted node with the smallest node from its right subtree
    cur.val = tmp.val;
  }
```

>[!check] Practice questions
> - [ ] [450. Delete Node in a BST](https://leetcode.cn/problems/delete-node-in-a-bst/)

## Leetcode Question
---
### Properties
- [530. Minimum Absolute Difference in BST](https://leetcode.cn/problems/minimum-absolute-difference-in-bst/)
- [501. Find Mode in Binary Search Tree](https://leetcode.cn/problems/find-mode-in-binary-search-tree/)

### Modification & Structure
- [669. Trim a Binary Search Tree](https://leetcode.cn/problems/trim-a-binary-search-tree/)
### Common Ancestor
- [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)


## Terminologies 
---
### Greater Tree
- Every value of node of the original BST is changed to the original value of node plus the sum of all value of nodes greater than the value of the original node of  in BST

>[!check] Practice questions
> - [ ] [538. Convert BST to Greater Tree](https://leetcode.cn/problems/convert-bst-to-greater-tree/)


## References
---
- [7.4   二叉搜索树 - Hello 算法](https://www.hello-algo.com/chapter_tree/binary_search_tree/)