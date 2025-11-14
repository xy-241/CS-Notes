---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - python
  - OS
Creation Date: 2025-11-14, 17:19
Last Date: 2025-11-14T17:23:58+08:00
References:
draft:
description:
---
## Assigning Jobs to Threads
---
```python
from concurrent.futures import ThreadPoolExecutor
import threading
from pathlib import Path


def process_csv(csv_path):
  print(f"Thread {threading.current_thread().name} processing {csv_path}")


def compute_csv_parallel(directory=".", max_workers=2):
  csv_files = list(Path(directory).rglob("*.csv"))

  with ThreadPoolExecutor(max_workers=max_workers) as executor:
    executor.map(process_csv, csv_files)

if __name__ == "__main__":
  compute_csv_parallel()
```

- `executor.map(process_csv, csv_files)` schedules one task per CSV file. Each element in `csv_files` gets turned into a separate function call, and the `ThreadPoolExecutor` distributes these tasks across the [[User Thread|worker threads]]. 
- Internally it just pushes all tasks into a queue, and each worker thread pulls the next available task, so no two threads ever process the same file. The load-balancing isn’t “smart” in a fancy way. it’s simply first-come-first-served. but every file is guaranteed to be **handled exactly once**.