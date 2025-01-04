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
Creation Date: 2025-01-04, 13:37
Last Date: 2025-01-04T13:41:25+08:00
References: 
draft: 
description: Learn heap and stack manipulation in Java, Python, and C++ with simple examples. Create min-heaps using PriorityQueue, heapq, or priority_queue, and manage elements with push, pop, and peek operations in stacks. Enhance your data structure skills with this efficient guide.
title: 
---
## Heap Manipulation
---
```java title="Java"
// Create a min-heap
PriorityQueue<Integer> minHeap = new PriorityQueue<>();

// Add a new element to the heap
minHeap.add(5);

// Remove and return the smallest element from the heap
minHeap.poll();
```

```python title="Python"
# # Create a list to serve as a container for the min-heap
minHeap = []
# Convert the list with elements into a min-heap
heapq.heapify(minHeap)

# Add a new element to the heap
heapq.heappush(minHeap, 5)

# Remove and return the smallest element from the heap
heapq.heappop(minHeap)
```

```cpp title="C++"
// Create a min-heap
priority_queue<int> minHeap;

// Add Add a new element to the heap
minHeap.push(5);

// Remove the smallest element from the heap
minHeap.pop();
// Return the smallest element from the heap
minHeap.top().val;
```

## Stack Manipulation
---
```java title="Java"
// Create a stack
Stack<Integer> stack = new Stack<>();

// Add a new element to the stack
stack.push(10);

// Remove and return the top element from the stack
int topElement = stack.pop();

// Return the top element from the stack
int topElement = stack.peek();
```
