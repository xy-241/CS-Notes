---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2024-01-02, 00:00
Last Date: 2024-01-02T10:54:37+08:00
References: 
draft: 
---
## Abstract
---
- A [[Queue (FIFO)]] that decouple [[Compute Server]] into 2 parts - [[#Message Queue Producer]] and [[#Message Queue Consumer]]
- 


## Components
---
### Message Queue Message
- Asynchronous request
### Message Queue Producer 
- Create [[#Message Queue Message]], and publish them to a [[Message Queue (消息队列)]]
### Message Queue Consumer
- Also known as **Message Queue Subscriber**
- Connect to the [[Message Queue (消息队列)]], and perform actions defined by the [[#Message Queue Message]]