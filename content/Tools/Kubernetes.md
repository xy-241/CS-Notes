---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-09-26, 22:41
Last Date: 2026-03-25T23:37:45+08:00
References:
draft:
description: Kubernetes architecture covering control plane, worker nodes, containerization workflow, and GPU scheduling with NVIDIA Device Plugin on EKS 
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
>

>[!tool] Sandbox to play with k8s
> [Play with Kubernetes](https://labs.play-with-k8s.com) provides you with Linux machines that have k8s preinstalled.

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



## Containerization Workflow
---
1. **Kubelet** (node agent) receives Pod spec
2. It talks to the **CRI runtime** (containerd, CRI-O)
3. Kubelet asks the runtime to: create containers and create the Pod-level [[Linux Namespace#Cgroups|cgroup]]
4. The containers inside the Pod share: the Pod cgroup, [[Linux Namespace|namespaces]] (some shared, some isolated)
5. Kubernetes writes Pod `cpuLimits`, `memoryLimits`, etc. into cgroup controllers
6. [[Kernel]] enforces those resource restrictions dynamically

## GPU Scheduling
---
- By default, Kubernetes does not know GPUs exist on a node. The [NVIDIA Device Plugin](https://github.com/NVIDIA/k8s-device-plugin) is a **DaemonSet** that runs on every GPU node and registers `nvidia.com/gpu` as a schedulable resource

```yaml
# Pod spec requesting a GPU
resources:
  limits:
    nvidia.com/gpu: 1
```

- On EKS, GPU-enabled node groups use instances with NVIDIA [[GPU|GPUs]] (p4d, p5, g5, g6) and the EKS-optimized GPU AMI which comes with NVIDIA drivers pre-installed

>[!important] How it works
> The flow is: GPU instance (hardware) → NVIDIA drivers (in AMI) → NVIDIA Device Plugin (DaemonSet, exposes GPUs to k8s scheduler) → Pod requests `nvidia.com/gpu` in resource limits.
>
> Without the Device Plugin, the GPU hardware is physically present on the node but **invisible to the Kubernetes scheduler**. No pod can request or use it.

>[!tip] Cost optimization
> Use [Karpenter](https://karpenter.sh/) to auto-provision GPU nodes only when pods need them and scale to zero when idle. GPU instances are expensive, so avoiding idle nodes is critical.

## References
---
- [A visual guide to Kubernetes networking fundamentals | Opensource.com](https://opensource.com/article/22/6/kubernetes-networking-fundamentals)