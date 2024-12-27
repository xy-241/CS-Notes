---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-19T17:35:54
Last Date: 2024-12-27T13:37:36+08:00
References: 
description: The timer interrupt mechanism is used by the process scheduler to trigger hardware interrupts for preemptive CPU scheduling, with the timer interrupt interval being the time duration between two consecutive interrupts generated when the timer chip expires
---
## Abstract
---
- Used by [[Process Scheduling#Process Scheduler]] to trigger [[Interrupts (中断)#Hardware interrupts (外中断]] for [[CPU Scheduling Techniques#Preemptive Scheduling]] 
- [Example](https://en.wikipedia.org/wiki/Programmable_interval_timer)

### Interval of Timer Interrupt
- The **time duration** between two consecutive [[Interrupts (中断)#Hardware Interrupts (外中断)|interrupts]] triggered by a [[Timer Chip]]

### Expiring
- An [[Interrupts (中断)#Hardware Interrupts (外中断)|interrupt]] is generated when the [[Timer Chip]] expires.

