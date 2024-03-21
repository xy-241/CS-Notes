---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
Creation Date: 2023-09-13T09:33:16+08:00
Last Date: 2024-03-21T17:08:52+08:00
References: 
---
## Abstract
---
- Stands for **JSON Web Token**
- [[Base 64 Encoding|Base64 encoded]]
- Can be stored inside [[Cookie]], [[Request Body]], used for [[Network Protocol#Stateless Network Protocol|Stateless]] [[Authentication]]



## JWT Header
---
- Consists of two parts: the **type of the token**, which is [[JWT]], and the [[Digital Signature]] **algorithm** being used to generate the [[#JWT Signature]], such as HMAC SHA256 or [[Asymmetric Cryptography#RSA]]

## JWT Claims
---
- Key-value pair inside the token that describes the user and the [[JWT]] itself
- You can learn about the different claims and their purposes by pasting a JWT token into the editor below

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://jwt.ms/" 
 ></iframe>
 </div>

## JWT Signature
- A [[Digital Signature]] made from [[#JWT Header]] and [[#JWT Claims]], the purpose is to verify the integrity of the [[JWT]]


