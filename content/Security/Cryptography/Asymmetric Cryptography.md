---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
Creation Date: 2023-10-05T11:42:46+08:00
Last Date: 2023-10-05T11:42:46+08:00
References:
---
## Abstract 
---
>[!info]
>- Also known as Public key Cryptography or Public Private Key
- Achieved with [[#Public Key]] & [[#Private Key]] which are mathematically related
- What [[#Public Key]] encrypts can only be decrypted by [[Private Key]] (used in [[Symmetric Key Exchange]])
- What [[Private Key]] encrypts can only be decrypted by [[Public Key]] (used in [[Digital Signature]]) [[Digital Signature]]


## Benefits
---
1) Allows 2 entity to exchange [[Data]] securely (data encrypted-in-transit) without physically exchanging an encryption key

## Cons
---
1) Much more computationally heavy compared to [[Symmetric Cryptography]]

## Terminologies 
---
### Public Key
- Distributed to everyone & anyone
### Private Key
- Should be kept 100% secret to the owner

### RSA (Rivest-Shamir-Adleman)
- An [[Algorithms]] used to generate [[#Public Key]] & [[#Private Key]]
- Relies on the difficulty of factoring large [[Composite number]] into their [[Prime Number (质数)]] factor
### ECDSA (Elliptic Curve Digital Signature Algorithm)
- An [[Algorithms]] used to generate [[#Public Key]] & [[#Private Key]]
### EdDSA, ED25519 (Edwards-curve Digital Signature Algorithm)
- An [[Algorithms]] used to generate [[#Public Key]] & [[#Private Key]]