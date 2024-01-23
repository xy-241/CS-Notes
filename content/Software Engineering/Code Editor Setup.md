---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2024-01-12, 00:12
Last Date: 2024-01-23T17:07:10+08:00
References: 
draft: 
---
## Abstract
---
- A list of code editors and their configuration on MacOS

## Basics
---
A set of common configurations for code editors:
- Use a **coding friendly** font - FireCode
	- [Install FiraCode Nerd Font](https://github.com/ryanoasis/nerd-fonts)
	- Configure the editor to use this font, below is VSC example 
	- Configure Editor Font
	![[vsc_editor_font.png|400]]
	- Configure Terminal Font
	![[vsc_terminal_font.png|400]]
- Download the Vim extension to have vim keybinding inside the code editor
- Turn on *Word Wrap* under `View -> Word Wrap` (VSC example)

## VIM
---
```vim title=".vimrc"
" Must Have
syntax enable
set number
set relativenumber
set mouse=a
set autoindent

" Good to have
set expandtab
set tabstop=2
set shiftwidth=2
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