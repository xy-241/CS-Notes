---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
  - arduino
Creation Date: 2024-01-11, 21:59
Last Date: 2024-05-05T18:09:27+08:00
References: 
draft: 
---
## Abstract
---
- A hardware component inside [[CPU]] that generates [[#Clock Signal]] to control the speed of CPU processing [[Instruction]]


>[!success] Synchronisation
> Clock signal is generated at constant interval, this helps to calculate time and synchronize the internal operations

>[!bigbrain] Play a key role in timing-dependent tasks
> Functions like `delay()` and `millis()` are dependent on the clock

>[!example]- Clock Oscillator for Arduino Uno ATmega328p
> ![[Arduino_Uno_brains.png|300]]
> - True heart of the Arduino Uno. It's where your Arduino sketches (code) run, and it handles the primary input/output tasks
> 
> **External Clock Source**
> ![[Arduino_Uno_ATmega328p_external_clock.png|300]]
> - ATmega328p supports an external clock source of **16MHz-20MHz** via Pin 9 and Pin 10
> - The Ceramic Resonator is the built-in external clock source that runs at **16MHz**
> 
> **Internal Clock Source**
>  - Calibrated Internal RC Oscillator running at **8MHz**
>  - 128kHz Internal Oscillator running at **128kHz**
>  - [More details](https://linuxhint.com/arduino-internal-clock/#Calibrated-Internal-RC-Oscillator)

>[!example]- Clock Oscillator for Arduino Uno ATmega16u2
> ![[Arduino_Uno_brains.png|300]]
> - Facilitates [[Serial Communication]] between Arduino and computer, converts signals between USB (Universal Serial Bus) and TTL (Transistor-Transistor Logic) serial communication protocols
>   
> **External Clock Source**
> ![[arduino_uno_crystal_oscillator.png|300]]
> - The Crystal oscillator is the built-in external clock source that runs at 16MHZ, named indicating 16.000H9H
> - Crystal oscillator is more expensive and accurate, [[Serial Communication]] needs such accuracy to work, the data will be corrupted if there is a slight mismatch from the agreed [[Serial Communication#Baud Rate]]
> 
> **Internal Clock Source**
> - Calibrated Internal RC Oscillator running at **8MHz**
> - PLL running at **48MHz**
> - [More details](https://linuxhint.com/arduino-internal-clock/#Calibrated-Internal-RC-Oscillator)


## Clock Signal
---
![[clock_signal.png|300]]
- Represented with `CLK`
- The continuous oscillating square wave that drives the timing of a digital system
- Used to synchronise the [[Operation]] of various components within the circuit


### Clock Cycle
![[clock_cycle.png|300]]
- Refers to the **time interval** between **two successive rising (or falling) edges** of the [[Clock Signal]]. The **smallest time unit** for [[CPU]]

### Machine Cycle
- The **amount of time** the [[CPU]] takes to perform a [[Main Memory]] or [[OS/IO/IO Device|IO Device]] **access**. One machine cycle consists of **several** [[#Clock Cycle]]

### Instruction Cycle
- The **amount of time** the [[CPU]] takes to [[Pipeline Stages#Fetch]], [[Pipeline Stages#Decode]] and [[Pipeline Stages#Execute]] **one** [[Instruction]]. One Instruction cycle consists of **several** [[#Machine Cycle]]

### Clock Frequency
- The total number of [[#Clock Cycle]] in one second

### Duty Cycle
![[duty_cycle.png|350]]

- The ratio of time the [[Clock Signal]] is in the high state (logical 1) to the total period of the signal

## References
---
- [What is an oscillator? Oscillator tutorial in HD! - YouTube](https://youtu.be/aJAZHPqEUKU?si=Pt-hOeXTN6z8j6Po&t=157)
- [Does Arduino Have Internal Hardware Clock](https://linuxhint.com/arduino-internal-clock/)
- [时钟周期/指令周期/机器周期 - 知乎](https://zhuanlan.zhihu.com/p/447927306?utm_id=0)