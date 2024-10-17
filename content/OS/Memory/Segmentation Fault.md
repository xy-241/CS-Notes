---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - rust
Creation Date: 2024-01-08, 09:48
Last Date: 2024-10-17T16:34:46+08:00
References: 
draft: 
---
## Abstract
---
- Also known as **Segmentation Violation**
- Represented with `SIGSEGV`
- A common [[Runtime Error]] that occurs when a [[Process (进程)]] wants access [[Virtual Memory]] that it isn't permitted to. So the [[Kernel]] will terminate the process due to safety reasons 
- Can be handled with [[Null Safety]]


## Common Causes
---
**Indexing an [[Array]] beyond its boundary**
```cpp
#include <iostream>

int main() {
	int xs[10];
	int x = xs[100000];

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


## Ways to Handle
---
- Use [[Rust]], Rust checks the index with the the range the program can access, if out of range, exit immediately with helpful error message instead of continuing and cause Segmentation Fault