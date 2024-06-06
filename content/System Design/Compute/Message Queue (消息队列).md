---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2024-01-02, 00:00
Last Date: 2024-01-22T13:37:52+08:00
References: 
draft: 
---
## Abstract
---
![[message_queue.png|500]]

- A [[Queue]] that decouples [[Compute Server]] into 2 parts - [[#Message Queue Producer]] and [[#Message Queue Consumer]]
- The message queue serves as a buffer and distributes [[#Message Queue Message]]. Thus supporting *asynchronous communication*

![[message_queue_example.png|500]]
- The above application supports photo customization, including cropping, sharpening, blurring, etc. Those customization tasks take time to complete
- Message Queue Producer publishes photo processing jobs (Message Queue Message) to the message queue. Message Queue Consumer pick up jobs from the message queue and asynchronously perform photo customization tasks
</br>

- High [[System Design#Scalability (可扩展性)]] since the producer and consumer can be scaled independently. When the size of the queue becomes large, more workers are added to reduce the processing time. When queue is empty most of the time, the number of workers can be reduced


## Components
---
### Message Queue Message
- Asynchronous request
### Message Queue Producer 
- Create [[#Message Queue Message]], and publish them to a [[Message Queue (消息队列)]]
### Message Queue Consumer
- Also known as **Message Queue Subscriber**
- Connect to the [[Message Queue (消息队列)]], and perform actions defined by the [[#Message Queue Message]]