---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - python
Creation Date: 2025-11-14, 15:40
Last Date: 2025-11-14T15:56:55+08:00
References:
draft:
description:
---
## Find all files matching a pattern
---
```python
# With pathlib.rglob() - concise
from pathlib import Path
txt_files = list(Path('.').rglob('*.txt'))

# With os.walk() - more manual
import os
txt_files = []
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.txt'):
            txt_files.append(os.path.join(root, file))
```

- Both `pathlib` and `os` can get CSV files recursively, but `pathlib` is more concise because it **encapsulates** the pattern matching and traversal in one function. However, `os.walk()` is better when you need to **skip certain directories during traversal**.
- `pathlib`'s lack of **mid-traversal pruning** is a real limitation for large directory trees!

>[!info]
> Both `Path('.').rglob('*.txt')` and `os.walk('.')` give back a generator.