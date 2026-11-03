---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-06-10, 21:12
Last Date: 2024-10-21T06:28:58+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Short form `Mux`, also known as **data selector**
- A multiplexer is a [[Combination Circuit]] that selects **one** of **several input signals** and forwards the selected input **into a single line**. It uses **selection lines**(**control signals**) to **choose** which input to send to the output
- uses $\log_2(2) = 1 bits$ to represent the number of instructions 

### Example of How It mux Works

Let's consider a simple 4-to-1 multiplexer (4 inputs, 1 output):

- **Inputs**: \( I_0, I_1, I_2, I_3 \)
- **Select Lines**: \( S_1, S_0 \)
- **Output**: \( Y \)

| \( S_1 \) | \( S_0 \) | Output \( Y \)  |
|-----------|-----------|-----------------|
| 0         | 0         | \( I_0 \)       |
| 0         | 1         | \( I_1 \)       |
| 1         | 0         | \( I_2 \)       |
| 1         | 1         | \( I_3 \)       |

In this 4-to-1 MUX:
- If \( S_1 = 0 \) and \( S_0 = 0 \), the output \( Y \) is \( I_0 \)
- If \( S_1 = 0 \) and \( S_0 = 1 \), the output \( Y \) is \( I_1 \)
- If \( S_1 = 1 \) and \( S_0 = 0 \), the output \( Y \) is \( I_2 \)
- If \( S_1 = 1 \) and \( S_0 = 1 \), the output \( Y \) is \( I_3 \)

---


>[!example] General example
> An **8-to-1 multiplexer** has **8 input lines**, **3 selection lines** (to choose between the 8 inputs), and **1 output line**. Depending on the combination of the selection lines, one of the 8 inputs is connected to the output.

>[!important]
> ![[multiplexer_circuit.png|500]]
> 
> We can look at the input lines as [[Minterm|minterms]], and the circuit can be implemented in 2 ways as shown above.
### De-multiplexer
- Short form `Demux`
- A demultiplexer is the reverse of a [[Multiplexer]]. It takes a **single input** and channels it to **one of several output lines**, determined by the **selection lines**(**control signals**)

>[!example] General example
> A **1-to-4 demultiplexer** has **1 input line**, **2 selection lines** (to choose between the 4 outputs), and **4 output lines**. The input signal is routed to one of the 4 output lines based on the selection line combination.

>[!important]
> ![[demux_decoder.png|500]]
> 
> `Demux` has the same circuit as a [[Decoder|decoder]] **with enable**, where the **enable is the data** and the **inputs to be decoded are the control signals**.