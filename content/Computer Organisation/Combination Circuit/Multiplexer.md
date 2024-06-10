---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2024-06-10, 21:12
Last Date: 2024-06-10T21:21:46+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Short form `Mux`
- A multiplexer is a [[Combination Circuit]] that selects **one** of **several input signals** and forwards the selected input **into a single line**. It uses **selection lines**(**control signals**) to **choose** which input to send to the output

>[!example] General example
> An **8-to-1 multiplexer** has **8 input lines**, **3 selection lines** (to choose between the 8 inputs), and **1 output line**. Depending on the combination of the selection lines, one of the 8 inputs is connected to the output.

### De-multiplexer
- Short form `Demux`
- A demultiplexer is the reverse of a [[Multiplexer]]. It takes a **single input** and channels it to **one of several output lines**, determined by the **selection lines**(**control signals**)

>[!example] General example
> A **1-to-4 demultiplexer** has **1 input line**, **2 selection lines** (to choose between the 4 outputs), and **4 output lines**. The input signal is routed to one of the 4 output lines based on the selection line combination.
