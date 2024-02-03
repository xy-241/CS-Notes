---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
Creation Date: 2023-11-02T21:07:00
Last Date: 2024-02-03T21:14:36+08:00
References: 
---
## Abstract
---
### Array
```java
// Sort an array which has elements that are array of size 2
// Sort from the highest first element of sub-array, if same then sort from the lowest second element of sub-array

Arrays.sort(people, (a,b) -> {
	if (a[0] == b[0]) return a[1] - b[1];
	return b[0]-a[0];
});

// Sort array of elements that are long type
Arrays.sort(longArray, (a, b) -> {
	if (a[0] == b[0]) return Long.compare(a[1], b[1]);
	return Long.compare(a[0], b[0]);
});

// Use the built-in comparator will not lead to overflow issue
Arrays.sort(points, (a, b) -> Integer.compare(a[0], b[0]));
```

### Dyanmic List
```java
Collections.sort(inputList, Comparator.comparingInt(a -> a[0] + a[1]));
```