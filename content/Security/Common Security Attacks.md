---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
Creation Date: 2024-01-30, 10:09
Last Date: 2024-01-30T12:45:07+08:00
References: 
draft: 
description: A list of common cyber attacks
---
## Abstract
---
- In the cybersecurity world, somehow there is a lot of weird names for different forms of attacks 🤔

### Side-channel Attack
- An attacker monitors physical characteristics of a system, such as power consumption or timing, to infer information about its operations
- For example, in a power analysis attack, variations in power usage during cryptographic operations can reveal details about the secret key being used, allowing the attacker to deduce sensitive information without directly accessing the key itself
- Check [Side-channel attack - Wikipedia](https://en.wikipedia.org/wiki/Side-channel_attack) for more details

### Birthday Attack
- An attack that makes use of [[Probability Problems#Birthday Problem]] to find collisions in [[Hash Function]] more efficiently than a straightforward brute-force search