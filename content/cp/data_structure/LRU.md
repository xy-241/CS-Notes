---
sthNew: true
Mastery Level:
  - 📗
Time Taken: 60
Space:
  - O(n)
Time: O(1)
Appears On:
  - Grind 75
Brush: 4
Difficulty:
  - Medium
Area:
  - data structure
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-12-31, 21:08
Last Date: 2024-01-01T21:18:22+08:00
tags:
  - cp
draft: 
---
[Original Problem](https://leetcode.cn/problems/lru-cache/)

[Past Solutions](https://www.notion.so/xy241-dsa/LRU-Cache-7cef86ef560f4e768a24b9043256ae96?pvs=4)
## Idea
---
- The idea here is to use a [[Hash Map]] to keep a mapping between the key and the value. And we use a [[Double Linked List]] to keep track the least recently used key-value pair and most recently used key-value pair in constant time
- The value in the hash map is mapped to a node inside the double linked list, so we are able to locate the least recently used key-value pair in linear time
- We also make use of [[Linked List#Virtual Node]] to make the linked list operations easy to manage. Refer to [[Linked List#Tips|Linked List Tips]] to help with the solution implementation


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(n)
- *Ignore input size & language dependent space*
- we are using a [[Hash Map]] to hold the key-node pairs
### Time - O(1)
- Both `get()` and `put()` are O(1)
 

## Codes
---
### 1st Attempt
```java title="Solution.java"
public class Node {
    int key;
    int val;
    Node prev;
    Node next;
    Node(){}

    Node(int key, int val) {
        this.key = key;
        this.val = val;
    }
}

class LRUCache {
    int capacity;
    HashMap<Integer, Node> map;
    Node head;
    Node tail;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>();

        head = new Node();
        tail = new Node();
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        
        // Recently Used
        Node currNode = map.get(key);
        remove(currNode);
        accessed(currNode);

        return currNode.val;
    }
    
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            Node currNode = map.get(key);
            currNode.val = value;
            
            // Recently Used (updated)
            remove(currNode);
            accessed(currNode);
            return;
        }

        if (map.size() < capacity) {
            Node newNode = new Node(key, value);

            // Recently Used (added)
            accessed(newNode);
            map.put(key, newNode);
            return;
        }

        // Evict
        Node lastNode = tail.prev;
        remove(lastNode);
        map.remove(lastNode.key);
        
        // Add
        Node newNode = new Node(key, value);
        map.put(key, newNode);
        // Recently Used (added)
        accessed(newNode);
    }

    void remove(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    void accessed(Node node) {
        node.next = head.next;
        node.prev = head;
        head.next = node;
        node.next.prev = node;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
```

## Personal Reflection
---
- **Why it takes so long to solve:** Rusty with [[Double Linked List]] implementation in [[Java]]
- **What you could have done better:** Sketch out the things to note. For example, the place to update the [[Hash Map]] and the double linked list
- **What you missed:** *NIL*
- **Ideas you've seen before:** hashmap, double linked list
- **Ideas you found here that could help you later:** *NIL*
- **Ideas that didn't work and why:** *NIL*