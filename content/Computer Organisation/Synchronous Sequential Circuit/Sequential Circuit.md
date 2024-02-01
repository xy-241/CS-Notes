---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-15T19:39:44
Last Date: 2024-02-02T01:01:32+07:00
References: 
---
## Abstract
---
![[sequential_circuit.png|500]]
- Present output = [[Combination Circuit]] + [[#Sequential Circuit State]]
- We need to store the past output, thus a [[Main Memory#Memory Element]] is needed. The diagram above has the memory element included inside
</br>

- 2 types
	- [[Synchronous Sequential Circuit]] ([[Flip-flops]])
	- [[Asynchronous Sequential Circuit]] ([[Register]])


## Terminologies
---
### Sequential Circuit State
- Also known as feedback
- Past outputs


### Multivibrator
- A class of [[Sequential Circuit]]
	1. [[Bistable (2 stable states)]]
	2. [[Monostable or one-shot (1 stable state)]]
	3. [[Astable (no stable state)]]

### Level Sensitive

![[level_sensititve.png|400]]

![[level_trigger.png|400]]


- Also known as **Pulse-triggered**
- Output is affected immediately with by the input as long as the control signal ([[Clock Oscillator#Clock Signal]], high in the diagram) is active
</br>

- **Active High** when level sensitive is high
- **Active Low** when level sensitive is low