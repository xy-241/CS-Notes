---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-09T22:50:00
Last Date: 2024-12-23T10:55:10+08:00
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
2. Process hits an error during execution and exits gracefully

### 2 Involuntary Ways
1. Fatal error - which couldn't be handled by the [[Process (进程)]] itself (eg. [[Segmentation Fault]]) 
2. Termination by other process (killem all!)

### Zombie Process

```c
// In parent process
wait(&status);    // Waits for only one child process to terminate
                  // Other child processes continue running
                  
while (1) {       // Infinite loop
    /* Empty loop body */
}

exit(0);          // Unreachable code - program never exits from while loop
                  // WARNING: Any remaining child processes become zombies
                  // since parent never waits for them to terminate
```

- A [[#Child Process]] that has [[#Process Termination|completed execution]] but still has an entry in the [[Process Control Block (PCB)#Process Table|process table]] because its parent has not yet called [[Process Operations#wait()]] to retrieve its exit status

>[!code] A zombie process lives forever
> In the code example above, the parent process keeps running and never calls `wait()`.

>[!question] Why isn’t the child process removed automatically after completing its job?
> The [[OS]] allows the parent process to check on its child using `wait()` to retrieve the completion status.

>[!important]
> Zombie processes can be removed by terminating their parent process. When the parent process terminates, the OS knows there’s no way for the child processes to be checked, so it cleans them up.

>[!tool]
> You can check for zombie processes with the command: `ps aux | grep 'Z'`.



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
```

- Used by a parent [[Process (进程)|process]] to wait for one of its child processes to terminate

## References
---
- [Understanding Zombie Processes! - YouTube](https://youtu.be/xJ8KenZw2ag?si=uVqic4a76GV-rlFX)