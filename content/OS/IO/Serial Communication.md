---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - arduino
Creation Date: 2024-02-26, 16:08
Last Date: 2024-02-26T20:12:30+08:00
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