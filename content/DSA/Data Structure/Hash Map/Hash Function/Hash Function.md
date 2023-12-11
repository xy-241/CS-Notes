#dsa 
>[!abstract] 3 Goals in [[Hash Map]] Context
>1. Certainty - always gives the same output given the same input
>2. Efficient - takes as little computation as possible
>3. Evenly distributed - with more evenly distributed, the less likely [[Hash Collision]] will happen. Different from [[Collision resistance (抗碰撞性)]]

>[!note] We can use either [[Prime Number]] or [[Composite number]] if we are sure the key is evenly distributed. Else if there is some kind of pattern like, the key is a multiple of 3, prime number can reduce [[Hash Collision]]. Thus, we usually use [[Prime Number]] to take the modules, since we can't predict the distribute of the keys

>[!note] Usually the key is [[Immutable Object]]
>Because if the key changes, then its hash will hash, and we will lose the mapping between the key & the bucket index
>>[!info] Custom Objects can be key, because we use its [[Memory Address]] to generate the hash

>[!note] [Hash Value of different data types](https://www.hello-algo.com/chapter_hashing/hash_algorithm/#634)

>[!info] Python insert a random [[Salt]] to prevent [[HashDos Attack]] to improve security

>[!info] In [[Cryptography]], we also want
>1.

## Other use cases
### Password Storage

### Ensure data isn't corrupted 