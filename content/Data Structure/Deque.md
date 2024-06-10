---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-12-11T20:43:00+08:00
Last Date: 2024-06-10T16:34:23+08:00
References: 
---
## Basics
---
![[deque.png|500]]

- A **double-ended** [[Queue]] (deque) allows you to **push and pop elements** from **both ends**


## Monotonic Queue
---
- A [[Queue]] that ensures elements inside are either **monotonically increasing** or **monotonically decreasing**, implemented with a [[Deque]]
- Below is a monotonic queue implementation using [[Java]]

```java
class MonotonicQueue {
  Deque<Integer> deque;

  public MonotonicQueue() {
    this.deque = new ArrayDeque<>();
  }

  public void offer(int val) {
    // ensure we have a monotonic decreasing queue, need poll from back, thus
    // deque needed
    while (!deque.isEmpty() && deque.peekLast() < val) deque.pollLast();
    deque.offerLast(val);
  }

  public void poll() {
    deque.pollFirst();
  }

  public int peek() {
    return deque.peekFirst();
  }

  @Override
  public String toString() {
    return deque.toString();
  }
}
```

>[!question] How does it work?
> If we are **adding an element** that is **larger** than the **element at the end** of the queue, and we want to ensure the values in the queue are **in decreasing order**, we will **pop elements from the back** until the **last element** of the queue is **larger** than the element we want to add.
> 
> This is also why we need to use a **deque**, as we **need to pop** elements from the **back**.

>[!question] How is this useful?
> Monotonic queues are commonly used in problems related to [[Dynamic Programming]], **sliding window algorithms**, and [[Combinatorial Optimisation]] tasks where you need to **efficiently find maximum or minimum values** over a **range of elements**.
> 
>  We can use monotonic queue to solve [Sliding Window Maximum](https://xy241-dsa.notion.site/239-Sliding-Window-Maximum-9a14131e6b214ea49a2837eb712a01e4?pvs=74) which requires us to find the **biggest element in a sliding window**.





