---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-10-15, 22:06
Last Date: 2025-10-31T23:56:18+08:00
References:
draft:
description: Some internals of containerisation
---
## Abstract
---
- VMs provide isolation of a whole machine, while containerisation provides isolation of a [[Process (进程)]]

## Kubernetes Containerization Workflow
---
1. **Kubelet** (node agent) receives Pod spec.
2. It talks to the **CRI runtime** (containerd, CRI-O).
3. Kubelet asks the runtime to: create containers & create the Pod-level cgroup
4. The containers inside the Pod share: the Pod cgroup, namespaces (some shared, some isolated)
5. Kubernetes writes Pod `cpuLimits`, `memoryLimits`, etc. into cgroup controllers.
6. Kernel enforces those resource restrictions dynamically.