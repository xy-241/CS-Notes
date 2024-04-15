---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-26T00:14:31+08:00
Last Date: 2024-04-15T17:38:27+08:00
References: 
---
## Abstract
---
![[avl_tree.png|500]]

- A type of **Self-Balancing Binary Search Tree (平衡二叉搜索树)**. Basiclly, an optimised [[Binary Search Tree (二叉搜索树)]] that is either empty OR with all nodes that are [[Tree#Height-Balanced]]


>[!important] Self-Balancing
> When we insert or delete a node and the binary tree becomes unbalanced, AVL tree will use [[#AVL Tree Rotation]] to auto-adjust the structure of the binary tree, ensuring that the tree remains height-balanced.

>[!success] Always efficient searching, deletion and insertion operations
> The self-balancing property guarantees that the [[Tree#Tree Height]] of an AVL tree with $n$ nodes is always around $O(log n)$. This means operations like searching, insertion, and deletion take a maximum of $O(log n)$ time, making them very efficient.


### AVL Tree Balance Factor
- Maintaining the [[Tree#Balance Factor]] of each node prevents [[Binary Tree#Degenerate Binary Tree]]. The codes to calculate the balance factor is given below

```java
/* 获取平衡因子 */
int balanceFactor(TreeNode node) {
  // 空节点平衡因子为 0
  if (node == null)
    return 0;
  // 节点平衡因子 = 左子树高度 - 右子树高度
  return height(node.left) - height(node.right);
}
```


### AVL Tree Node
- The node should have a piece of information that describes its **current [[Tree#Node Height]]**, so its parent node is able to calculate the [[#AVL Tree Balance Factor]] to see if re-balancing is needed, **saving the computation** to re-calculate the node height when parent node needs the information
- [[Tree#Null Node]] has a node height of $-1$ and [[Tree#Leaf Node]] has a node height of $0$
- Below shows the codes for **AVL tree node definition** and functions to retrieve and update the **height information** of a node

```java
/* AVL 树节点类 */
class TreeNode {
  public int val; // 节点值
  public int height; // 节点高度
  public TreeNode left; // 左子节点
  public TreeNode right; // 右子节点
  public TreeNode(int x) {
    val = x;
  }
}

/* 获取节点高度 */
int height(TreeNode node) {
  // 空节点高度为 -1 ，叶节点高度为 0
  return node == null ? -1 : node.height;
}

/* 更新节点高度 */
void updateHeight(TreeNode node) {
  // 节点高度等于最高子树高度 + 1
  node.height = Math.max(height(node.left), height(node.right)) + 1;
}
```
 



## AVL Tree Rotation
---
- These rotations are performed to **restore the balance** whenever the [[Tree#Balance Factor]] of a node becomes **greater than $1$** or **less than $-1$**

### AVL Tree Right Rotation
![[avl_tree_right_rotation_1.png|500]]

- When the [[Tree#Balance Factor]] of a node(parent node) is smaller than $-1$ or bigger than $1$. We **right rotate** the parent node to its left child node. So the left child node becomes the parent node and the parent node becomes the child node

>[!question] What if the left child node has a node as its right node?
> In this case, the right node of the left child node is a **grandchild node** to the parent node. We simply place the grandchild node as the left child of the parent node, as shown in the diagram below.
> 
> ![[avl_right_rotation_2.png]]

### AVL Tree Left Rotation


### AVL Tree Left-Right Rotation


### AVL Tree Right-left Rotation




## Leetcode Problems
---
### Properties
- [110. Balanced Binary Tree](https://leetcode.cn/problems/balanced-binary-tree/)
- [108. Convert Sorted Array to Binary Search Tree](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)


## References
---
- [AVL 树 - Hello 算法](https://www.hello-algo.com/chapter_tree/avl_tree/)