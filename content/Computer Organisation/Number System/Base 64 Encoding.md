---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-15T18:03:11+08:00
Last Date: 2024-06-19T23:34:45+08:00
References: 
---
## Abstract
---
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20200520142906/1461.png" width="500">

- Base64 is called **Base64** because it encodes binary data into **64 unique characters**, each of which can be represented using **6 [[Computer Data Representation#Bit|bits]]** ($2^6=64$). These 64 characters consist of:
	- 26 uppercase English letters (A-Z)
	- 26 lowercase English letters (a-z)
	- 10 digits (0-9)
	- 2 additional characters: the plus sign (+) and the forward slash (/)
- Base64 encoding works by converting **groups of 3 [[Computer Data Representation#Byte|bytes]]** into **groups of 4 characters**

>[!important] The length of a base64 encoded string must be a multiple of 4 bytes
> If the original data **doesn't result** in a **multiple of 4 bytes** when encoded, **base64 padding** comes to the rescue!
> 
> Base64 padding, represented by the `=` character, is often found at the **end of base64 encoded strings**. It **doesn't represent** any characters from the original data, but is used to ensure the encoded string's length is a multiple of $4$. This maintains **consistency** and allows for **correct decoding** of the **original data**.

>[!success] Compatibility with 7-bit 
> Some systems could only transmit data in **7-bit chunks** due to limitations in character sets and protocols (like older email systems).
> 
> If data encoded in 8-bit chunks were transmitted over these 7-bit systems, data could be corrupted or lost. The 8th bit might be stripped off, or a random bit could be added to fill the 7-bit space.
> 
>  Base64 encoding solves this problem. By converting data into 6-bit groups and representing each group with a printable character, it ensures that data can be transmitted safely over systems that can only handle 7-bit chunks. The receiving system can then decode the base64 data back into its original 8-bit format.
>  
>  While the 7-bit transmission limitation is less common today, base64 remains useful for encoding binary data (like images or files) into a text format that can be easily transmitted or stored & making data URL-safe, as base64 characters are all standard URL characters.

## Reference
---
- [What is Base64?](https://youtu.be/8qkxeZmKmOY)