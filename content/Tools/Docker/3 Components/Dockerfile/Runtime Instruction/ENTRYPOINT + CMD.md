---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-08-27T22:34:09+08:00
Last Date: 2023-08-27T22:34:09+08:00
References:
---
>[!abstract] Commonly used together


## Defining [[CMD]] after [[ENTRYPOINT]]
---
>[!note] Without [[exec "$@"]] in [[ENTRYPOINT]] executable
>- The stuff specified inside the [[CMD]] will be treated as arguments for the [[ENTRYPOINT]] executable 

>[!note] With [[exec "$@"]] in [[ENTRYPOINT]] executable
>- The [[ENTRYPOINT]] executable ends itself
>- The stuff specified inside the [[CMD]] will execute in its own [[Process]]
