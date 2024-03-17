---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
  - go
Creation Date: 2024-03-02, 19:52
Last Date: 2024-03-17T17:56:59+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Represent different characters in terms of [[Computer Data Representation#Bit String]]
- There are many different character encoding standards like [ASCII](https://en.wikipedia.org/wiki/ASCII), [GBK (character encoding)](https://en.wikipedia.org/wiki/GBK_(character_encoding)#:~:text=GBK%20is%20an%20extension%20of,%3A1993%2C%20or%20Unicode%201.1.) and [[#UTF-8]] etc

>[!caution] Incompatible Encoding Standard
> Characters encoded in one standard may be displayed differently in another standard.
> 
> We should always use the same character encoding standard, UTF-8 is recommended. And if we see characters that are not displayed correctly, we shouldn't save the file, because saving will overwrite the file with placeholders for those wrongly displayed characters.


## UTF-8
---
![[utf-8_space_saving.png|500]]
- [UTF-8](https://en.wikipedia.org/wiki/UTF-8) allows **variable-length encoding**, this brings a great amount of space saving to store different characters. As shown above, we use 1 [[Computer Data Representation#Byte]] to store **a**, 4 bytes to store 😊, and 3 bytes to store **家**. Without variable-length encoding, we need to use 4 bytes to store each character. Variable-length encoding is achieved with the [code point](utf-8_code_point.png)

### UTF-8 in Go
![[utf-8_string_go.png|500]]
- String in [[Go]] is encoded with [[#UTF-8]] and is treated as an [[Array]] of [[Computer Data Representation#Byte]]. This explains why the index is off and `len(myString)` returns $8$, instead of $6$

>[!tip] Abstract away this weird behavior 
> We can cast the string to an array of `rune` to have an intuitive interface to the string in Go as shown below. But `rune` as you can see below is `int32`, this approach comes with some space sacrifices.
> 
> ![[cast_string_to_rune_array_go.png|500]]
## References 
---
- [锟斤拷�⊠是怎样炼成的——中文显示「⼊」门指南【柴知道】 - YouTube](https://youtu.be/zSstXi-j7Qc?si=Xx_PqdiLIvZuHQMH)