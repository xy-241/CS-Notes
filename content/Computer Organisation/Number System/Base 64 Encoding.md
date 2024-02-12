---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2023-08-15T18:03:11+08:00
Last Date: 2024-01-15T16:36:43+08:00
References: 
---
## Abstract
---
- It is called Base 64 because it encodes binary data into **64 unique characters** which can be represented with **6 [[Computer Data Representation#Bit]]**
	- **26** uppercase English alphabet
	- **26** lowercase English alphabet
	- **10** digits, 0 to 9
	- **2** additional characters, `+` & `/`

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20200520142906/1461.png" width="500">
</br>

- Encode 3 [[Computer Data Representation#Byte]] with 4 base64 characters as one unit
- `=` at the end of the base64 encoded string denotes the total number of empty bytes. `=` means there is 1 empty byte at the end, `==` means there are 2 empty bytes at the end
</br>

- It ensures each encoded binary sequence **don't go over 6 bits**
- This is useful because some old devices only transmit data in 7bits
- Imagine you have a machine that needs to transmit data in 8bits, it needs such old device to transmit the data to another machine
- Without base64, the another machine will treat the received 7bits as 8bits aka adding a random bit somewhere that messes up the data the original machines wants to send
- Thus, base64 ensures data that is transferred from one machine to another isn't corrupted


## Reference
---
- What is Base64?

![](https://youtu.be/8qkxeZmKmOY)