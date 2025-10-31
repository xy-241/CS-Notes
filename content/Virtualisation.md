---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - docker
Creation Date: 2024-03-06, 14:20
Last Date: 2025-10-31T23:55:24+08:00
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