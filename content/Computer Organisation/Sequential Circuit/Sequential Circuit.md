---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-15T19:39:44
Last Date: 2024-02-04T18:23:00+08:00
References: 
---
## Abstract
---
- Present output = [[Combination Circuit]] + [[#Sequential Circuit State]]
- We need to store the past output, thus a [[Main Memory#Memory Element]] is needed. The diagram above has the memory element included inside
</br>

### Latch
- [[Asynchronous Sequential Circuit]] that is able to remember a [[Computer Data Representation#Bit]] when the **input power turns to inactive**

#### Steering Gate
- Introduces a **control input** that determines whether the [[#Latch]] is in a **transparent**(allows data to pass through) or **opaque** state(holds its current state, blocking any changes from the input)
- When the steering gate is active (usually set to a certain logic level), the latch becomes transparent
- Often used in digital circuits for **synchronization** and **control purposes**

### Flip-flops
- [[Synchronous Sequential Circuit]]



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

### Edge-triggered

![[positive_edge_triggered.png|400]]

- Output only changes at a specific time, usually when [[Clock Oscillator#Clock Signal]] change from one edge to another
</br>

**2 types**
- **Positive edge triggering:** Transition from a low voltage (0) to a high voltage (1) on the clock signal
- **Negative edge triggering:** Transition from a high voltage (1) to a low voltage (0) on the clock signal