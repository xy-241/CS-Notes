---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-09-25T18:07:00
Last Date: 2025-11-28T13:25:42+08:00
description: "A clear explanation of exponential backoff and jittered exponential backoff: how networks like Ethernet, Wi-Fi, and systems such as AWS, gRPC, and Kubernetes use randomized, exponentially increasing wait times to prevent collisions and avoid the thundering-herd problem for smoother, more stable retry behavior."
---
## Abstract
---
- Handled [[CSMA#Collision]] by making the sending computers wait for a **random time interval** before re-sending the [[Data]].
- If a collision occurs again, indicating [[Network Congestion]], the waiting time will increase exponentially to reduce the rate of [[Collisions]]
- Used by [[Ethernet]], [[Wi-Fi]], and in the [[CSMA]] approach.

## Jittered Exponential Backoff
---
- Instead of always multiplying by a fixed exponent like `3`, you randomize that exponent each retry. For example, anywhere between 3 to 4, so everyone’s retry schedule spreads out naturally. 
- This avoids the classic **thundering-herd problem** where all clients back off, wake up at the same time, and slam the server again. It’s a small tweak, but it makes the retry pattern a lot smoother and more stable in practice.
- This is widely used in AWS, [[gRPC]] & [[Kubernetes]] etc.