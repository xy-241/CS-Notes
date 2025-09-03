---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-09-27T01:39:00
Last Date: 2025-09-04T00:57:53+08:00
description: Learn how the CPU, MMU, and page tables work together in virtual memory. Covers CR3 register, VPN bits, TLB misses, and page faults with clear examples.
---
## Abstract
---

![[data_retrieval_during_process_execution.svg]]

- Stands for **M**emory **M**anagement **U**nit
- Hardware component that takes a [[Virtual Memory#Virtual Address]] and translates it into a [[Main Memory#Physical Address]] via the [[Page Table]].
- This hardware-driven translation underpins [[Virtual Memory|virtual memory]], letting each [[Process (进程)|process]] see a consistent address space while the OS multiplexes physical memory.


>[!important] Kernel is free
> If there’s a [[TLB#TLB Miss|TLB miss]], the **MMU itself** (not the kernel) does a **page table walk**: it consults the [[Page Table#Multi-level Page Table|multi-level page table]] in memory to resolve the mapping.

>[!important] Kernel’s role
> The kernel doesn’t do the page walk for each access.
> 
> On boot, the kernel sets up the initial page tables and programs the MMU with:
> - How many levels to use (e.g., 4 levels on x86_64: PML4 → PDPT → PD → PT)
> - How many bits are allocated to virtual page number (VPN) vs page offset.
> - The [[Register|base pointer]] to the root page table (in CR3 on x86).
> 
> After that, the **hardware owns the fast path**. The CPU+MMU work together to do page walks transparently.

>[!important] Workflow behind TLB Miss
> 1. CPU needs a physical address → checks the TLB
> 2. TLB miss → MMU walks the page tables directly: uses CR3 (base) + VPN bits to index each level, fetches page table entries (PTEs) from memory & ends with a physical frame number (PFN).
> 3. MMU fills the TLB with the new translation.
> 4. CPU resumes execution as if nothing happened.
> 
> ⚠️ The kernel only steps in if:
> - The page walk hits a PTE marked “not present” → **page fault exception**.
> - Then the kernel decides whether to allocate a page, swap it in, or kill the process.

>[!attention]
> A [[Page Fault]] occurs when the Memory Management Unit (MMU) is unable to locate a specific [[Memory Page]] in its page table.

## References
---
- [图解|什么是缺页错误Page Fault-CSDN博客](https://blog.csdn.net/g6U8W7p06dCO99fQ3/article/details/107240849)
- [Virtual Memory: 10 Making Virtual Memory Fast - YouTube](https://youtu.be/uyrSn3qbZ8U?si=TqOhXWXu4DczN9r7)