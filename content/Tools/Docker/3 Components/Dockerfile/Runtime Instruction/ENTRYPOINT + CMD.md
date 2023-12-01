#docker 
>[!abstract] Commonly used together


## Defining [[CMD]] after [[ENTRYPOINT]]
>[!note] Without [[exec "$@"]] in [[ENTRYPOINT]] executable
>- The stuff specified inside the [[CMD]] will be treated as arguments for the [[ENTRYPOINT]] executable 

>[!note] With [[exec "$@"]] in [[ENTRYPOINT]] executable
>- The [[ENTRYPOINT]] executable ends itself
>- The stuff specified inside the [[CMD]] will execute in its own [[Process]]


