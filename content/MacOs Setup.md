---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2023-11-30T16:47:00
Last Date: 2024-04-03T22:29:54+08:00
References: 
title:  My Macos Setup
---
## General Apps
---
- [Floorp Browser](https://floorp.app/en/)
	- [Install Bypass Paywalls](https://github.com/iamadamdev/bypass-paywalls-chrome)
- [Arc Browser](https://www.youtube.com/watch?v=8PhdfcX9tG0)
- [Google Drive Client](https://www.google.com/intl/en_sg/drive/download/)
- [Obsidian - Note Taking App](https://obsidian.md/)
- [StrongBox - Password Manager](https://apps.apple.com/us/app/strongbox-password-manager/id897283731)
- [Tutanota - Email Client](https://tutanota.com/#download)
- [[File Sharing]]
- [List of Wonderful Apps Waiting to Be Explored!](https://sindresorhus.com/apps)

## Pre-requisites
---
### Package Manager
- [ ] [[Package Manager#Brew]] 
- [ ] [[Package Manager#NPM]]
- [ ] [[Package Manager#Pipx]]
- [ ] [[Package Manager#Cargo]]

## Terminal & Shell Setup
---
- [ ] [Install FiraCode Nerd Font](https://github.com/ryanoasis/nerd-fonts) - Terminal Font
- [ ] [[Terminal#ZSH]] - [[Terminal#Shell]]
- [ ] [[Terminal#iterm2]] - [[Terminal]]
- [ ] [[Terminal#Termius]] - Terminal
- [ ] [[Terminal#ohmyzsh]] - [[Terminal#Shell Enhancement]]


## Terminal Productivity Tools
---
>[!caution] Display of Icons
> Make sure you install one of the [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts) to have icons display correctly inside your terminal. It is strongly recommended to complete [[#Terminal & Shell Setup]] first!

- [ ] [[File System Hierarchy#eza]] - `ls` replacement
- [ ] [[File#xcp]] - `cp` replacement
- [ ] [[File System Hierarchy#zoxide]] - `cd` replacement
- [ ] [[File#bat]] - `cat` replacement
- [ ] [[DNS#q]] - `dig` replacement
- [ ] [[Atuin]] - `history` replacement
- [ ] [[File System Hierarchy#joshuto]] - Terminal File Manager
- [ ] [[File#dua]] - Disk Usage Analyser
- [ ] `brew install btop` - `htop`/`top` replacement
- [ ] `navi` - `man` replacement
```bash
brew install navi # Installation 
# Add alias navi="navi --fzf-overrides-var '--no-select-1'" into .zshrc
echo "alias navi='bat'" >>~/.zshrc
# Add eval "$(navi widget zsh)" into .zshrc

navi fn welcome # Config Page

# Ctrl-G to run the program

# Add my cheatsheets, remember to run this command regularly for updates!
navi repo add https://github.com/xy-241/cli-cheat
```
- [ ] `fzf` - `grep` replacement
```bash
brew install fzf # Installation 

cat <file_name> | fzf -m # multi-line select

# Fuzzy search files with file preview
brew install chafa # To have image rendered in terminal
fzf --preview '<path_to_preview.sh> {}' # Refer to https://github.com/junegunn/fzf?tab=readme-ov-file#previewing-an-image for more information
```
- [ ] [[Process (进程)#procs]] - `ps` replacement
- [ ] `fastfetch`
```bash
brew install fastfetch
# Add the following to the start of .zshrc
fastfetch --logo <ABSOLUTE_PATH_TO_LOGO_FILE> --logo-width 70 --logo-height 30 --logo-type iterm
```
- [ ] `stow` - dotfile manager
```bash
brew install stow
```
- [ ] `asciinema` & `agg` - terminal recording & convert `.cast` to gif
```bash
# asciinema Installation 
brew install asciinema 

asciinema rec demo.cast # Record
asciinema play demo.cast # Play a recorded session


# agg Installation
cargo install --git https://github.com/asciinema/agg 

# Convert .cast to gif, --font-family should be the same font as the terminal font
agg --font-family "FiraMono Nerd Font" demo.cast a.gif
```

**Others**
- `brew install watch`
- Custom bash commands (to be added to `.zshrc`)
```bash
# cht.sh shortcut
h() {
	curl cht.sh/$1
}
```

## Programming Language Setup
---
- [ ] [[Python Toolset]]
- [ ] [[JS Toolset]]
- [ ] [[Rust Toolset]]
- [ ] [[Go]]
- [ ] `npm i -g typescript`
- [ ] `brew install elixir`
- [ ] [Java JDK](https://www.oracle.com/java/technologies/downloads/)


## Software Engineering Tools
---
- [ ] [[Code Editor Setup#Neovim]]
- [ ] [[Code Editor Setup]]
- [ ] [GitKraken - Git GUI Tool](https://www.gitkraken.com/download) 
- [ ] [Postman - API Testing Tool](https://www.postman.com/downloads/)
- [ ] [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
- [ ] [[jq]]
- [ ] `brew install socat`
- [ ] `brew install hyperfine` - A command-line benchmarking tool
- [ ] `brew install --cask dbeaver-community`  - Open-source DB viewer
- [ ] `gh`
```bash
#!/bin/bash
brew install gh
gh auth login # Painless Github CLi Auth

```
- [ ] [[Bandwidth#Bandwhich]]


## Virtualisation Tools
---
- [ ] [[Docker#Docker Installation]]
- [ ] [[Virtualisation#Vagrant]]
- [ ] [[Virtualisation#QEMU]]



## DevOps Tools
---
- [ ] [[Cloudflare CLI]]
- [ ] [[Secure Tunneling#Cloudflare Tunnel|cloudflared]] 
- [ ] [[Secure Tunneling#Ngrok]]
- [ ] `brew install terraform`
- [ ] `brew install azure-cli`
- [ ] `brew install infracost`
- [ ] `brew install terraform-docs`
- [ ] [[ECS Exec|Obtain a ssh shell into ECS on local machine]]
- [ ] [[AWS Parameter Store#Update Programmatically|Update parameters in AWS Parameter Store in a semi automated way]]
- [ ] [[AWS Nuke]]
- [ ] `aws`
```shell
#!/bin/bash
brew install awscli
echo >> ~/.zshrc
echo "# AWS Cli Env Variables" >> ~/.zshrc
echo "export AWS_PROFILE=<DEFAULT_PROFILE_NAME>" >> ~/.zshrc
echo "export AWS_REGION=ap-southeast-1" >> ~/.zshrc
echo >> ~/.zshrc
aws configure # Auth CLi
```
- [ ] `pipx install checkov`
- [ ] `pipx install ddtrace`



## Hardware Tools
---
- [ ] [rpi-imager](https://github.com/raspberrypi/rpi-imager)
- [ ] [arduino ide](https://github.com/arduino/arduino-ide)

## MISC
---
- `wireguard` 
- `ipython`
- `brew install --cask logisim-evolution` - circuit design software
- `telnet`
- `brew install parallel`
```bash
#!/bin/bash
brew install wireguard-tools# Place conf in /usr/local/etc/wireguard/ 
sudo wg-quick up wg0 # Connect Wireguard

brew install ipython


brew install telnet
```

## OS Config
---
- [ ] [Add Geist Font](https://github.com/vercel/geist-font), drag and drop the installed font to built-in app `Font Book`
- [ ] [Add Chinese Input](https://support.apple.com/en-sg/guide/mac-help/mchlp1406/mac) 
- [ ] Change Hostname
```bash
#!/bin/bash
sudo scutil --set HostName mac
sudo scutil --set LocalHostName mac
```

## Cheatsheet
---
- Command used to give unverified app permissions to execute - `xattr -r -d com.apple.quarantine/Applications/<APP_NAME>.app`
- [Terminal Cli Navigation Shortcut](https://support.apple.com/en-sg/guide/terminal/trmlshtcts/mac)
- [Remove an app from system entirely](https://www.youtube.com/watch?v=IgRi0Z1O_gk)
