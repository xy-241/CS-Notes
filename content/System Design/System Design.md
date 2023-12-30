---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-12-30, 01:04
Last Date: 2023-12-30T21:39:34+08:00
References: 
draft: 
---
## Abstract
---
- Designing robust and efficient systems that fulfil the needs of [[Host#Client]] smoothly 

## Availability (可用性)
---
- **Refers to** the percentage of time that a system is operational and available for use
- **It ensures** the system is accessible when needed, minimizing downtime and maintaining a consistent user experience

## Scalability (可扩展性)
---
- **Refers to** the capability of a system to handle a growing amount of work, or its potential to be enlarged to accommodate that growth
- **It ensures** system can handle increased load efficiently by adding resources or optimizing existing ones. It ensures that the system can grow to meet the demands of a larger user base or increased data volume, ensuring [[#Availability]]

### Vertical Scaling
- Basically adding more [[CPU]] and [[Main Memory]] to a single [[Host#Server]]
- Simple to implement, great option when traffic is low


#### Vertical Scaling Limitations
**Hard Limit**
- It is impossible to add unlimited [[CPU]] and [[Main Memory]] to a single [[Host#Server]]

**No Failover**
- If one server goes down, the website/app goes down with it completely. No [[#Fault Tolerance (容错性)]]

### Horizontal Scaling
- Basically adding more [[Host#Server]], handle the traffic in [[High-performance Computing#Parallelism (并行性)]]
- More desirable for large scale applications due to [[#Vertical Scaling Limitations]]
- Usually has a [[Load Balancer]] sits between the client and server, to distribute the traffic evenly to the servers

## Fault Tolerance (容错性)
---
- **Refers to** a system's ability to continue operating and providing its intended services even in the presence of hardware or software faults
- **It ensures** that a system can recover from failures, keeping disruptions minimal and maintaining the [[#Availability]] of services
- **Fault Tolerance** for **stateless system** can be achieved with [[Load Balancer#Failover Capability|Load Balancer's Failover Capability]]
- **Fault Tolerance** for **stateful system** can be achieved with [[Replicated State Machine]]

## Reliability (可靠性)
---
- **Refers to** the ability of a system to perform a specified function *without failure over a specified period*
- **It ensures** consistent and predictable behavior of a system. It involves minimizing the chances of failures and, in case of failures, having mechanisms in place for quick recovery




