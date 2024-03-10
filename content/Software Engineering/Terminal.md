---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
  - bash
Creation Date: 2024-03-10, 17:36
Last Date: 2024-03-10T17:55:21+08:00
References: 
draft: 
description: 
---
## Terminal
---
- A program that provides a **text-based window** where you use the [[#Shell]] to interact with [[OS]]

## Shell
---
- The program that lets you control your [[OS]] using text commands

### ZSH
- A [[Unix]] [[#Shell]] that is very extensive and powerful
- [Install ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#how-to-install-zsh-on-many-platforms)


## Shell Enhancement
---
- Supercharging [[#Shell]]!

### ohmyzsh
- Community-driven framework for managing [[#ZSH]] configuration
- [Install ohmyzsh](https://ohmyz.sh/#install)

>[!code]- Install Powerlevel10k theme
> [Powerlevel10k](https://github.com/romkatv/powerlevel10k) is a very customisable theme for ohmyzsh 
> ```shell
> brew install romkatv/powerlevel10k/powerlevel10k
> echo "source $(brew --prefix)/share/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc  
> 
> zsh # Refresh shell to confiure powerlevel10k
> p10k configure # Run this to reconfigure
> ```

>[!code]- Install ZSH Plugins
> All plugins are install under the path that is stored in `$ZSH_CUSTOM`
> ```bash
> # Install zsh-autosuggestions plugin
> git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
> # Install zsh-syntax-highlighting plugin
> git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
> 
> 
> # Replace the .zshrc plugins config
> plugins = (
> 	git
> 	zsh-autosuggestions
> 	zsh-syntax-highlighting
> )
> ```
