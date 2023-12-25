---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - python
Creation Date: 2023-10-18T10:49:00
Last Date: 2023-12-25T21:08:38+08:00
References: 
---
## Abstract
---
Get the gears ready
- [ ] [[#pyenv & poetry Installation]]

Use `pyenv` to manage
- [ ] [[#Python Interpreter Version]]
- [ ] [[#Python Virtualenv]]

Use `poetry` to manage
- [ ] [[#Python Dependencies]]


## pyenv & poetry Installation
---
### pyenv
```bash
# Installation Script
#!/bin/bash
brew install pyenv
brew install pyenv-virtualenv
echo '
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
' >> $HOME/.zshrc
```
### poetry
```bash
# Install Poetry

# Using pip
pip3 install poetry

# Or using pipx
pipx install poetry
```

## Python Interpreter Version
---
Manage multiple Python versions in a single OS with ease

- Sometimes, we have multiple python projects on one single machine
- Some python project requires certain python version like `Python3.8`, but you only have `Python3.10`
- It is a mess to manage multiple python versions on a single machine natively

```bash title="Command Cheatsheet"
# List python versions installed
pyenv versions

# Install Python 3.10.4
pyenv install 3.10.4

# Select Python 3.10.4 to be used locally/globally
pyenv local 3.10.4
pyenv global 3.10.4

# Remove Python 3.10.4
pyenv uninstall 3.10.4
```

## Python Virtualenv
---
Create, access and manage virtualenv with ease

- It can be hard to assign different python version to different python projects virtualenv
- Each env configuration folder is inside that project folder, we must specify the [[File System#Pathname]] to active
- It is also hard to have a quick overview of all the virtualenvs we have on a system

```bash title="Command Cheatsheet"
# List all the virtualenvs managed by pyenv
pyenv virtualenvs

# Create a new virtualenv called datadog_learn with Python 3.10.4
pyenv virtualenv 3.10.4 datadog_learn

# Enter a virtualenv called datadog_learn
pyenv activate datadog_learn

# Exit current virtualenv
pyenv deactivate 

# Remove a virtualenv called datadog_learn without confirmation
pyenv uninstall datadog_learn -f
```

## Python Dependencies
---
Install the correct dependency versions for a project, and enforce it!

- When you install a dependency, this dependency may depend on other dependencies which will also be installed, then you dont really know what exact dependency you are interacting directly
- We are unable to enforce the python version used natively - which may lead to failed build, because some dependencies don't support that particular python version used on the local machine

```bash title="Command Cheatsheet"
# List the current poetry dev env
poetry env info

# List all the dependencies (including dev) installed
poetry show

# Install poetry in the project if it isn't initialised
poetry init

# Install all the dependencies
poetry install

# Add ddtrace as a dev dependency, remove --dev to add as a normal dependency
poetry add ddtrace --dev
```