#OS 
## Abstract
 - A mechanism achieved with [[Multi-threaded Chips]]/[[Multi-core chips]]([[High-performance Computing#Parallelism (并行性)|Parallelism (并行性)]]) or quick [[Context Switch]]([[High-performance Computing#Concurrency (并发)|Concurrency (并发)]]) or both
 - Doesn't offer true [[High-performance Computing#Parallelism (并行性)|Parallelism (并行性)]] on Single-Core [[CPU]]
 	- Only one process running at a time
 	- Thread-switching time is reduced to [[Latency Number |nanosecond]]
- To users, [[CPU]] Speed is divided by the total number of [[Thread]] executing at the same time
- Performance is a *fine balance* between performance gains from each [[Thread]] and [[#Overhead of Creating Thread]]


## Benefits
### Improved Responsiveness
- Can continue to run other [[Thread]] while waiting for I/O operations to complete
- Run other [[Thread]] while one [[Thread]] is waiting
### Improved Performance
- When tasks are stateless, independent of each other & long waiting time incurs in the task

## Cons
### More likely to get [[Race Condition (竞态条件)]]
- Where there is a *shared resource*
### More likely to get [[Deadlock (死锁)]]
- Where there is a *shared resource*
### Overhead of Creating [[Thread]]

## Terminologies
### Thread Safety (线程安全)
- A piece of code that functions correctly during *simultaneous execution* by *multiple [[Thread]]* accessing the a *shared resource* without [[Race Condition (竞态条件)]] and [[Deadlock (死锁)]] etc