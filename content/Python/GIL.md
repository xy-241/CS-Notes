---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - python
  - OS
Creation Date: 2025-10-13, 22:21
Last Date: 2025-10-13T22:39:25+08:00
References:
draft:
description: Learn how Python's Global Interpreter Lock (GIL) affects multithreading performance, why it exists, and workarounds for CPU-bound vs I/O-bound tasks.
---
## Abstract
---
- A single [[Mutex (互斥体)|lock]] on the CPython interpreter itself which **executes any Python bytecode requires acquiring this lock**. This makes CPython [[Multi-threading#Thread Safety (线程安全)|thread-safe]] but limits [[Concurrency (并发)#Parallelism (并行)|true parallelism]]: only one [[Thread|thread]] can execute Python code at a time, even on [[Multi-core Chip|multi-core systems]]

>[!question] Why does the GIL exist?
> CPython uses **reference counting** (plus a [[#Cyclic Garbage Collector|cyclic garbage collector]]) for memory management (track via `sys.getrefcount()`). Each object tracks references; when it hits **0**, it’s freed immediately.
> 
> Reference counts aren't thread-safe, because two threads could **simultaneously increment/decrement the count** or, worse, **free memory while references still exist**. 
> 
> Instead of adding locks to every object (extremely slow), CPython uses one global lock to protect everything. Without the GIL, C code would need fine-grained locks around every shared Python object, risking [[Race Condition (竞态条件)|race conditions]], crashes, and memory corruption (like two threads mutating the same list concurrently).

>[!info] Historical context in the 1990s
> Multi-core CPUs were rare. Multiple threads ran on a single core, increasing [[Context Switch|context-switch overhead]] without performance gains. The GIL was a pragmatic solution. Today, it's hard to remove because most C extensions (NumPy, Pandas, TensorFlow, PIL) were built assuming the GIL exists.


## Impact on Performance
---
- **I/O-bound tasks:** Low impact, when one thread blocks on I/O, another can acquire the GIL and use the CPU. The GIL actually helps here.
- **CPU-bound tasks:** High impact, only one thread computes at a time, leaving other cores idle despite multiple threads.

>[!important] Python 2 vs. 3 GIL Behavior
> Python 2's GIL starved I/O-bound threads: it released the GIL after fixed intervals, but CPU-bound threads often reacquired it immediately. Python 3 improved this by tracking GIL acquisition requests and preventing the current thread from reacquiring until others get a chance.


>[!important] Workarounds
> Use [[Multi-processing|multiprocessing]] instead of threading. Each process has its own GIL and runs on separate cores. Trade-off: higher overhead than threads (memory, IPC costs).

## Cyclic Garbage Collector
---
```python
# Cyclic reference
a=[]
b=[a]
a.append(b)

# Only delete the reference from the varaibl
del a
del b

# Check on the GC
import gc
gc.collect()      # force a collection
gc.get_stats()    # recent GC stats
gc.disable(); gc.enable()  # rarely needed
```

- Python adds a **cycle detector** that periodically scans _container_ objects (lists, dicts, classes, frames, etc.), finds **unreachable cycles**, and frees them together.