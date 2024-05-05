---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - arduino
Creation Date: 2024-02-26, 16:08
Last Date: 2024-05-05T17:44:16+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Data exchange between 2 hardware devices via [[IO Bus#Serial Bus Architecture]]


### Baud Rate
- The speed of [[Serial Communication]], measured in bits per second (bps). It's the number of signal changes or transitions that occur on a communication line every second
- A baud rate of 9600 bps means that 9600 bits (containing data, start/stop bits, and any parity bits) can be transmitted each second

>[!example]- Arduino Uno
> ```c title="Set the Baud Rate of the serial communication to 9600bps"
> Serial.begin(9600);
> ```


## UART
---
- Stands for **U**niversal **A**synchronous **R**eceiver/**T**ransmitter
- 2 wires, one wires for sending data, another wire for receiving data. The rate is determined by the [[#Baud Rate]]

>[!attention] Unable to communicate over long distance 
> We have RS232 that supports communication distance that is up to `30m` or **RS485** that supports communication distance that is up to `1000m`. RS485 also supports one-to-many communication.

>[!attention] Slow communication speed
> UART has a maximum $11520$ Baud Rate for standard applications, that means `11.25KB/s`. This can be handled with **SPI** which has a speed up to `10MB/s`.

>[!attention] No one-to-many communication
> The [[CPU]] needs to have a dedicated pair of UART wires for each peripheral. Unable to have one pair of wires for many peripherals. This can be handled with **I2C**.

## References
---
- [UART那么好用，为什么单片机还需要I2C和SPI？ - YouTube](https://youtu.be/UGKT2OPyz1U?si=qSqTfnlLBKeCfCGb)