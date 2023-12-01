#OS 

>[!note] 2 Steps
>1. [[fork()]] 
>2. [[exec()]]
>>[!example] Example: create a child process, [[Pipe (管道)]] the input of the child process, load and execute child process
>>```c
>>int pid = fork();
>>if (pid == 0)
>>{
>>	dup2(pipe_fds[numProcesses - 2][READ_STREAM], STDIN_FILENO);
>>	closePipes(numProcesses, pipe_fds);
>>	execvp(sub_process[0], (char *const *)sub_process);
>>}
>>```
>>-  The two-step process is to allow the child to manipulate its file descriptors(STDIN in the above example) after the fork but before the _execve_ in order to accomplish redirection of standard input, standard output, and standard error