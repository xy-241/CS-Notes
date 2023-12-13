---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-09T22:50:00
Last Date: 2023-12-13T18:03:51+08:00
References: 
---
## Abstract
- [[Operation]] is described in [[C]]



## Process Creation
- A 2 steps process - [[fork()]], [[exec()]]
- The two-step process gives the child the flexibility to manipulate its file descriptors(STDIN in the above example) after the fork but before the _execve_ in order to accomplish *redirection* of *standard input, standard output, and standard error*
- Create a child [[Process]], [[Pipe (管道)]] the input of the child process, load and execute child process
```c
int pid = fork();
if (pid == 0)
{
	dup2(pipe_fds[numProcesses - 2][READ_STREAM], STDIN_FILENO);
	closePipes(numProcesses, pipe_fds);
	execvp(sub_process[0], (char *const *)sub_process);
}
```


## Process Termination 
### 2 Voluntary Ways
1. [[Process]] ends its job
2. [[Process]] hits an error during execution and exits gracefully

### 2 Involuntary Ways
1. Fatal error - which couldn't be handled by the [[Process]] itself (eg. [[Memory Failure]])
2. Termination by other process (killem all!)