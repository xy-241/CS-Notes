---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
  - arduino
Creation Date: 2024-01-11, 21:59
Last Date: 2024-02-24T18:33:27+08:00
References: 
draft: 
---
## Abstract
---
- A hardware component inside [[CPU]] that generates [[#Clock Signal]] to control the speed of CPU processing [[Instruction]]


>[!success] Synchronisation
> Clock signal is generated at constant interval, this helps to calculate time and synchronize the internal operations

>[!example]- Arduino Uno
> **External Clock Oscillator**
> ![[arduino_uno_clock_oscillator.png|300]]
> - **16MHz**, named indicating 16.000H9H
> 


## Clock Signal
---
![[clock_signal.png|300]]
- Represented with `CLK`
- The continuous oscillating square wave that drives the timing of a digital system
- Used to synchronise the [[Operation]] of various components within the circuit


### Clock Cycle
![[clock_cycle.png|300]]
- Refers to the time interval between two successive rising (or falling) edges of the [[Clock Signal]]

### Clock Frequency
- The total number of [[#Clock Cycle]] in one second

### Duty Cycle
![[duty_cycle.png|350]]

- The ratio of time the [[Clock Signal]] is in the high state (logical 1) to the total period of the signal

## References
---
- What is an oscillator? Oscillator tutorial in HD! - YouTube
![What is an oscillator? Oscillator tutorial in HD! - YouTube](https://youtu.be/aJAZHPqEUKU?si=Pt-hOeXTN6z8j6Po&t=157)
