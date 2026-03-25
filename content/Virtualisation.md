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
Last Date: 2026-03-25T23:37:45+08:00
References:
draft:
description: Understand the isolation spectrum from V8 isolates to Firecracker microVMs, gVisor sandboxing, GPU passthrough with NVProxy, and how KVM enables hardware-level virtualisation
---
## Abstract
---
- **Virtualisation** is a software emulation of hardware, allowing multiple [[OS]] to run inside a host OS
- More broadly, isolation is a spectrum of techniques from lightweight process-level sandboxes to full hardware-level VMs

>[!important] Type 1 hypervisor
> ![[type1_hypervisor.png|500]]

>[!important] Type 2 hypervisor
> ![[type2_hypervisor.png|500]]

## Isolation Spectrum
---
- Different workloads need different trade-offs between isolation strength, performance, and flexibility

```
V8 Isolates (workerd)      ← process-level, lightest, JS/WASM only
       ↓
Containers (Docker/runc)   ← OS-level, shared kernel, namespaces + cgroups
       ↓
gVisor (Sentry)            ← user-space kernel, stronger than containers
       ↓
Firecracker (microVM)      ← hardware-level via KVM, own guest kernel
       ↓
QEMU (full VM)             ← full machine emulation, heaviest
```

## V8 Isolates
---
- The lightest form of isolation. Each isolate is a sandboxed instance of the [V8 JavaScript engine](https://v8.dev/) (the same engine in Chrome and [[Node.js]]), running in its own memory space within a single process
- Supports **JavaScript**, **TypeScript**, and **WebAssembly** (compiled from Rust, C, Go, etc.), but cannot run arbitrary system commands or access the filesystem
- Cloudflare Workers uses this model via [workerd](https://github.com/cloudflare/workerd), their open-source V8-based runtime. Multiple Workers run as separate isolates within the same process, making cold starts near-instant (milliseconds) with minimal memory overhead
- The trade-off: fast and efficient, but restricted. No [[System Call (系统调用)|system calls]], no arbitrary binaries. For workloads that need a full Linux environment, [[#Firecracker]] or [[#gVisor]] is needed

## Device Model
---
- In virtualisation, a **device model** is the set of virtual hardware devices that the hypervisor presents to the guest VM. This includes things like virtual network cards, virtual disks, serial consoles, and USB controllers. These are emulated versions of real [[IO Device|IO devices]]
- The guest VM interacts with these virtual devices as if they were real hardware, but the hypervisor translates those interactions to the actual host hardware via the [[Device Controller]]
- A larger device model (more virtual devices) means more code paths, which increases the attack surface. [[#Firecracker]] deliberately uses a minimal device model (virtio-net, virtio-block, serial console) with no USB controllers, no [[IO Bus|PCI bus]], and no [[GPU]] support

## PCI Passthrough
---
- A technique that lets a VM **directly access a physical PCI device** (like a [[GPU]]) on the host via the [[IO Bus|PCI bus]], bypassing the hypervisor for near-native performance
- The VM talks directly to the hardware through the host’s PCI bus, so the hypervisor is not in the data path
- [[#Firecracker]] does not support PCI passthrough because it does not emulate a PCI bus at all. This is a deliberate design choice to keep the [[#Device Model]] minimal. As a result, Firecracker microVMs **cannot use GPUs**
- [[#gVisor]] takes a different approach with [[#NVProxy]], intercepting GPU calls at the syscall level instead of using PCI passthrough

## Firecracker
---
- [Firecracker](https://firecracker-microvm.github.io/) runs **microVMs**, which are extremely lightweight virtual machines that run on top of [KVM](https://linux-kvm.org/) (Kernel-based Virtual Machine)
- **KVM** is a Linux kernel module that turns the host kernel into a type 1 hypervisor. Similar to how [FUSE](https://en.wikipedia.org/wiki/Filesystem_in_Userspace) is a kernel module that enables user-space filesystems, KVM is a kernel module that enables the kernel to manage virtual machines
- Each microVM runs its own separate **guest kernel**, providing hardware-level isolation that’s much stronger than container (OS-level) isolation
- Because they boot extremely fast and use very little memory, they’re used by [[AWS Lambda]] and AWS Fargate to safely run multi-tenant workloads at massive scale

>[!caution] KVM as an attack surface
> MicroVMs still go through KVM and the host kernel to access hardware: guest kernel → hypercall → KVM → host kernel → hardware. This means KVM is part of the attack surface. A vulnerability in KVM could theoretically allow an attacker to escape the microVM.
>
> This risk is mitigated by:
> - KVM’s codebase is small and heavily audited (it’s in the mainline Linux kernel)
> - Firecracker’s minimal [[#Device Model]] reduces code paths that could be exploited
> - Firecracker uses **seccomp filters** and a **jailer** process to restrict what the VMM process itself can do, even if compromised

## gVisor
---
- [gVisor](https://gvisor.dev/) is a container runtime that improves security by running applications inside a user-space kernel called **Sentry**, which intercepts and emulates [[System Call (系统调用)|system calls]] instead of letting them reach the host kernel directly
- **`runsc`** is gVisor’s runtime binary that replaces [[Docker]]’s default `runc`. It is responsible for setting up and launching the Sentry kernel inside the sandbox. `runsc` is the runtime, **Sentry** is the user-space kernel
- This design greatly reduces the attack surface and protects the host from compromised containers, though it comes with some performance overhead
- In the [[#Isolation Spectrum]], gVisor sits between regular containers and [[#Firecracker]]. It offers stronger isolation than [[Linux Namespace]] + [[Linux Namespace#Cgroups|cgroups]] alone, but less than hardware-based microVMs

### NVProxy
- gVisor’s [[GPU]] bridge that intercepts [[CUDA]] calls from the sandbox and proxies them to the host’s NVIDIA driver. This is possible because gVisor operates at the syscall level, allowing it to selectively forward GPU-related calls while still sandboxing everything else
- [[#Firecracker]] cannot do this because its minimal [[#Device Model]] lacks [[#PCI Passthrough]] entirely
- Despite some overhead from the proxying layer, NVProxy supports most CUDA-based AI workloads effectively, making gVisor suitable for secure GPU compute where slight speed trade-offs are acceptable

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