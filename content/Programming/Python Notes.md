---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - python
Creation Date: 2024-12-15, 20:06
Last Date: 2024-12-15T20:55:07+08:00
References: 
draft: 
description: 
---
## Magic Methods
---

| Method     | Purpose                                                      | Example Usage             |
| ---------- | ------------------------------------------------------------ | ------------------------- |
| `__init__` | Initializes object attributes during instantiation.          | `p = Person("Alice", 25)` |
| `__lt__`   | Defines behavior for `<` operator for custom objects.        | `print(n1 < n2)`          |
| `__str__`  | Returns a human-readable string representation of an object. | `print(p)` or `str(p)`    |

- **Methods starting and ending with double underscores**. They are defined by built-in classes in Python and commonly used for operator overloading
- For more examples, see [docs](https://www.geeksforgeeks.org/dunder-magic-methods-python/)

## Count Occurrences of Elements
---
```python
from collections import Counter

# Count characters in a string
Counter("banana")
# Output: Counter({'a': 3, 'n': 2, 'b': 1})

# Count characters in a string
Counter([1, 2, 2, 3, 3, 3])
# Output: Counter({3: 3, 2: 2, 1: 1})

# Most Common Elements
Counter([1,1,1,2,2,3,4,5,6]).most_common(2)
# Output: [(1, 3), (2, 2)]
```


## Throwaway Variable
---
```python
for _ in range(k):
	print("This will print k times")
```

- `_` is the throwaway variable. This is a way to indicate to other developers that the loop variable is intentionally not going to be used.