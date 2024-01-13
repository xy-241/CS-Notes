---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-01-11, 21:59
Last Date: 2024-01-13T15:37:36+08:00
References: 
draft: 
---
## Abstract
---
- A hardware component inside [[CPU]] that generates [[#Clock Signal]] to control the speed of CPU processing [[Instruction]]


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

## Terminologies 
---
### Propagation Delay
- The time it takes for the [[#Clock Signal]] to traverse the entire circuit
- We need to wait for the propagation delay, in order to have a proper clock signal that has both active high and active low

## References
---
- What is an oscillator? Oscillator tutorial in HD! - YouTube
![What is an oscillator? Oscillator tutorial in HD! - YouTube](https://youtu.be/aJAZHPqEUKU?si=Pt-hOeXTN6z8j6Po&t=157)
