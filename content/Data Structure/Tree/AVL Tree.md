---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-26T00:14:31+08:00
Last Date: 2024-04-22T11:40:48+08:00
References: 
---
## Abstract 
---

![[avl_tree.png|400]]

- A type of **Self-Balancing Binary Search Tree (平衡二叉搜索树)**. Basiclly, an optimised [[Binary Search Tree (二叉搜索树)]] that is either empty OR with all nodes that are [[Tree#Height-Balanced]]


>[!important] Self-Balancing
> When we insert or delete a node and the binary tree becomes unbalanced, AVL tree will use [[#AVL Tree Rotation]] to auto-adjust the structure of the binary tree, ensuring that the tree remains height-balanced.

>[!success] Always efficient searching, deletion and insertion operations
> The self-balancing property guarantees that the [[Tree#Tree Height]] of an AVL tree with $n$ nodes is always around $O(log n)$. This means operations like searching, insertion, and deletion take a maximum of $O(log n)$ time, making them very efficient.

- Below is an implementation of AVL tree using Java, read [[#AVL Tree Node]], [[#AVL Tree Rotation]], [[#AVL Tree Insertion]] and [[#AVL Tree Deletion]] for a code breakdown and explanation


<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42auj4tj9?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true" 
 ></iframe>
 </div>
 



## AVL Tree Node
---
- The node should have a piece of information that describes its **current [[Tree#Node Height]]**, so its parent node is able to calculate the [[#AVL Tree Balance Factor]] to see if re-balancing is needed, **saving the computation** to re-calculate the node height when parent node needs the information
- Below shows the codes for **AVL tree node definition** 



```java
/* AVL Tree Node Definition */
class TreeNode {
  public int val; // Node value
  public int height; // Node height, default 0
  public TreeNode left; // left child node, default null node
  public TreeNode right; // right child node, default null node
  public TreeNode(int x) {
    val = x;
  }
}
```

### AVL Tree Node Height
- [[Tree#Null Node]] has a node height of $-1$ and [[Tree#Leaf Node]] has a node height of $0$
- Below shows functions to retrieve and update the **height information** of a node

```java
/* Obtain Node's Height */
int height(TreeNode node) {
  // Null node's height is -1, leaf node's height is 0 
  return node == null ? -1 : node.height;
}

/* Update Node Height */
void updateHeight(TreeNode node) {
  // Node's height is the height of its higher subtree + 1
  node.height = Math.max(height(node.left), height(node.right)) + 1;
}
```

### AVL Tree Balance Factor
- Maintaining the [[Tree#Balance Factor]] of each node prevents [[Binary Tree#Degenerate Binary Tree]]. The codes to calculate the balance factor is given below

```java
/* Obtain Balance Factor */
int balanceFactor(TreeNode node) {
  // Null node has a balance factor of 0
  if (node == null)
    return 0;
  // Node's balance factor = left subtree's height - right subtree's height
  return height(node.left) - height(node.right);
}
```

>[!example] Practice questions
> - [ ] [110. Balanced Binary Tree](https://leetcode.cn/problems/balanced-binary-tree/)

## AVL Tree Rotation
---
- These rotations are performed to **restore the balance** whenever the [[Tree#Balance Factor]] of a node becomes **greater than $1$** or **less than $-1$**

### AVL Tree Right Rotation

![[avl_tree_right_rotation_1.png.png]]

- When the [[Tree#Balance Factor]] of a node(parent node) is bigger than $1$ - **skewed to the left**. We **right rotate** the parent node to its **left child node**. So the **left child node** becomes the parent node and the parent node becomes the child node

>[!question] What if the left child node has a node as its right node?
> In this case, the right node of the left child node is a **grandchild node** to the parent node. We simply place the grandchild node as the left child of the parent node, as shown in the diagram below.
> 
> ![[avl_right_rotation_2.png]]

>[!code]
> ```java
> /* Right Rotation */
> TreeNode rightRotate(TreeNode node) {
>   TreeNode child = node.left;
>   TreeNode grandChild = child.right;
>   // Right rotate the node to its right child node
>   child.right = node;
>   node.left = grandChild;
>   // Update the height of the node and the child node(the parent node after right rotation)
>   updateHeight(node);
>   updateHeight(child);
>   // Return the child node 
>   return child;
> }
> ```


### AVL Tree Left Rotation

![[avl_tree_left_rotation_1.png]]


- When the [[Tree#Balance Factor]] of a node(parent node) is smaller than $-1$ - **skewed to the right**. We **left rotate** the parent node to its **right child node**. So the **right child node** becomes the parent node and the parent node becomes the child node

>[!question] What if the right child node has a node as its left node?
> In this case, the **left node** of the **right child node** is a **grandchild node** to the parent node. We simply place the grandchild node as the **right child** of the parent node, as shown in the diagram below.
> 
> ![[avl_tree_right_rotation_2.png]]

>[!code]
> ```java
> /* Left Rotation */
> TreeNode leftRotate(TreeNode node) {
>   TreeNode child = node.right;
>   TreeNode grandChild = child.left;
>   // Left rotate the node to its left child node
>   child.left = node;
>   node.right = grandChild;
>   // Update the height of the node and the child node(the parent node after left rotation)
>   updateHeight(node);
>   updateHeight(child);
>   // Return the child node 
>   return child;
> }
> ```

### AVL Tree Left-Right Rotation

![[avl_tree_left_right_rotation.png]]

- The [[AVL Tree]] is skewed to the **left side**, so we should perform [[#AVL Tree Right Rotation]] on the parent node. However, the child node has a [[Tree#Balance Factor]] that is $< 0$. This means the child node's **right side** is one level deeper(there is no way to be deeper because in that case, we will perform self-balancing on the child node already). If we perform a **right rotation**, the parent node will be added to the child node as the **right node**, the $-1$ to the **parent's left hand side** is offset by addition of parent node to the child node. Thus, the AVL Tree remains **NOT** [[Tree#Height-Balanced]]
- The way to handle this is to perform [[#AVL Tree Left Rotation]] on the child node first, so the **left hand side of the child node** is one level deeper than the **right side**. Now if we perform **right rotation** on the parent node, the child node will become the new parent node, and its **left hand side** $-1$ and **right side** $+1$, so from $left-right=2$ to $(left-1) - (right+1) = left -right - 1 -1 = 2-2 = 0$

>[!code]
> ```java
> node.left = leftRotate(node.left);
> return rightRotate(node);
> ```
### AVL Tree Right-left Rotation
![[avl_tree_right_left_rotation.png]]

- The [[AVL Tree]] is skewed to the **right side**, so we should perform [[#AVL Tree Left Rotation]] on the parent node. However, the child node has a [[Tree#Balance Factor]] that is $> 0$. This means the child node's **left side** is one level deeper(there is no way to be deeper because in that case, we will perform self-balancing on the child node already). If we perform a **left rotation**, the parent node will be added to the child node as the **left node**, the $-1$ to the **parent's right hand side** is offset by addition of parent node to the child node. Thus, the AVL Tree remains **NOT** [[Tree#Height-Balanced]]
- The way to handle this is to perform [[#AVL Tree Right Rotation]] on the child node first, so the **right hand side of the child node** is one level deeper than the **left side**. Now if we perform **left rotation** on the parent node, the child node will become the new parent node, and its **right hand side** $-1$ and **left side** $+1$, so from $left-right=-2$ to $(left+1) - (right-1) = left -right + 1 + 1 = -2+2 = 0$


>[!code]
> ```java
> node.right = rightRotate(node.right);
> return leftRotate(node);
> ```

### AVL Tree Rotation Function
- We can encapsulate the logic of [[#AVL Tree Left Rotation]], [[#AVL Tree Right Rotation]], [[#AVL Tree Left-Right Rotation]] and [[#AVL Tree Right-left Rotation]] into a single function `rotate(TreeNode node)` as shown below

```java
/* Perform Self-balancing */
TreeNode rotate(TreeNode node) {
  // obtain the balance factor of current node
  int balanceFactor = balanceFactor(node);
  // Skewed to left
  if (balanceFactor > 1) {
    if (balanceFactor(node.left) >= 0) {
      // right rotation
      return rightRotate(node);
    } else {
      // left-right rotation
      node.left = leftRotate(node.left);
      return rightRotate(node);
    }
  }
  // Skewed to right
  if (balanceFactor < -1) {
    if (balanceFactor(node.right) <= 0) {
      // left rotation
      return leftRotate(node);
    } else {
      // right-left rotation
      node.right = rightRotate(node.right);
      return leftRotate(node);
    }
  }
  // already balanced, no changes needed 
  return node;
}
```
## AVL Tree Insertion
---
- Node insertion for [[AVL Tree]] is similar to [[Binary Search Tree (二叉搜索树)#BST Node Insertion]]. The only difference is that after the node insertion, we need to update the [[Tree#Node Height]] when recurse back to the [[Tree#Root Node]], and perform [[#AVL Tree Rotation]] to ensure the AVL Tree remains [[Tree#Height-Balanced]]

```java
/* Node Insertion */
void insert(int val) {
  root = insertHelper(root, val);
}

/* Node Insertion using recursion（dfs helper） */
TreeNode insertHelper(TreeNode node, int val) {
  if (node == null)
    return new TreeNode(val);
  /* Find the insertion point - a null node, and replace it with the new Node to perform node insertion */
  if (val < node.val)
    node.left = insertHelper(node.left, val);
  else if (val > node.val)
    node.right = insertHelper(node.right, val);
  else
    return node; // Abort the node insertion if it is a duplicated node
  updateHeight(node); // Update the height of node all the way back to the root node
  /* AVL Tree rotation for self-balancing */
  node = rotate(node);
  // Return the root node of the subtree
  return node;
}
```

## AVL Tree Deletion
---
- Similar to [[Binary Search Tree (二叉搜索树)#BST Node Deletion]], but we need to perform self-balancing after the deletion which can be conveniently performed using [[Recursion]]. We are using recursion to find the deleted node, so we don't need to keep track of the previous node manually

```java
/* Node Deletion */
void remove(int val) {
  root = removeHelper(root, val);
}

/* Node Deletion using recursion（dfs helper） */
TreeNode removeHelper(TreeNode node, int val) {
  if (node == null) return null;

  /* 1. Find node that is the desired node */
  if (val < node.val)
	// Since the value of deleted node is smaller, go to left subtree to find the deleted node
    node.left = removeHelper(node.left, val);
  else if (val > node.val)
	// Since the value of deleted node is bigger, go to right subtree to find the deleted node
    node.right = removeHelper(node.right, val);
  else { // deleted node found!
	// The degree of deleted node is 0 or 1
    if (node.left == null || node.right == null) {
      TreeNode child = node.left != null ? node.left : node.right;
      // when degree is 0 ，delete current node and return null node
      if (child == null)
        return null;
      // when degree is 1, replace current node with its child node
      else node = child;
    } else { // The degree of deleted node is 2
      TreeNode temp = node.right;
      while (temp.left != null) {
        temp = temp.left;
      }
      // replace the current node with the smallest node from its right subtree
      node.right = removeHelper(node.right, temp.val);
      node.val = temp.val;
    }
  }
  updateHeight(node); // update the node height recursively 
  /* AVL Tree rotation for self-balancing */
  node = rotate(node); 
  return node; // return the root node of the subtree
}
```

## Red-black Tree
---
- Like [[AVL Tree]], red-black tree is a type of self-balancing binary tree, but with **more relaxing balancing requirement**, this means less [[#AVL Tree Rotation]] needed, thus better efficiency for node insertion and deletion



## References
---
- [AVL 树 - Hello 算法](https://www.hello-algo.com/chapter_tree/avl_tree/)