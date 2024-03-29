---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2024-01-12, 00:12
Last Date: 2024-03-29T19:35:35+08:00
References: 
draft: 
sr-due: 2024-01-30
sr-interval: 3
sr-ease: 225
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
- [Unlock Full Vim Features](https://learnvim.irian.to/read_this_first#vimrc)

- [Opening Multiple Windows](https://learnvim.irian.to/basics/starting_vim#opening-multiple-windows)
- [Suspending](https://learnvim.irian.to/basics/starting_vim#suspending)
- [Starting Vim The Smart Way](https://learnvim.irian.to/basics/starting_vim#starting-vim-the-smart-way)
</br>

- [Basic Macros](https://learnvim.irian.to/basics/macros#basic-macros)

## Visual Studio Code
---
- [Visual Studio Code](https://code.visualstudio.com/)
	- [Add `code` into cli](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
- Change the VSC Terminal font size to ``16`` in the setting page

## Zed Code Editor
---
- [Install Zed](https://zed.dev/)

## Neovim
---
- Install iterm2 
```bash
brew install --cask iterm2
```
- Install neovim
```bash
brew install neovim

# Add the following to .zshrc
alias vim="nvim"
export EDITOR="nvim"
```
- Install nvchad (Yes for default settings)
```bash
git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim
```
- Set the theme to catppuccin
- You can install syntax heightening using `:TSInstall <Language>` 
## IntelliJ Community Code Editor
---
- [IntelliJ Community Code Editor](https://www.jetbrains.com/idea/download/?fromIDE=&section=mac)
- Install third-party libraries 
![[install_3rd_party_libraries_inteliJ.png]]