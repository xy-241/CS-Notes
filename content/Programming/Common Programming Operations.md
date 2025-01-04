---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
  - cpp
  - python
  - programming
  - sql
Creation Date: 2024-12-14, 20:31
Last Date: 2025-01-04T13:12:21+08:00
References: 
draft: 
description:
---
## Object Comparison
---
```python title="Python"
# Compares values for equality
# For example, check if two numbers or strings are the same
a == b

# Compares identity
# Whether two variables point to the same object in memory
a is b
```

```sql title="SQL"
-- Compares a value or column to another value.
-- If either side of the comparison is `NULL`, the result is `NULL` (not `TRUE`).
SELECT * 
FROM employees 
WHERE salary = 5000;

-- Checks for `NULL` or `NOT NULL` values explicitly.
SELECT * FROM employees WHERE bonus IS NULL;
```

## Defining Custom Comparison Logic
---
```java title="Java"
class Node implements Comparable<Node> {
    public int freq;
   
    @Override
    public int compareTo(Node other) {
        return Integer.compare(other.freq, this.freq);
    }
}
```

- The comparator logic above implements a **descending order**. To achieve ascending order, swap `other.freq` and `this.freq`
- For more details, refer to [[Java Comparison]]

```python title="Python"
class Node:
    def __init__(self, val, freq):
        self.freq = freq
    
    def __lt__(self, other):
        return other.freq < self.freq 
```

- The comparator logic above implements a **descending order**. To achieve ascending order, swap `other.freq` and `self.freq`

```cpp title="C++"
class Node {
public:
    int freq;

	Node(int freq) {
		this->freq = freq;
	}

	bool operator<(const Node& other) {
		return other.freq > this->freq;
	}
}
```

- The comparator logic above implements a **descending order**. To achieve ascending order, swap `other.freq` and `self->freq`







