---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-09T10:06:00
Last Date: 
References:
---
## Abstract
---
- In this problem, there is a [[#Producer]] collaborating with [[#Consumer]] to carry out a task


## Sample Codes
---
```c
#include <pthread.h>

pthread_cond_t cond;
pthread_mutex_t mutex;
int buffer[10];
int buffer_index = 0;

void producer() {
  while (1) {
    pthread_mutex_lock(&mutex);

    while (buffer_index == 10) {
      pthread_cond_wait(&cond, &mutex);
    }

    buffer[buffer_index++] = 1;

    pthread_cond_signal(&cond);
    pthread_mutex_unlock(&mutex);
  }
}

void consumer() {
  while (1) {
    pthread_mutex_lock(&mutex);

    while (buffer_index == 0) {
      pthread_cond_wait(&cond, &mutex);
    }

    buffer[buffer_index--] = 0;

    pthread_cond_signal(&cond);
    pthread_mutex_unlock(&mutex);
  }
}

int main() {
  pthread_cond_init(&cond, NULL);
  pthread_mutex_init(&mutex, NULL);

  pthread_t producer_thread;
  pthread_t consumer_thread;

  pthread_create(&producer_thread, NULL, producer, NULL);
  pthread_create(&consumer_thread, NULL, consumer, NULL);

  pthread_join(producer_thread, NULL);
  pthread_join(consumer_thread, NULL);

  pthread_cond_destroy(&cond);
  pthread_mutex_destroy(&mutex);

  return 0;
}

```


## Terminologies
---
### Buffer
- **Temporary storage area for data**
### Producer
- [[Thread]] that produces data and puts it in a [[#Buffer]]
### Consumer
- [[Thread]] that consumes data from the [[Buffer]]