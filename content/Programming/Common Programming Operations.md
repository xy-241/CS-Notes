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
Creation Date: 2024-12-14, 20:31
Last Date: 2024-12-18T23:05:46+08:00
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


## Convert HTML to TXT
---
>[!important]
> We don’t want to extract the content as a single string because this would result in losing all the formatting information provided by the HTML tags. Reformatting the content based on the document structure afterward is tedious, error-prone, and not scalable. 
> 
> Instead, the idea is to retain the formatting information we need before removing all the HTML tags. Then, we can use this retained formatting information to generate a text file with the desired formatting.


```java title="Java"
// Generate a placeholder string using UUID to avoid conflicts with the HTML content
String uniquePlaceholder = UUID.randomUUID().toString();

// This step retains line break information, which we will later replace with actual line breaks (\n)
String htmlContent = rawHtml.replace("<br />", "<span>" + uniquePlaceholder + "</span>");

// Parse the modified HTML content using Jsoup to extract plain text
// Replace the placeholder with actual line breaks (\n) to simulate the original formatting
String txtContent = Jsoup.parse(htmlContent).text().replace(uniquePlaceholder, "\n");

// Create a FileWriter to write the plain text content to a file
FileWriter writer = new FileWriter("output.txt");

// Write the plain text content into the file
writer.write(txtContent);

writer.close();

```

>[!code]
> This above code example assumes that `<br />` is the only tag used to denote line breaks in the given HTML string. If other tags or methods are used for formatting, additional handling may be required.
> 
>  Also note that, The `FileWriter writer` formats and writes the content into a text file, ensuring that line breaks are correctly represented using `\n`.

