---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-09-04T19:50:49+08:00
Last Date: 2024-02-04T18:10:19+08:00
References: 
---
## Abstract
--- 
- [[Sequential Circuit]] that is [[Sequential Circuit#Level Sensitive]], thus the changes to state are not **syn·chro·nized** to a particular timing
- Usually operate based on **events** or **conditions**

>[!caution] Limited Control over State Changes
> ![[async_sequential_circuit_state_change_limitation.gif|500]]
> The above 4-bit [[Register]] is made of 4 [[Data Latch]]. When the **Store Input** is active, the above asynchronous circuit will keep updating the state. If we want a particular state, we need to turn the Store Input to inactive which is hard to achieve with asynchronous circuit in a reliable way. Because everything happens in a fraction of a second.
> 
> If we want to have precise control over state changes in a reliable manner, we can use a [[Synchronous Sequential Circuit]] that is synchronised with a [[Clock Oscillator]].



>[!example]
>- [[Set Reset Latch]]
>- [[Data Latch]]


