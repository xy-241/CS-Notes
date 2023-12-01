#dsa 
>[!note] Expand the output space aka the [[Array]] can reduce [[Hash Collision]]
>![[hash_collision_expand.png]]
>```java
>// When capacity is 100
>136 % 100 = 36
>236 % 100 = 36
>
>// When capacity is 200
>136 % 200 = 136
>236 % 200 = 36
>```
>>[!caution] Very time consuming to move all key-value pairs from old arrays to new arrays & recalculating hashes 
>>- Usually [[Programming Language]] will reserve a pretty decent space to avoid frequent expanding
