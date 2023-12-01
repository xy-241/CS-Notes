#dsa 
>[!note]
>- Trying to find the next empty bucket for the conflicted key-value pair by executing the [[Hash Function]] multiple times


## Mechanism 
> [!note] Search key-value pair with key
> 1. Obtain the [[Array]] index by passing the key to the [[Hash Function]]
> 2. If the desired key-value pair isn't inside the bucket, perform the [[Hash Function]] again until we find the correct key-value pair
> 3. If empty bucket is countered, then the desired key-value isn't stored in the [[Hash Map]]

>[!note] Add key-value pair 
>1. Obtain the [[Array]] index by passing the key to the [[Hash Function]]
>2. If the bucket already has a key-value pair, then keep performing [[Hash Function]] until an empty bucket is found, then insert the key-value pair


## Pros
>[!success] Not easy to have key-value pair clustering


## Cons
>[!caution] More [[Hash Function]] performed means more computation is required






