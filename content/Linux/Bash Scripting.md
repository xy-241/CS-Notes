---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - bash
Creation Date: 2024-01-10, 15:57
Last Date: 2024-01-12T16:34:48+08:00
References: 
draft: 
---
## Abstract
---
- No [[Datatype]] in bash, everything is a string of characters

## Bash Equal Sign
---
- **Assignment:** no space between the variable name and variable value
- **Equality check:** space between variable name and variable value

## Bash Boolean
---
- There isn't `true` or `false`
- There is only exit code `0` means success, anything else is failure 
- A script has a return code of its last command which can be examined using `echo $?`

## Bash Testing Conditions
---
- We need to use either `test` or `[ ]` to evaluate conditions 
```shell
if [ -z "$a" ]; then
	echo "hello"
fi

a="123"

if [ -z "$a" ]; then
	echo "hello"
fi
```

## Bash Script Exit Code
---
- By default, bash continues to execute the script if one of the command finished and didn't exit with `0`
- The bash script will exit with `0`, as long as the last command exits with `0`
- This is undesirable, because it create an illusion that all commands in the script managed to run successfully
</br>

- The solution is to define `set -e` right below `#!/bin/bash`, so the bash script exit immediately if any command it performs fails (returns a non-zero status). Preventing it from continuing if something goes wrong
</br>

- However, if you want the bash script to terminate when one of the commands in [[Pipe (管道)]] fails. You need to also add in `set -o pipefail`

## Bash Debugging
---
- We can place `set -x` to enable debugging info for the bash script
- The shell will print each command before it's executed, preceded by a '+' sign
- This is useful for debugging scripts, as it allows you to see exactly what commands are being executed and spot any issues
## Bash Variable
---
- By default, undefined bash variables are empty strings. They will not terminate the bash script!
- We can add `set -u` to avoid this quirk

## Bash Function
---
- Keyword `return` is for [[#Bash Script Exit Code]], not return value
- For return value, use `echo` instead
- And use `$(<BASH_FUNCTION_HERE>)` command substitution to capture the return value

## References
---
- Solving the Dotfiles Problem (And Learning Bash)

![Solving the Dotfiles Problem (And Learning Bash) - YouTube](https://youtu.be/mSXOYhfDFYo?si=TgqGOyXC-2AL_eJW)

- Why shell scripts aren't suitable for complex tasks

![Why shell scripts aren't suitable for complex tasks - YouTube](https://youtu.be/-tSI7mjRGZs?si=7K6fbvxXXKfpnZEC)