---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2023-11-30T16:47:00
Last Date: 2024-07-16T23:25:51+08:00
References: 
title: Macos setup for software engineer
---
## ⚠️ Pre-requisites
---
### Package Manager
- [ ] [[Package Manager#Brew]] 
- [ ] [[Package Manager#NPM]]
- [ ] [[Package Manager#Pipx]]
- [ ] [[Package Manager#Cargo]]
- [ ] [[Package Manager#Basher]]


## Daily Apps
----
- [ ] [Floorp](https://floorp.app/en/), a Firefox-based browser, [Install Bypass Paywalls](https://github.com/iamadamdev/bypass-paywalls-chrome)
- [ ] [Arc](https://www.youtube.com/watch?v=8PhdfcX9tG0) - Chrome-based browser with great UX
- [ ] [Google Drive Client](https://www.google.com/intl/en_sg/drive/download/) - Cloud storage
- [ ] [Obsidian](https://obsidian.md/) - Note taking App
- [ ] [Notion](https://www.notion.so/desktop) - Note taking app
- [ ] [Anytype](https://download.anytype.io/) - Notion but local
- [ ] [Telegram Desktop](https://desktop.telegram.org/) - Messaging app
- [ ] [StrongBox](https://apps.apple.com/us/app/strongbox-password-manager/id897283731) - Password Manager
- [ ] [Gifski](https://apps.apple.com/us/app/gifski/id1351639930?mt=12) - GIF convertor
- [ ] [Tutanota](https://tutanota.com/#download)- Private email
- [ ] [List of Wonderful Apps Waiting to Be Explored!](https://sindresorhus.com/apps)

## Terminal & Shell Setup
---
- [ ] [Install FiraCode Nerd Font](https://github.com/ryanoasis/nerd-fonts) - Terminal Font (Download Fira Code and Fira Mono from the release page, then drag and drop them into Font Book)
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
- [ ] [[Atuin]] - `history` replacement
- [ ] [[File System Hierarchy#joshuto]] - Terminal File Manager
- [ ] [[File#dua]] - Disk Usage Analyser
- [ ] `brew install btop` - `htop`/`top` replacement
- [ ] `brew install xh` - partial [[curl]] replacement
- [ ] `navi` - interactive command cheatsheet, `man` replacement
```bash
brew install navi # Installation

echo "# === navi configuration by Xinyang ===" >> ~/.zshrc
# To have the ability to override default parameter values 
echo 'navi="navi --fzf-overrides-var '\''--no-select-1'\''"' >> ~/.zshrc 
# Shell integration, so can we use Ctrl-G to run the program
echo -e 'eval "$(navi widget zsh)" \n' >> ~/.zshrc

# Add my cheatsheets, re-run this command for updates!
navi repo add https://github.com/xy-241/cli-cheat

navi fn welcome # Config Page
```
- [ ] `brew install tealdeer` - `man` replacement
- [ ] `fzf` - `grep` replacement
```bash
brew install fzf # Installation 

cat <file_name> | fzf -m # multi-line select

# Fuzzy search files with file preview
brew install chafa # To have image rendered in terminal
fzf --preview '<path_to_preview.sh> {}' # Refer to https://github.com/junegunn/fzf?tab=readme-ov-file#previewing-an-image for more information
```
- [ ] [[Process (进程)#procs]] - `ps` replacement
- [ ] `brew install pueue` & `pueued -d` to start - cli process manager
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
- [ ] `brew install watch`
- [ ] Custom bash commands (to be added to `.zshrc`)
```bash
# cht.sh shortcut
h() {
	curl cht.sh/$1
}
```

## Programming Language Setup
---
- [ ] [[Python Toolset]]
- [ ] `brew install ipython`
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
- [ ] `brew install hyperfine` - A command-line benchmarking tool
- [ ] `brew install --cask dbeaver-community`  - Open-source DB viewer
- [ ] `brew install gh`, `gh auth login` for painless Github CLi Auth
- [ ] [[Git#Git Add-ons]]
- [ ] `brew install lnav` - Logfile Navigator



## Virtualisation Tools
---
- [ ] [[Docker#Docker Installation]]
- [ ] [[Virtualisation#Vagrant]]
- [ ] [[Virtualisation#QEMU]]



## Cloud Computing
---
- [ ] `brew tap hashicorp/tap & brew install hashicorp/tap/terraform`
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
echo "# === AWS Cli configuration by Xinyang" >> ~/.zshrc
echo "export AWS_PROFILE=<DEFAULT_PROFILE_NAME>" >> ~/.zshrc
echo "export AWS_REGION=ap-southeast-1" >> ~/.zshrc
echo >> ~/.zshrc
aws configure # Auth CLi
```
- [ ] `pipx install checkov`
- [ ] `pipx install ddtrace`



## Networking
---
- [ ] [[Secure Tunneling#Cloudflare Tunnel|cloudflared]] 
- [ ] [[DNS#q]] - `dig` replacement
- [ ] [[Secure Tunneling#Ngrok]]
- [ ] [[File Sharing]]
- [ ] `brew install telnet`
- [ ] `basher install rauchg/wifi-password` - get the password for the WiFi you’re currently logged onto, make the following changes to the installed bash script at `$HOME/.basher/cellar/bin/wifi-password.sh$`
```bash
# Comment out the below
ssid="`$airport -I | awk '/ SSID/ {print substr($0, index($0, $2))}'`"

# Add in the following
ssid=`networksetup -getairportnetwork en0 | awk -F": " '{print $2}'`
``` 


>[!tool]+ Some other useful tools
> - [ ] [[Cloudflare#Abstract|Cloudflare CLi]]
> - [ ] [[IP Address#ipinfo/cli]]
> - [ ] [[IP Address#asn]]
> - [ ] [[Bandwidth#Bandwhich]]
> - [ ] `brew install socat`
> - [ ] [[Dynamic Port Forwarding#sshuttle]] - VPN powered by [[SSH]]

## Hardware Tools
---
- [ ] [GPU & Accelerator process monitoring](https://github.com/Syllo/nvtop)
- [ ] [Perf monitoring CLI tool for Apple Silicon](https://tlkh.github.io/asitop/)
- [ ] [rpi-imager](https://github.com/raspberrypi/rpi-imager)
- [ ] [arduino ide](https://github.com/arduino/arduino-ide)
- [ ] `brew install --cask logisim-evolution` - circuit design software



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
