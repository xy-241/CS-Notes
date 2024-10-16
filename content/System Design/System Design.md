---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-12-30, 01:04
Last Date: 2024-10-16T13:17:35+08:00
References: 
draft: 
---
## Abstract
---
- Designing robust and efficient systems that fulfil the needs of [[Host#Client]] smoothly 
- [Kahoot! Quizzes](https://create.kahoot.it/share/availability-vs-scalability-vs-fault-tolerance-vs-reliability/89d22c1e-ff30-4f17-b65f-f1f7c0e37866) to learn about [[#Availability (可用性)]] vs [[#Scalability (可扩展性)]] vs [[#Fault Tolerance (容错性)]] vs [[#Reliability (可靠性)]]

## Availability (可用性)
---
- **Refers to** the percentage of time that a system is operational and available for use
- **It ensures** the system is accessible when needed, minimizing downtime and maintaining a consistent user experience
- Can be achieved directly using [[Database Replication (数据库复制)#High Availability|Database Replication]], [[Multi Data Center Setup]] or indirectly with good [[#Fault Tolerance (容错性)]] and good [[#Reliability (可靠性)]]

## Scalability (可扩展性)
---
- **Refers to** the capability of a system to handle a growing amount of work, or its potential to be enlarged to accommodate that growth
- **It ensures** system can handle increased load efficiently by adding resources or optimizing existing ones. It ensures that the system can grow to meet the demands of a larger user base or increased data volume, ensuring [[#Availability]]
- Can be achieved with [[Cache Server]], [[Compute Server#Stateless Compute Server]], [[Message Queue (消息队列)]] & [[Database Scaling]]

### Vertical Scaling
- Basically adding more [[CPU]] and [[Main Memory]] to a single [[Host#Server]]
- Simple to implement, great option when traffic is low


#### Vertical Scaling Limitations
**Hard Limit**
- It is impossible to add unlimited [[CPU]], [[Main Memory]] & [[Disk]] etc to a single [[Host#Server]]

**No Failover**
- [[#Single Point of Failure]]. No [[#Fault Tolerance (容错性)]]

**Expensive**
- Powerful servers are much more expensive

### Horizontal Scaling
- Basically adding more [[Host#Server]], handle the traffic in [[Concurrency (并发)#Parallelism (并行性)]]
- More desirable for large scale applications due to [[#Vertical Scaling Limitations]]
- Usually has a [[Load Balancer]] sits between the client and server, to distribute the traffic evenly to the servers


>[!important] CAP Theorem in distributed systems
> You can only choose two out of the three.
> 
> **Consistency**
> - All nodes display identical data, guaranteeing that reads always reflect the most recent write.
> 
> **Availability**
> - Every request receives a response, **without guarantee that it contains the most recent writes**.
>   
> **Partition Tolerance**
> - The system continues to operate despite network failures.
>
> If a system prioritizes **consistency** (CP), it may become unavailable during a partition to ensure that data remains consistent across nodes.
> 
> If a system prioritises **availability** (AP), it may sacrifice consistency during a partition, allowing nodes in different partitions to respond, even though they might not have the latest data.

## Fault Tolerance (容错性)
---
- **Refers to** a system's ability to continue operating and providing its intended services even in the presence of hardware or software faults
- **It ensures** that a system can recover from failures, keeping disruptions minimal and maintaining the [[#Availability]] of services
- **Fault Tolerance** for **stateless system** can be achieved with [[Load Balancer#Failover Capability|Load Balancer's Failover Capability]] with [[Compute Server#Stateless Compute Server]] etc
- **Fault Tolerance** for **stateful system** can be achieved with [[Database Replication (数据库复制)#High Fault Tolerance|Database Replication]] and [[Replicated State Machine]] etc
- Or both with [[Multi Data Center Setup]]

### Single Point of Failure
<img src="https://proxy-prod.omnivore-image-cache.app/0x0,snXjF9Ub2BnqAv7-t65xgQIxxskkFXoFQ0Yu-f0GeEoo/https://bytebytego.com/_next/image?url=%2Fimages%2Fcourses%2Fsystem-design-interview%2Fscale-from-zero-to-millions-of-users%2Ffigure-1-8-AVKYQBAQ.png&w=828&q=75" height="300">

- A part of a system that, if it fails, will stop the entire system from working

## Reliability (可靠性)
---
- **Refers to** the ability of a system to perform a specified function *without failure over a specified period*
- **It ensures** consistent and predictable behavior of a system. It involves minimizing the chances of failures and, in case of failures, having mechanisms in place for quick recovery
- Can be achieved with [[Monitoring]] and automation like ci/cd pipeline

## Efficiency 
---
>[!important] Latency
> Delay in first response.


>[!important] Throughput
> Operations per time unit.

## References
---
- [ByteByteGo](https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users)
- [I ACED my Technical Interviews knowing these System Design Basics - YouTube](https://youtu.be/FxAom29OEKE?si=VI6J6TkYQHVM4aEO)




