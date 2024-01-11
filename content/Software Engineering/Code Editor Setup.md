---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2024-01-12, 00:12
Last Date: 2024-01-12T00:22:08+08:00
References: 
draft: 
---
## Abstract
---
- A list of code editors and their configuration on MacOS

## Basics
---
A set of command configurations for code editors listed below
- [Install FiraCode Font](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)
- Download the Vim extension to have vim keybinding inside the code editor
- Turn on *Word Wrap* under `View -> Word Wrap` (VSC example)

## VIM
---
```vimrc title=".vimrc"
" Use spaces instead of tabs
set expandtab

" Set the number of spaces for each tab stop (e.g., 4 spaces per tab)
set tabstop=2

" Set the number of spaces used for each level of indentation (e.g., 4 spaces)
set shiftwidth=2


syntax enable

set number
set relativenumber

set mouse=a
```


## Visual Studio Code
---
- [Visual Studio Code](https://code.visualstudio.com/)
	- [Add `code` into cli](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)


## IntelliJ Community Code Editor
---
- [IntelliJ Community Code Editor](https://www.jetbrains.com/idea/download/?fromIDE=&section=mac)
- Install third-party libraries 
![[install_3rd_party_libraries_inteliJ.png]]