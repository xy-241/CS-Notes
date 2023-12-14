---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - security
Creation Date: 2023-12-13T18:10:45+08:00
Last Date: 2023-12-13T18:10:45+08:00
References:
---
## Abstract
---
- Prove that something from another entity([[#Signer]]) is really from that entity
- [[Asymmetric Cryptography#Private Key]] is used to generate the *signature*
- [[Asymmetric Cryptography#Public Key]] is distributed for verification of the *signature*
- Consists of a [[#Message]] [[Hash#Digest]] encrypted with the message [[#Signer]]'s [[Asymmetric Cryptography#Private Key]]. The extra [[Hash]] process is to deal with [[#Con]]

## Benefits
---
1. Preventing [[Man-in-the-middle Attack]]

## Con
---
- Doesn't work well on document that is too short or too long. This is can helped with [[Hash]] the document first before signing. We can also add a bit padding to the [[Hash#Digest]] to make it longer, thus more secure
## Terminologies 
---
### Signer
- Can be [[Certificate Authority (CA)]]

### Verifier

### Message
- Can be a [[Digital Certificate]]