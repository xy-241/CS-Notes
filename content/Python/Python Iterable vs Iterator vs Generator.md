---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - python
  - programming
  - OS
Creation Date: 2025-10-15, 19:08
Last Date: 2025-10-15T19:26:48+08:00
References:
draft:
description: Learn the difference between Iterable, Iterator, and Generator in Python, with clear code examples and explanations. Understand how containers like list, set, and dict are iterable, how iterators implement the __iter__() and __next__() protocols, and how generators lazily produce values using yield or expressions for memory-efficient iteration.
---
## Iterable
---
- `list`, `set`, and `dict` are **containers** because they store all their elements in memory immediately. These containers are **iterable**, meaning we can loop through their elements with a `for` loop.

## Iterator
---
- When we wrap an [[#Iterable|iterable]] with `iter()`, we get back an **iterator** which is an object that remembers its position and produces one element at a time when we call `next()`. Once all elements are consumed, calling `next()` again raises a `StopIteration` exception.
- An **iterator object** is not really a _subclass_ of iterable, but rather it **implements** the _iterator protocol_ (`__iter__()` and `__next__()`), which makes it **both an iterator and an iterable**, calling `iter()` on an iterator just returns itself. But but `Iterator` is a subclass of `Iterable`.

## Generator
---
```python
# Generator function
def count_up_to(n):
    for i in range(n):
        yield i

# Generator expression
(x*x for x in range(5))
```
- A **generator** is a special kind of iterator that **lazily produces** values on demand instead of storing them all in memory.
- We can create a generator in two ways: using a **generator function** that contains the `yield` keyword or a **generator expression** like `(x*x for x in range(5))` as shown above

>[!important] Super memory-efficient
> They only compute each value when needed.
> ```python
> import sys
> print(sys.getsizeof([x for x in range(1000000)]))   # large
> print(sys.getsizeof((x for x in range(1000000))))   # tiny
> ```


## Get Your Hands Dirty
---
```python
# Let's import the core ABCs (Abstract Base Classes)
from collections.abc import Iterable, Iterator, Generator

# Example objects
lst = [1, 2, 3]
it = iter(lst)
gen = (x*x for x in range(3))

# ---- Check isinstance ----
print(isinstance(lst, Iterable))     # ✅ True, list is iterable
print(isinstance(lst, Iterator))     # ❌ False, list is not iterator
print(isinstance(it, Iterator))      # ✅ True
print(isinstance(gen, Iterator))     # ✅ True
print(isinstance(gen, Generator))    # ✅ True, generator is a kind of iterator

# ---- Check issubclass ----
print(issubclass(Iterator, Iterable))   # ✅ True, iterator implements iterable interface
print(issubclass(Generator, Iterator))  # ✅ True, generator is a subclass of iterator
```