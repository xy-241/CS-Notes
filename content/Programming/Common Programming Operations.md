---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
  - cpp
  - python
Creation Date: 2024-12-14, 20:31
Last Date: 2024-12-14T21:12:34+08:00
References: 
draft: 
description: 
---
## Alphabetical Sorting of String
---
```java title="Java"
char[] charArray = s.toCharArray();
Arrays.sort(charArray);
String sorted = new String(charArray);
```

- To sort a string, we first need to convert it into a character array
- The `Arrays.sort()` method is a `void` method and does not return a value. it sorts the array in place.
- Finally, we need to convert the sorted character array back into a string

```python title="Python"
sorted_arr = ''.join(sorted(s))
```

- We can sort a string using `sorted()` without converting it to a character array.
- However, we still need to use `''.join()` to obtain a sorted string because `sorted()` returns a list

```cpp title="C++"
string sorted = s;
sort(sorted.begin(), sorted.end());
```

- **C++ `std::sort()`** works directly on a `std::string` without needing to convert it to a character array, because a `std::string` in C++ is essentially a sequence of characters (similar to a char array)
- Just like in Java, `std::sort()` returns `void`
