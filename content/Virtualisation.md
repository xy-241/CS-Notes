---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - docker
Creation Date: 2024-03-06, 14:20
Last Date: 2025-01-22T20:50:32+08:00
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