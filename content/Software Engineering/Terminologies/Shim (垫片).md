---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-11-11T16:21:00
Last Date: 
References:
---
## Abstract
- Focuses on *Compatibility* or *Portability*
- A *small piece of code* that acts as a *bridge* between two *incompatible* components or layers of a software system
- Common implementation are [[#API (接口垫片)]] & [[#Compatibility (兼容性垫片)]] etc

## Terminologies
### API (接口垫片)
- used to implement new APIs that are not supported by the underlying [[OS]] or hardware
### Compatibility (兼容性垫片)
- Used to provide compatibility between different versions of software
- When a new version of software is released, it may break compatibility with older applications that rely on the older version's APIs
- A *shim* can be used to translate between the two versions of the API, allowing older applications to continue to work with the newer software
- A *shim* might be used to adapt a Windows application to run on Linux



