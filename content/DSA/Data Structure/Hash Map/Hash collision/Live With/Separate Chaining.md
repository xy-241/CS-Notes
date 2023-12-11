#dsa
>[!note]
>![[separate_chaining.png]]
>- Use each bucket in the underlying output space ([[Array]]) to hold a [[Linked List]] node. Put all the conflicted key-value pairs as nodes in the [[Linked List]]

>[!tip] [Example Implementation](https://www.hello-algo.com/chapter_hashing/hash_collision/#621)

>[!example] Used by [[Java]]
>Starting from JDK 1.8, when [[Hash Map]] [[Array]] length reaches 64 & the [[Linked List]] length is 8. [[Linked List]] will be converted to [[Red Black Tree]] to improve performance

>[!example] Used by [[Golang]]
>- Every bucket has maximum 8 key-value pairs. Once exceeded, it will be linked to a overflowing bucket
>- When there is too many overflowing buckets,  [[Hash Map Expansion]] will be performed to ensure performance

## Mechanism 
> [!note] Search key-value pair with key
> 1. Obtain the [[Array]] index by passing the key to the [[Hash Function]]
> 2. Obtain the starting node of the [[Linked List]] with the index
> 3. Iterate through the [[Linked List]] to find key-value pair node that matches with the given key

>[!note] Add key-value pair 
>1. Same procedure as the **Search key-value pair with key**
>2. If unable to find, we add a new node with the key-value pair to the [[Linked List]]. Else we return duplicated key error 

>[!note] Delete key-value pair
>1. Same procedure as the **Search key-value pair with key**
>2. Delete the key-value pair node


## Cons
>[!caution] More [[Main Memory]] usage, because each key-value pair node needs space to store a pointer to point to the next node

>[!caution] Reduced search efficiently when [[Linked List]] is getting long. Searching on [[Linked List]] is linear, not constant
>We can converted the long [[Linked List]] to [[AVL(Balanced Binary Search) Tree  (平衡二叉搜索树)]] or [[Red Black Tree]] to optimise the search efficiency from O(n) to O(logn)

