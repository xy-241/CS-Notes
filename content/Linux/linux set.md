---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - linux
Creation Date: 2023-09-03T16:27:32+08:00
Last Date: 2024-01-01T13:47:10+08:00
References: 
---
>[!abstract] Command is used to modify the behavior of the shell

>[!note] Place this at the start of [[Bash Scripting]] to ensure script is ran properly or can be debugged easily
>```bash
>set -exuo pipefail
>```

>[!note] ``-e``
>- "errexit" mode
>- If any command within the script exits with a non-zero status (indicating an error), the script itself will exit immediately
>- This can help prevent the script from continuing to run in a potentially inconsistent or erroneous state

>[!note] ``-x``
>- "xtrace" mode aka "debug mode"
>- The shell will print each command before it's executed, preceded by a '+' sign
>- This is useful for debugging scripts, as it allows you to see exactly what commands are being executed and spot any issues

>[!note] ``-u``
>- "nounset" mode
>- Treat unset variables as errors and exit the script if any variable is accessed before being assigned a value

>[!note] ``-o pipefail``
>- Returns an error whenever part of the [[Pipe (管道)]] has an error