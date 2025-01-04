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
Creation Date: 2025-01-04, 13:17
Last Date: 2025-01-04T13:30:30+08:00
References: 
draft: 
description: Learn how to manipulate strings with operations like converting integers to characters, joining and splitting strings, slicing substrings, comparing strings, and sorting alphabetically. Includes examples for String.join(), String.split(), .substring(), and alphabetical sorting using arrays.
---
## Convert from Integer to Character
---
```java title="Java"
int intValue = 65; // Unicode value of 'A' 
char charValue = (char) intValue; // Output: A
```

## Convert from String to Integer
---
```java title="Java"
// If `currStrVal` contains anything that is not a valid integer, it will throw a `NumberFormatException`
// Leading or trailing whitespace in the string is ignored
String currStrVal = "123";
int num = Integer.parseInt(currStrVal);
```

## Delimited String Operations
---
```java title="Java"
// Joins multiple strings with a specified delimiter.
String result = String.join(",", "Java", "is", "fun"); // Output: "Java,is,fun"

// Splits a string into an array based on a delimiter.
String[] parts = "Java,is,fun".split(","); // Output: String[] { "Java", "is", "fun" }
```

## String Slicing
---
```java title="Java"
// Extracts chars from index 7 (inclusive) to 12 (exclusive).
String result = "Hello, World!".substring(7, 12); // Output: "World"
```

## String Comparison
---
```java title="Java"
// Checks if two strings are equal.
"Java".equals("Java"); // Output: true

// Compares strings lexicographically.
"Apple".compareTo("Banana"); // Output: -1 (Apple < Banana)
```

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

