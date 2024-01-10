---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - linux
Creation Date: 2024-01-10, 15:57
Last Date: 2024-01-10T20:44:26+08:00
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
- There is only exit code `0` means success, anything is failure 
- A script has a return code of its last command which can be examined using `echo $?$`
```bash
#!/bin/bash
f() {
exit 1
}

if [ f ]; then
	echo "0 is true"
fi

if [ 1 ]; then
	echo "1 is true"
fi

if [ 2 ]; then
	echo "2 is true"
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


## Bash Variable
---
- By default, undefined bash variables are empty strings. They will not terminate the bash script!
- We can add `set -u` to avoid this quirk

## Bash Function
---
- Keyword `return` is for [[#Bash Script Exit Code]], not return value
- For return value, use `echo` instead
- And use `$(<BASH_FUNCTION_HERE>)` to capture the return value

## References
---
- Solving the Dotfiles Problem (And Learning Bash)

![Solving the Dotfiles Problem (And Learning Bash) - YouTube](https://youtu.be/mSXOYhfDFYo?si=TgqGOyXC-2AL_eJW)

- Why shell scripts aren't suitable for complex tasks

![Why shell scripts aren't suitable for complex tasks - YouTube](https://youtu.be/-tSI7mjRGZs?si=7K6fbvxXXKfpnZEC)