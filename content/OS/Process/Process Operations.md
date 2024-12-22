---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-09T22:50:00
Last Date: 2024-12-22T19:09:46+08:00
References: 
description: Process creation uses fork() and exec() to create a child process, with termination occurring voluntarily or involuntarily. In POSIX, fork() creates a child, and wait() allows the parent to wait for its termination while preventing zombie processes.
title: Process Creation and Termination in POSIX Systems
---
## Abstract
---
- [[Operation]] is described in [[C/C]]



## Process Creation
---
- A 2 steps process - [[#fork()]], [[exec()]]
- This two-step process gives the child process the flexibility to manipulate its file descriptors (stdin in the example below) after `fork()` but before `execve()`, in order to accomplish redirection of standard input, standard output, and standard error
- The code below creates a child process, [[Pipe (管道)|pipes]] the input to the child process, then loads and executes the child process

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
---
### 2 Voluntary Ways
1. [[Process (进程)]] ends its job
2. [[Process (进程)]] hits an error during execution and exits gracefully

### 2 Involuntary Ways
1. Fatal error - which couldn't be handled by the [[Process (进程)]] itself (eg. [[Memory Failure]])
2. Termination by other process (killem all!)


## POSIX 
---
### fork()

```c
/* Fork a new process - returns 0 in child, child's PID in parent */ 
int pid = fork();
```
- Creates an exact duplicate of the original [[Process (进程)]]
- `fork()` returns `-1` if the fork fails

### wait()

```c
int status; // Used to store termination information

// This only waits for ONE child to finish
wait(&status);

// Wait specifically for first child
waitpid(pid1, &status, 0);

// Keep waiting until no children are left 
while (wait(NULL) > 0) { 
	// Each iteration handles one child process 
	// Loop continues until all children are done 
}

// WRONG - may leave zombie processes
wait(&status); // Only waits for one child
exit(0); // Other children become zombies
```

- Used by a parent [[Process (进程)|process]] to wait for one of its child processes to terminate