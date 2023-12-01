#computer_organisation
![[endianness-2048x634.png]]

***Big-endian***
- we locate the most significant byte of the 32-bit integer at the byte with the lowest address in the memory (This is how we usually write numbers, from left to right)
- dominant ordering in networking protocols due influence of the [[Internet Protocol (IP) Suite]]

***Small-endian***
- we locate the least significant byte of the data at the byte with the lowest address
- dominant ordering in processor architecture, because it offers certain advantages in terms of memory access (we can confidently say that the first 2 bytes are 0-31bits)