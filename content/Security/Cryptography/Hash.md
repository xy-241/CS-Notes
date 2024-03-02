---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
  - js
  - bash
Creation Date: 2023-09-09T18:10:00
Last Date: 2024-03-02T17:47:20+08:00
References: 
---
## Abstract
---
- Hash means Chop & Mix
- It is **infeasible to reverse** from the [[#Digest]] to the original text

>[!caution] Vulnerable to Brute-force attacks
> Can by hacked by [Rainbow table - Wikipedia](https://en.wikipedia.org/wiki/Rainbow_table). You can try to  [[#Nodejs |hash of common text]] and hack using this [website](https://crackstation.net/)
> 
> One way to counter it is to use [[Salting]]

>[!example]- Example use case
> Store secrete data in plaintext in the hash form (e.g Password)



### Digest
- A hash value that is commonly formatted as hex or [[Base 64 Encoding]]
- Should fulfil both [[#Avalanche effect (雪崩效应)]] and 

>[!code]- Generate Hash Digest using Nodejs
>
> ```js
> const { createHash } = require('crypto')
> 
> function hash(input) {
>   return createHash('sha256').update(input).digest("hex")
> }
> 
> let password = 'password123'
> console.log(hash(password));
> ```
#### Avalanche effect (雪崩效应)
- If an **input is changed slightly**, the **output changes significantly**

#### Collision resistance (抗碰撞性)
- It is hard to find two inputs that hash to the same output



## Common Hash Algorithms
---
### MD5 (Message Digest)
- A Hashing Algorithm that can be broken 
### SHA256 (Secure Hash Algorithm)
- A Hashing Algorithm that produces a fix length of [[#Digest]] that is 256-bits
```bash
# Output is hex encoded
shasum -a 256 <FILE_NAME>
```
