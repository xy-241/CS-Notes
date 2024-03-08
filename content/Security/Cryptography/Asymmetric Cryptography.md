---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
  - bash
Creation Date: 2023-10-05T11:42:46+08:00
Last Date: 2024-03-08T22:20:32+08:00
References: 
---
## Abstract 
---
- Also known as **Public key Cryptography** or **Public Private Key**
- Achieved with [[#Public Key]] & [[#Private Key]] which are mathematically related
- What **Public Key encrypts** can only be decrypted by Private Key (used in [[TLS 1.2#Symmetric Key Exchange]])
- What **Private Key encrypts** can only be decrypted by Public Key (used in [[Digital Signature]])

>[!success] Convenient
> Eliminate the need to exchange keys physically

>[!caution] Computationally Heavy
> Compared to [[Symmetric Cryptography]], so we usually use asymmetric cryptography to exchange the symmetric key and use symmetric cryptography for the rest of the secure communication

>[!tip]- Verify the keys visually
> ```bash
> ssh-keygen -lv -f /path/to/your/key
> ```

### Public Key
- Distributed to everyone & anyone
### Private Key
- Should be kept 100% secret to the owner


## Common  Asymmetric Cryptography Algo
---
### RSA
- **Rivest-Shamir-Adleman**
- An [[Algorithm]] used to generate [[#Public Key]] & [[#Private Key]]
- Relies on the difficulty of factoring large [[Composite number]] into their [[Prime Number (质数)]] factor
### ECDSA 
- **Elliptic Curve Digital Signature Algorithm**
- An [[Algorithm]] used to generate [[#Public Key]] & [[#Private Key]]
### EdDSA, ED25519 
- **Edwards-curve Digital Signature Algorithm**
- An [[Algorithm]] used to generate [[#Public Key]] & [[#Private Key]]