---
Author:
  - Xinyang YU
  - sai
Author Profile:
  - https://linkedin.com/in/xinyang-yu
  - https://saiutkarsh.netlify.app/
tags:
  - OS
  - docker
Creation Date: 2024-03-06, 14:20
Last Date: 2025-11-10T22:17:50+08:00
References:
draft:
description:
---
## Abstract
---
- Virtualisation is a **software emulation of hardware**. It allows you to have **multiple [[OS]]** running inside **a host OS**

>[!important] Type 1 hypervisor
> ![[type1_hypervisor.png|500]]

>[!important] Type 2 hypervisor
> ![[type2_hypervisor.png|500]]

## Firecracker
---
- Firecracker runs **microVMs**, which are extremely lightweight virtual machines that run on top of **KVM**, a type 1 hypervisor. Each microVM has its **own guest kernel**, providing hardware-level isolation that’s much stronger than container (OS-level) isolation
- Because they boot extremely fast and use very little memory, they’re used by AWS Lambda and AWS Fargate to safely run multi-tenant workloads at massive scale

>[!important] Virtualisation limitation
> Unlike Docker or gVisor, it doesn’t share the host kernel or oversubscribe CPU and memory, each microVM gets fixed, dedicated resources for predictable performance and strong security. 
> 
> This minimalism also means it lacks PCIe virtualisation, making GPU passthrough (including NVIDIA MIG slicing) difficult to implement. While gVisor offers software-based isolation using a user-space kernel (`runsc`), Firecracker enforces true hardware isolation via KVM, trading flexibility (like GPU and overcommit support) for tighter security and deterministic behavior.

## gVisor
---
- A sandboxing runtime that improves container security by running applications inside a user-space kernel called **Sentry**, which intercepts and emulates [[System Call (系统调用)|system calls ]]i nstead of letting them reach the host kernel directly. 
- Its runtime, **`runsc`**, replaces Docker’s default `runc` to provide this isolation transparently. This design greatly reduces the attack surface and protects the host from compromised containers, though it comes with some performance overhead. 
- gVisor sits between Docker and full virtualization tools like [[#Firecracker|Firecracker]], offering stronger isolation than regular containers but less than hardware-based microVMs.


### NVProxy
- gVisor’s GPU bridge that safely forwards CUDA calls from the sandbox to the host’s NVIDIA driver, which can slightly slow GPU communication.
- Despite this potential limitation, NVProxy still supports most CUDA-based AI workloads effectively, making gVisor suitable for secure AI use cases where slight speed trade-offs are acceptable.

## Virtualisation Tools
---
### Vagrant
- A piece of software to manage VMs with ease

1. [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Install Vagrant
```bash
brew tap hashicorp/tap
brew install hashicorp/tap/hashicorp-vagrant
vagrant plugin install vagrant-share
```


### QEMU
- Powerful open-source machine **emulator** and **virtualizer**

```bash
brew install qemu
```