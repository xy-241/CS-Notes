---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2024-01-07, 17:59
Last Date: 2024-07-13T19:30:29+08:00
References: 
draft: 
---
## Abstract
---
- A swap space is an area on a **storage device** (usually a [[Hard Disk]] or [[Flash Memory]]) that is used as part of [[Virtual Memory]]. When the physical [[Main Memory]] of a computer is **fully utilised**, the [[Kernel]] may transfer some data from the main memory to the swap space to **free up physical memory for other tasks**. This allows the system to continue running applications and processes even when the **main memory is insufficient**



>[!code] Check for swap space usage on Linux
> `free -h`


### Paging
- Also known as **Swapping**
- The process of swapping [[Memory Page|memory page]] between [[Main Memory]] and [[Swap Space]]

>[!important] Why do we need paging?
> You will **never need** to perform paging if you have **enough main memory**. 
> 
> Paging **eliminates crashes** caused by **running out of main memory**.

>[!important] Paging Mechanism
> **[[Page Table#Page Table Entry|Page Table Entry]] Indicates Page is in Secondary Storage** (takes about $1$ [[Clock Oscillator#Clock Cycle|clock cycle]])
> 
> 1. **CPU Generates a [[Page Fault]] [[Interrupts (中断)|Interrupt]]:** The [[CPU]] encounters a page table entry that indicates the requested data resides in secondary storage (not [[Main Memory|main memory]]), triggering a page fault interrupt. (takes about $100$ clock cycles.)
> 2. **Interrupt Handler Initiates Page Replacement:** The corresponding [[Interrupt Handler|interrupt handler]] is invoked and selects a victim [[Memory Page|memory page]] in main memory to be replaced. (takes about $10,000$ clock cycles.)
> 3. **Dirty Page Handling:** If the victim page has been modified (is "[[Memory Page#Dirty Memory Page|dirty]]"), the interrupt handler writes it back to secondary storage before proceeding. (takes about $40,000,000$ clock cycles.)
> 4. **Page Fetch from Secondary Storage:** The interrupt handler reads the required page from secondary storage and loads it into the vacated space in main memory. (takes about $40,000,000$ clock cycles.)
> 5. **Page Table Update:** The page table entry is updated to reflect the new physical location of the fetched page in main memory. (takes about $1,000$ clock cycles.)
> 6. **Resume Execution:** The interrupt handler returns control to the [[Instruction|instruction]] that originally caused the page fault, allowing execution to continue seamlessly. (takes about $10,000$ clock cycles.)


>[!attention] Significant performance hit
> In the time it takes to handle one page fault, a modern CPU can execute **80 million clock cycles**.
>
> Page faults are the **SLOWEST** possible thing that can happen to a computer (except for human interaction). This is why buying more memory may make your computer faster.

>[!info] Some  system don't page
> iOS kills your program if you use too much memory.
> 
> 
> OS X 10.9 uses [[#ZSwap]], which compresses the program first and then resorts to paging if necessary.


## ZRAM
---
- ZRAM is a [[Kernel#Kernel Module]] that **compresses unused data** in [[Main Memory]] and moves it back to the Main Memory. We basically have [[Swap Space]] inside the main memory

>[!important]
> ZRAM focuses on **optimising main memory usage** by **compressing pages directly in main memory**. Zram allocates a **dedicated area in main memory** for its compressed memory storage. You can check the status of your ZRAM using `sudo swapon --show`.

>[!success] More memory!
> When data is compressed, it typically occupies **one-quarter of its original size**, **freeing the remaining three-quarters** for other applications to use.

>[!success] Speed
> [[#Paging]] is much faster since **everything happens inside the main memory**.

>[!attention]
> CPU has to **work harder** to compress and decompress the data. This also **increases power consumption**.



## ZSwap
---
- A feature of [[Linux Kernel]] that **intercepts** [[Memory Page|memory pages]] that are about to be [[#Paging|swapped out]] to the [[Swap Space]], **compress them**, and **stores them temporarily in [[Main Memory]]** instead of immediately writing them to the swap space

>[!important]
> Zswap focuses on **improving** the **efficiency** of [[Swap Space]].

>[!success] Better swapping performance
> ZSwap **reduces** the amount of **data written to slower swap space**, which can improve performance by **reducing slow [[IO Device#IO Operation]]**.


## References
---
- [Arch ZRAM](https://wiki.archlinux.org/title/Zram)
- [(INFO)What is zram and how does it work???](https://xdaforums.com/t/info-what-is-zram-and-how-does-it-work.2023568/)