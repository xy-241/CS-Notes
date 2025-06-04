---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - python
Creation Date: 2025-06-04, 22:26
Last Date: 2025-06-05T07:19:07+08:00
References: 
draft: 
description: "Clean, idiomatic Python: Learn 20+ essential best practices to write safer, more readable, and maintainable code, with examples and reasons for each."
---
## Duck Typing
---
```python
# Bad 
if isinstance(obj, list):
    for x in obj:

# Good (Avoid `isinstance`, `type`)
try:
    for x in obj:
        process(x)
except TypeError:
    return  # or log/skip silently
```

- **Why**: Encourages polymorphism and flexible code while failing gracefully if the object isn't iterable, avoids hardcoding type checks

## Avoid Mutable Default Arguments
---
```python
# Bad 
def append_to(val, lst=[]):
    lst.append(val)
    return lst

# Good 
def append_to(val, lst=None):
    if lst is None:
        lst = []
    lst.append(val)
    return lst
```

- **Why**: Avoids shared state(in this case `lst`) across calls, this ensures functions behave consistently without modifying shared state

## Use Docstrings 
---
```python
# Bad
def compute():
    pass

# Good
def compute():
    """<Summary of the function>

	Args:
	    <input_name> (<input_type>): <input_description>

    Returns:
        <output_type>: <output_description>

	Examples(optional):

	Notes(optional):
    """
    pass
```
- **Why**: Improves code discoverability and auto-documentation

## Use Type Hints
---
```python
# Bad
def add(a, b):
    return a + b

# Good
def add(a: int, b: int) -> int:
    return a + b
```
- **Why**: Improves code clarity and enables static analysis.

## Avoid Magic Numbers or Strings
---
```python
# Bad
if status == 3:
    ...

# Good
PENDING_APPROVAL = 3
if status == PENDING_APPROVAL:
    ...
```
- **Why**: Increases readability and maintainability

## Use Comprehensions
---
```python
# Bad
squares = []
for x in range(10):
    squares.append(x * x)

# Good
squares = [x * x for x in range(10)]
```
- **Why**: More concise and expressive

## Avoid Excessive Nesting
---
```python
# Bad
def check(user):
    if user:
        if user.active:
            if user.has_permission():
                return True
    return False

# Good
def check(user):
    if not user or not user.active or not user.has_permission():
        return False
    return True
```
- **Why**: Reduces indentation and improves clarity

## Limit Function Responsibility
---
```python
# Bad
def process(data):
    # does 10 things
    pass

# Good
def validate(): ...
def store(): ...
def notify(): ...
```
- **Why**: Improves testability and separation of concerns



## Use `get()` with Dicts to Avoid Errors
---
```python
# Bad
name = user['name'] # returns KeyError if name not found

# Good
name = user.get('name') # returns None if name not found
```
- **Why**: Prevents `KeyError` exception if key is missing


## Format Strings with f-Strings
---
```python
# Bad
name = "Alice"
greeting = "Hello, %s" % name

# Good
name = "Alice"
greeting = f"Hello, {name}"
```
- **Why**: Cleaner and easier to read 


## Use Constants for Configurable Values
---
```python
# Bad
retry_limit = 3
timeout = 5

# Good
RETRY_LIMIT = 3
TIMEOUT = 5
```
- **Why**: Makes the intention of fixed values explicit

## Use `is` for `None`
---
```python
# Bad
if var == None:

# Good
if var is None:
```
- **Why**: `is` is the preferred way to compare against `None` in Python

## Use List Unpacking Instead of Indexing
---
```python
# Bad
first = point[0]
second = point[1]

# Good
first, second = point
```
- **Why**: Cleaner and more readable

## Use `with` for Resources
---
```python
# Bad
f = open('file.txt')
data = f.read()
f.close()

# Good
with open('file.txt') as f:
    data = f.read()
```
- **Why**: Ensures auto cleanup and safety 

## Catch Specific Exceptions
---
```python
# Bad
try:
    risky_operation()
except:
    handle_error()

# Good
try:
    risky_operation()
except ValueError:
    handle_error()
```
- **Why**: Avoids masking unexpected bugs and improves clarity

## Don't Catch `Exception` Unless You Have To
---
```python
# Bad
try:
    risky()
except:
    handle()

# Good
try:
    risky()
except Exception:
    handle()
```
- **Why**: Catches only actual exceptions, avoids swallowing keyboard interrupts and system exits 




## Prefer Tuple Unpacking for Swapping
---
```python
# Bad 
temp = a
a = b
b = temp

# Good
a, b = b, a
```
- **Why**: More concise and idiomatic

## Prefer Exceptions to Returning None for Errors
---
```python
# Bad
def find(id):
    if id not in db:
        return None
    return db[id]

# Good
def find(id):
    if id not in db:
        raise KeyError(f"{id} not found")
    return db[id]
```
- **Why**: Makes error handling explicit

## Avoid Long Parameter Lists
---
```python
# Bad
def create(x, y, z, a, b, c):
    ...

# Good
def create(config):
    ...
```


## Prefer Boolean Flags Over Multiple `if`s
---
```python
# Bad
if mode == 'read':
    read()
elif mode == 'write':
    write()

# Good
modes = {
    'read': read,
    'write': write
}
modes.get(mode, default_func)()
```
- **Why**: Easier to extend and avoids duplication

## Use `join()` for String Concatenation
---
```python
# Bad
s = ""
for part in parts:
    s += part

# Good
s = "".join(parts)
```
- **Why**: Faster and avoids repeated memory allocation