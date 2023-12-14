---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2023-11-30T16:47:00
Last Date: 2023-12-14T18:16:54+08:00
References: 
---

## Abstract
---
- 🌟 denotes tools & settings I must have in MacOS to have a smooth user/developer experience
## GUI Apps
---
1. ~~[Install Firefox](https://www.mozilla.org/en-US/firefox/new/)~~ (Replaced with [floorp](https://floorp.app/en/)) 🌟
	- [Install Bypass Paywalls](https://github.com/iamadamdev/bypass-paywalls-chrome)
1. [Install Dropbox](https://www.dropbox.com/install)
2. [Install Obsidian](https://obsidian.md/) 🌟
3. ~~[Install Keypass](https://keepassxc.org/)~~  (Replaced with [Install StrongBox from App Store](https://apps.apple.com/us/app/strongbox-password-manager/id897283731))  🌟
4. [Install VSC](https://code.visualstudio.com/) 🌟
	- [Add `code` into cli](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
5. [Install Termius](https://www.termius.com/download/macos) 🌟
	-  [Modify Default Shell](https://support.termius.com/hc/en-us/articles/8414917685145-How-to-change-the-default-shell-in-local-terminal-)
6. [Install Tutanota](https://tutanota.com/#download) 🌟
7. [Install Notion](https://www.notion.so/desktop) 🌟
8. ~~[Install Docker](https://docs.docker.com/desktop/install/mac-install/)~~ (Replaced with OrbStack) 🌟
9. [Install Podman](https://podman.io/)
10. [Install Node Version Manager, npm included](https://github.com/nvm-sh/nvm#install--update-script) 🌟
11. [Install Postman](https://www.postman.com/downloads/)
12. [Install GitKraken](https://www.gitkraken.com/download) 🌟
13. [Install Brave](https://brave.com/download/)
14. [Install MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
15. [Install Google Drive Client](https://www.google.com/intl/en_sg/drive/download/) 🌟
16. [Install Java JDK](https://www.oracle.com/java/technologies/downloads/) 🌟
17. [Install IntelliJ Community](https://www.jetbrains.com/idea/download/?fromIDE=&section=mac) 🌟
18. [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads)
19. [Install Ngrok](https://ngrok.com/download)
```bash
# Move Ngrok Executable to PATH
cp ngrok /Users/<USERNAME>/.local/bin
```
1. [Install Geist Font](https://github.com/vercel/geist-font) 🌟
	- Drag and drop the installed font to built-in app `Font Book`
2. [Install SurfShark](https://surfshark.com/download/macos) 🌟
3. [Install WeChat](https://www.wechat.com/) 🌟



## Basics 🌟
---
-  [Install Brew](https://brew.sh/) 
-  [Install ohmyzsh](https://ohmyz.sh/#install) 
```bash
# Install zsh-autosuggestions
# Autosuggestions
sudo git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# Replace the .zshrc plugins config
plugins = (
	git
	zsh-autosuggestions
)
```
- [Powerlevel10k theme for ohmyzsh](https://github.com/romkatv/powerlevel10k)
```shell
brew install romkatv/powerlevel10k/powerlevel10k
echo "source $(brew --prefix)/share/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc  

zsh # Refresh shell to confiure powerlevel10k
p10k configure # Run this to reconfigure
```
## Dev Tools 🌟
---
- `orbstack`,
- `zoxide`, `fzf`
- `pipx`
- `bat`
- `exa`
- `gh`
- [`aws`](https://formulae.brew.sh/formula/awscli)
- [`terraform`](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
- `qemu` (for [[RISCV Kernel Deep Dive]])
- `ranger-fm` (pipx)
- [`az`](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-macos)
- `jq`(https://jqlang.github.io/jq/tutorial/)
```bash
#!/bin/bash

brew install orbstack

brew install zoxide
brew install fzf
# Append to .zshrc
# eval "$(zoxide init zsh --hook prompt)" 
# alias cd='z'

brew install pipx && pipx ensurepath

brew install bat && echo "alias cat='bat'" >>~/.zshrc

brew install exa
echo "alias ls='exa'" >>~/.zshrc
echo "alias ll='exa -alh'" >>~/.zshrc
echo "alias tree='exa --tree'" >>~/.zshrc

brew install awscli
echo >> ~/.zshrc
echo "# AWS Cli Env Variables" >> ~/.zshrc
echo "export AWS_PROFILE=<DEFAULT_PROFILE_NAME>" >> ~/.zshrc
echo "export AWS_REGION=ap-southeast-1" >> ~/.zshrc
echo >> ~/.zshrc
aws configure # Auth CLi

brew install terraform

brew install qemu

brew install gh
gh auth login # Painless Github CLi Auth

# Using pipx
pipx install ranger-fm

brew install azure-cli

# CLi JSON processor
brew install jq
```
- `.vimrc`
```vimrc
" Use spaces instead of tabs
set expandtab

" Set the number of spaces for each tab stop (e.g., 4 spaces per tab)
set tabstop=2

" Set the number of spaces used for each level of indentation (e.g., 4 spaces)
set shiftwidth=2


syntax enable

set number
set relativenumber
```
- Custom bash commands (to be added to `.zshrc`)
```bash
# cht.sh shortcut
h() {
	curl cht.sh/$1
}
```
### Code Editor Settings
- [Install FiraCode](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)
- Download the Vim extension to have vim keybinding inside the code editor
- Turn on *Word Wrap* under `View -> Word Wrap` (VSC example)
## System Tools 🌟
---
- `neofetch`
- `bpytop`, `htop`
```bash
brew install neofetch
echo neofetch >> ~/.zshrc

brew install bpytop
brew install htop
```

## Cheatsheet
---
- Command used to give unverified app permissions to execute - `xattr -r -d com.apple.quarantine/Applications/<APP_NAME>.app`
- [Terminal Cli Navigation Shortcut](https://support.apple.com/en-sg/guide/terminal/trmlshtcts/mac)
- [Remove an app from system entirely](https://www.youtube.com/watch?v=IgRi0Z1O_gk)

## Docker Apps
---
- [[AWS Nuke]]

## OS Config
---
- Change Hostname
```bash
#!/bin/bash
sudo scutil --set HostName mac
sudo scutil --set LocalHostName mac
```
- Change the VSC Terminal font size to ``16`` in the setting page
- [Add Chinese Input](https://support.apple.com/en-sg/guide/mac-help/mchlp1406/mac) 🌟

## MISC
---
### Brew
-   ``wireguard``, ``pipx``, ``terminator``, ``powerlevel10k``, ``ipython``, ``logisim-evolution``, ``infracost``, ``terraform-docs``, `pandoc`, `basictex`, `telnet`, `parallel`, `socat`, `pyenv`, `pyenv-virtualenv`, `vagrant`, `entr`, `packer`
```bash
#!/bin/bash
brew install wireguard-tools# Place conf in /usr/local/etc/wireguard/ 
sudo wg-quick up wg0 # Connect Wireguard

brew install ipython

# Open logisim, get denined, open Privacy, enable
brew install --cask logisim-evolution

brew install infracost

brew install terraform-docs

brew install pandoc
brew install basictex
brew install telnet

brew install parallel

brew install socat

brew install pyenv
brew install pyenv-virtualenv
echo '
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
' >> $HOME/.zshrc


brew tap hashicorp/tap
brew install hashicorp/tap/hashicorp-vagrant
vagrant plugin install vagrant-share


brew install entr

brew tap hashicorp/tap
brew install hashicorp/tap/packer
```

### [[npm]]
- `typescript`
```bash
#!/bin/bash
npm i -g typescript
```

### Pipx
- ``checkov``,  `poetry`, `ddtrace`
```bash
#!/bin/bash
pipx install checkov

pipx install poetry

pipx install ddtrace
```


### Others
- [[AWS Parameter Store#Update Programmatically|Update parameters in AWS Parameter Store in a semi automated way]]
- [[ECS Exec|Obtain a ssh shell into ECS on local machine]]
