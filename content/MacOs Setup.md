---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2023-11-30T16:47:00
Last Date: 2024-03-06T16:41:07+08:00
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
- [List of Wonderful Apps Waiting to Be Explored!](https://sindresorhus.com/apps)

**Optional:**
- [Brave](https://brave.com/download/)
- [SurfShark VPN](https://surfshark.com/download/macos)


## Basic Terminal - Must Have
---
- [Brew - Package Manager](https://brew.sh/) 
- [Install ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#how-to-install-zsh-on-many-platforms)
</br>

- [Install FiraCode Nerd Font](https://github.com/ryanoasis/nerd-fonts)
- [Termius - Terminal GUI](https://www.termius.com/download/macos)
	- [Modify Default Shell](https://support.termius.com/hc/en-us/articles/8414917685145-How-to-change-the-default-shell-in-local-terminal-)
	- Your Termius configuration page should look something like the following picture
![[termius_config.png|700]]
</br>


- [Install ohmyzsh](https://ohmyz.sh/#install) 
- Install zsh plugins, all plugins are install under the path that is stored in `$ZSH_CUSTOM`
```bash
# Install zsh-autosuggestions plugin
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
# Install zsh-syntax-highlighting plugin
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting


# Replace the .zshrc plugins config
plugins = (
	git
	zsh-autosuggestions
	zsh-syntax-highlighting
)
```
</br>

- [Powerlevel10k theme for ohmyzsh](https://github.com/romkatv/powerlevel10k)
```shell
brew install romkatv/powerlevel10k/powerlevel10k
echo "source $(brew --prefix)/share/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc  

zsh # Refresh shell to confiure powerlevel10k
p10k configure # Run this to reconfigure
```
- `stow`
```bash
brew install stow
```
## Terminal Productivity Tools
---
>[!caution] Display of Icons
> Make sure you install one of the [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts) to have icons display correctly inside your terminal

- [ ] [[File System#eza]] - `ls` replacement
- [ ] [[File System#xcp]] - `cp` replacement
- [ ] [[File System#zoxide]] - `cd` replacement
- [ ] [[File#bat]] - `cat` replacement
- [ ] [[DNS#q]] - `dig` replacement
- [ ] [[Atuin]] - `history` replacement
- [ ] [[File System#joshuto]] - Terminal File Manager
- [ ] [[File System#dua]] - Disk Usage Analyser
- [ ] `brew install btop` - `htop`/`top` replacement
- [ ] `fastfetch`
```bash
brew install fastfetch
# Add the following to the start of .zshrc
fastfetch --logo <ABSOLUTE_PATH_TO_LOGO_FILE> --logo-width 70 --logo-height 30 --logo-type iterm
```

**Others**
- `pipx`
- `watch`
```bash
#!/bin/bash
brew install pipx && pipx ensurepath

brew install watch
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
- [ ] [[Python Toolset]]
- [ ] [[JS Toolset]]
- [ ] [[Rust Toolset]]
- [ ] [[Go]]
- [ ] `typescript` - `npm i -g typescript` (make sure you have [[JS Toolset#Install NVM]] first)
- [ ] elixir - `brew install elixir`
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
- [ ] [`brew install terraform`](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
- [ ] [`brew install azure-cli`](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-macos)
- [ ] `brew install infracost`
- [ ] `brew install terraform-docs`
- [ ] [[ECS Exec|Obtain a ssh shell into ECS on local machine]]
- [ ] [[AWS Parameter Store#Update Programmatically|Update parameters in AWS Parameter Store in a semi automated way]]
- [ ] [[AWS Nuke]]
- [ ] [`aws`](https://formulae.brew.sh/formula/awscli)
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



### Install using pipx
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

## Cheatsheet
---
- Command used to give unverified app permissions to execute - `xattr -r -d com.apple.quarantine/Applications/<APP_NAME>.app`
- [Terminal Cli Navigation Shortcut](https://support.apple.com/en-sg/guide/terminal/trmlshtcts/mac)
- [Remove an app from system entirely](https://www.youtube.com/watch?v=IgRi0Z1O_gk)
