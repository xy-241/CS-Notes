---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2023-11-30T16:47:00
Last Date: 2024-01-12T00:20:02+08:00
References: 
---
## General Apps
---
- [Floorp Browser](https://floorp.app/en/)
	- [Install Bypass Paywalls](https://github.com/iamadamdev/bypass-paywalls-chrome)
- [Google Drive Client](https://www.google.com/intl/en_sg/drive/download/)
- [Obsidian - Note Taking App](https://obsidian.md/)
- [StrongBox - Password Manager](https://apps.apple.com/us/app/strongbox-password-manager/id897283731)
- [Tutanota - Email Client](https://tutanota.com/#download)
- [Notion - Note Taking App](https://www.notion.so/desktop)

**Optional:**
- [Dropbox](https://www.dropbox.com/install)
- [Brave](https://brave.com/download/)
- [SurfShark VPN](https://surfshark.com/download/macos)
- [WeChat](https://www.wechat.com/)


## A Must Have 
---
- [Termius - Terminal GUI](https://www.termius.com/download/macos)
	-  [Modify Default Shell](https://support.termius.com/hc/en-us/articles/8414917685145-How-to-change-the-default-shell-in-local-terminal-)
-  [Brew - Package Manager](https://brew.sh/) 
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

## Dev Productivity Tools
---
- `zoxide`, `fzf`
- `pipx`
- `bat`
- `exa`
- `ranger-fm` (pipx)
```bash
#!/bin/bash
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

# Using pipx
pipx install ranger-fm
```

- Custom bash commands (to be added to `.zshrc`)
```bash
# cht.sh shortcut
h() {
	curl cht.sh/$1
}
```


## Programming Language Setup
---
- [[Python Toolset]]
- [[JS Toolset]]
- [Rust](https://www.rust-lang.org/tools/install)
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

- `typescript`, make sure you have [[JS Toolset#Install NVM]]
```bash
#!/bin/bash
npm i -g typescript
```

- [Java JDK](https://www.oracle.com/java/technologies/downloads/)

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

## Software Engineering Tools
---
- [[Code Editor Setup]]
- [GitKraken - Git GUI Tool](https://www.gitkraken.com/download) 
- [Postman - API Testing Tool](https://www.postman.com/downloads/)
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
- `ngrok`
- `gh`
- `jq`(https://jqlang.github.io/jq/tutorial/)
- `qemu` (for [[RISCV Kernel Deep Dive]])
- `socat`
```bash
#!/bin/bash

brew install ngrok/ngrok/ngrok

brew install gh
gh auth login # Painless Github CLi Auth

brew install jq # CLi JSON processor

brew install qemu

brew install socat
```



## OS Config
---
- [Add Geist Font](https://github.com/vercel/geist-font)
	- Drag and drop the installed font to built-in app `Font Book`
- [Add Chinese Input](https://support.apple.com/en-sg/guide/mac-help/mchlp1406/mac) 
- Change Hostname
```bash
#!/bin/bash
sudo scutil --set HostName mac
sudo scutil --set LocalHostName mac
```
- Change the VSC Terminal font size to ``16`` in the setting page

## Virtualisation Tools
---
### Docker
```bash
brew install orbstack
```

**App that can be ran in Docker:**
- [[AWS Nuke]]

### VM with Vagrant
- [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- Install Vagrant - a tool to manage VMs with ease
```bash
brew tap hashicorp/tap
brew install hashicorp/tap/hashicorp-vagrant
vagrant plugin install vagrant-share
```

## DevOps Tools
---
- [`aws`](https://formulae.brew.sh/formula/awscli)
- [`terraform`](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
- [`az`](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-macos)
- `infracost`
- `terraform-docs`
```shell
#!/bin/bash
brew install awscli
echo >> ~/.zshrc
echo "# AWS Cli Env Variables" >> ~/.zshrc
echo "export AWS_PROFILE=<DEFAULT_PROFILE_NAME>" >> ~/.zshrc
echo "export AWS_REGION=ap-southeast-1" >> ~/.zshrc
echo >> ~/.zshrc
aws configure # Auth CLi

brew install terraform

brew install azure-cli

brew install infracost

brew install terraform-docs
```
- [[ECS Exec|Obtain a ssh shell into ECS on local machine]]
- [[AWS Parameter Store#Update Programmatically|Update parameters in AWS Parameter Store in a semi automated way]]
### Install using pipx
- ``checkov``
- `ddtrace`
```bash
#!/bin/bash
pipx install checkov

pipx install ddtrace
```

## MISC
---
- `wireguard` 
- `ipython`
- `logisim-evolution`
- `telnet`
- `parallel`
```bash
#!/bin/bash
brew install wireguard-tools# Place conf in /usr/local/etc/wireguard/ 
sudo wg-quick up wg0 # Connect Wireguard

brew install ipython

# Open logisim, get denined, open Privacy, enable
brew install --cask logisim-evolution

brew install telnet

brew install parallel
```



## Cheatsheet
---
- Command used to give unverified app permissions to execute - `xattr -r -d com.apple.quarantine/Applications/<APP_NAME>.app`
- [Terminal Cli Navigation Shortcut](https://support.apple.com/en-sg/guide/terminal/trmlshtcts/mac)
- [Remove an app from system entirely](https://www.youtube.com/watch?v=IgRi0Z1O_gk)
