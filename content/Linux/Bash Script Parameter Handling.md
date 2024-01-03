---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - linux
Creation Date: 2023-12-21, 16:03
Last Date: 2023-12-21T16:08:35+08:00
References: 
draft: "true"
---
## Abstract
---
Ways to handle Bash Script Parameters


## $@
---
- Represents arguments passed to a **Bash Script** or command (**Positional Parameters** of a shell script)
- We can use `set --` to set and modify `$@`
- We can use `shift` to move `$@` to the left, discarding the first argument

### exec "$@"
- Telling the shell to replace the current script or process with the command specified by the arguments that were passed to the script or function
 ![[exec "$@" example.png]]