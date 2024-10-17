---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - docker
Creation Date: 2024-03-06, 14:20
Last Date: 2024-10-17T17:02:50+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Virtualisation is a technology that allows you to create multiple simulated, or "virtual" computer environments on a single physical machine


## Virtualisation Tools
---
### Vagrant
- A piece of software to manage VMs with ease
</br>

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