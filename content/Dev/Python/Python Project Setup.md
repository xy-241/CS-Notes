---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-10-18T10:49:00
Last Date: 
References:
---
## Abstract
- Mainly 2 parts, 
	1. use `pyenv` to manage the python interpreter version & virtualenv
	2. use `poetry` to manage the python dependencies

## pyenv
- Install multiple Python versions in a single OS with ease
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
### pyenv - python interpreter version
- Handle pain point: some python project requires certain python version like Python3.8, but you only have Python3.10. It is a mess to manage multiple python versions on a single machine
```bash
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
### pyenv - python virtualenv
- Solve pain point: 
1) hard to assign different python version to different python projects virtual env
2) Each env configuration folder is inside the project folder, hard to have a quick overview of all the virtualenvs
3) 
```bash
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

## poetry
```bash
# Install Poetry

# Using pip
pip3 install poetry

# Or using pipx
pipx install poetry
```
- Handle pain point: overwhelming to manage python dependencies. When you install a dependency, this dependency may depend on other dependencies which will also be installed, then you dont really know what exact dependency you are interacting directly. And we are unable to enforce the python version used - which may lead to failed build, because some dependencies don't support that particular python version used on local machine
```bash
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