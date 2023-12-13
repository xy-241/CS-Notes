#dsa 
## Basic
>[!abstract] Unlike [[Separate Chaining]], it doesn't introduce extra [[Data Structure]] ([[Linked List]]) to live with [[Hash Collision]]

>[!note] 2 Main Methods
>1. [[Linear Probing]]
>2. [[Double Hashing]]

>[!caution] Delete key-value pair
>We need a special indicator to remove a key-value pair. If we just make it empty, the key-value pairs stored after it will be ignored when we are trying to search a key-value pair that has [[Hash Collision]] with the deleted key-value pair