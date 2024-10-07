---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-09-26, 22:41
Last Date: 2024-10-02T13:07:00+08:00
References: 
draft: 
description: 
---
## Abstract
---

>[!success] Benefits
> - Self-healing
> - automatic rollbacks
> - horizontal scaling

>[!attention] 
> - Can be complex to maintain
> - Costs associated with running nodes
> 
> Managed control planes can help mitigate complexity.
## Control Plane
---
- Runs on multiple nodes across data center zones for high availability

>[!important] Key Components
> **Controller Manager**
> - Replication Controller: Maintains the desired number of worker nodes
> - Deployment Controller: Handles rollbacks and updates
> 
> **Scheduler**
> - Schedules pods onto worker nodes, making placement decisions
> 
> **etcd**
> - Distributed key-value store
> - Stores cluster state, available resources, and health information
> - Used by other control plane components
>
> **API Server**
> - [[REST API]] interface between the [[#Control Plane|control plane]] and [[#Worker nodes|worker nodes]]
## Worker nodes
---
- Run containers, which are encapsulated within pods
- Pods are the smallest deployable units in Kubernetes
- Pods provide shared storage and networking for containers


>[!important] Key Components
> **Kubelet**
> - Communicates with the [[#Control Plane|control plane]]
> - Ensures the desired state of pods is maintained
> 
> **Container Runtime**
> - Can be [[Docker]] or another compatible runtime
> - Runs containers on worker nodes
> - Pulls images, starts/stops containers
> 
> **Kube-proxy**
> - Routes traffic to the correct pods
> - Handles load balancing
> - **Cluster networking** ensures that pods on different nodes can communicate seamlessly, so traffic can be routed between nodes without issue.



## References
---
- [A visual guide to Kubernetes networking fundamentals | Opensource.com](https://opensource.com/article/22/6/kubernetes-networking-fundamentals)