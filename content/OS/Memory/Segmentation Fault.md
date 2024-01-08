---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2024-01-08, 09:48
Last Date: 2024-01-08T10:34:03+08:00
References: 
draft: 
---
## Abstract
---
- Also known as *Segmentation Violation*
- Represented with `SIGSEGV`
- A common [[Runtime Error]] that occurs when a [[Process]] wants access [[Virtual Memory]] that it isn't permitted to 
- Can be handled with [[Null Safety]]


## Common Causes
---
**Indexing an [[Array]] beyond its boundary**
```cpp
#include <iostream>

int main() {
//	int xs[10];
	//int x = xs[100000];
	std::cout << "Hello World!";
	return 0;
}
```

**Dereferencing [[Pointer#Null Pointer]]**
```cpp
#include <iostream>

int main() {
	int *x = nullptr;
	*x = 900; // Dereferencing 
	return 0;
}
```