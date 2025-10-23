---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - python
  - OS
  - programming
Creation Date: 2025-10-15, 16:36
Last Date: 2025-10-15T18:33:57+08:00
References:
draft:
description:
---
## Mutation vs Rebinding
---
```python
a = [1, 2]; b = a
a += [3]
print(b)  # [1, 2, 3] (same object)
```

- `+=` **mutates** the same list **in-place**, equivalent to `list.extend()`.
- For **mutable** objects (e.g. `list`, `dict`, `set`): `+=` changes the object itself.
- For **immutable** objects (e.g. `str`, `tuple`, `int`): `+=` creates a **new object**, known as a **rebind**.

## Identity vs Equality
---
```python
a = [1, 2]; b = [1, 2]
a == b  # True
a is b  # False
```

- `a is b` → checks **identity** (same memory object).
- `a == b` → checks equality (same content).

## Hash Table
---
### Content-Based Hashing

```python
hash((1, 2, 3)) == hash((1, 2, 3))  # True
```

- Immutable objects are **hashed by their contents**, not by reference.

### Dict Construction

- `{'a': 1}` and `dict(a=1)` produce **the same dictionary** -> `{'a': 1}`.

### Dict Keys View
- In **Python 3**, `dict.keys()` returns a **dynamic view** (`dict_keys`) that updates automatically if the dict changes.
- In **Python 2**, it returned a static list.

### Dict Access

```python
from collections import defaultdict

# Regular dict
regular = {}
regular.get('missing')  # Returns None
regular['missing']      # Raises KeyError

# defaultdict
dd = defaultdict(list)
dd.get('missing')       # Returns None (same as regular dict!)
dd['missing']           # Returns [] (the default!) AND creates the key
```

- With `defaultdict`, using `[]` access auto-creates missing keys. So you rarely need `.get()` with defaultdict since it won't raise KeyError anyway.

### Dict Order

```python
my_list = [3, 1, 2, 1, 3, 4]

# dict.fromkeys() creates a dict with keys from the list
dict.fromkeys(my_list)  # {3: None, 1: None, 2: None, 4: None}
# Keys appear in the order they were FIRST seen

list(dict.fromkeys(my_list))  # [3, 1, 2, 4]
# Duplicates removed, original order preserved!
```
- When you try to add a duplicate key, the dict just ignores it (doesn't update position.
- First occurrence wins for positioning, converting back to list gives you the keys in order.

### Dict Addition

```python
{} + {} # ❌ invalid.

{**a, **b}   # unpacking syntax
a | b        # Python 3.9+
```

## Copying and Slicing
---
```python
import copy
a = [[1], [2]]
b = a.copy()
c = copy.deepcopy(a)
a[0][0] = 99
print(b)  # [[99], [2]]  shares inner refs
print(c)  # [[1], [2]]   fully independent
```

- `a.copy()` → **shallow copy** (outer container new, inner references shared).
- `copy.deepcopy(a)` → **deep copy** (everything recursively cloned).
- `a[:]` → **shallow copy**, equivalent to `.copy()`.

## String Representation
---
```python
str([1, 2, 3])  # "[1, 2, 3]"
```

- Python uses `repr()` internally to generate string literals.

## Division
---
```python
1 / 2   # 0.5
1 // 2  # 0
```

- `/` → **true division** → returns `float`
- `//` → **floor division** → returns `int`

## List
---

### List Multiplication 

```python
nums = [1, 2, 3]
nums = [x * 2 for x in nums] # [2, 4, 6]

nums * 2 # [1, 2, 3, 1, 2, 3]
```

- Use list comprehension to apply multiplication on elements
- multiplication outside of list **repeats** the list, not element-wise multiply. Python doesn’t broadcast like NumPy.

### List Manipulation

```python
[1,2,3,2].remove(2) # `[1,3,2]` (removes first 2)

[1,2,3].pop(1) # returns 2, list becomes `[1,3]`
```

## Element Deletion
---
```python
# Delete list items
my_list = [1, 2, 3, 4]
del my_list[1]      # [1, 3, 4] - removes by INDEX
del my_list[0:2]    # [3, 4] - can use slices

# Delete dict items
my_dict = {'a': 1, 'b': 2}
del my_dict['a']    # {'b': 2} - removes by KEY

# Delete variables
x = 5
del x               # x no longer exists
```

- `del` can delete slices efficiently:

## Generator
---
```python
g = (i for i in range(3))
next(g)  # 0
next(g)  # 1
next(g)  # 2
next(g)  # StopIteration
```

- `(i for i in range(3))` creates a **generator object** that yields values lazily.
- It doesn’t store results, only computes when requested.
- `[i for i in range(3)]` builds a full list instead.



## Tuple Syntax
---
- `(1,)` → tuple
- `(1)` → int


## Typing
---

### Type Checking

```python
class A: pass
class B(A): pass

isinstance(B(), A)  # True
type(B()) == A      # False
```

- `type()` → checks **exact type** (no inheritance).
- `isinstance()` → checks **subclass relationships**.

### Type Hints at Runtime

```python
# ❌ raises `TypeError` 
isinstance([1, 2, 3], List[int])
```

- Type hints like `List[int]` are erased at runtime, `isinstance()` only understands concrete types like `list`, `tuple`, etc.