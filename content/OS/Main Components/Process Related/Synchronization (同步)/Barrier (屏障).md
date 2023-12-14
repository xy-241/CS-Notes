---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-01T22:53:00
Last Date: 2023-11-04T17:34:28+08:00
References:
---
## Abstract
---
- *Synchronising* [[Thread]] while they are running concurrently. So that they all reach the same point before any of them proceed
- Used when we need information from multiple [[Thread]] at a particular execution point. For example [[#Roll Dice]]
- Need to compile with `-pthread` flag


## Code Snippet
---
```c
#include <pthread.h>

int main(int argc, char *argv[]) {
  pthread_barrier_t barrier;
  
  // A barrier with one thread. Synchornising 3 threads
  pthread_barrier_init(&barrier, NULL, 3);

  // Denote it is ready to be synchornised with other threads
  pthread_barrier_wait(&barrier);

  pthread_barrier_destroy(&barrier);
  return 0;
}
```

## Example
---
### Roll Dice
- Each [[Thread]] rolls a dice, the *main thread* decides who is the winner. Then each thread shouts if it is a winner or not
- [Sample Code](https://code-vault.net/lesson/18ec1942c2da46840693efe9b520f873)