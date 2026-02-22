---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
  - bash
Creation Date: 2024-03-10, 17:36
Last Date: 2026-02-22T17:29:15+08:00
References:
draft:
description:
---
## Terminal
---
- A program that provides a **text-based window** where you use the [[#Shell]] to interact with [[OS]]

>[!tool] Fix `unknown terminal type` errors
> `infocmp -x xterm-ghostty | ssh -i ~/.ssh/master_key xinyang@<ssh_server_endpoint> "tic -x -"`
> 
> This command takes your local Ghostty terminal definition and installs it on your remote server, so that when you SSH in using Ghostty, the remote machine knows how to handle it (correct colors, key sequences, etc.) instead of throwing `unknown terminal type` errors.

### iterm2
- My daily drive, [Install iterm2 terminal](https://iterm2.com/downloads.html)

### Termius
- User friendly [[Terminal]], currently I only use it for [[SSH]] & GUI [[File Sharing#SFTP]] that supports **drag & drop**!
- [Termius - Terminal GUI](https://www.termius.com/download/macos)

>[!important]
> Install Termius as a dmg from the official website instead of the App Store, so you can access your local machine from the Termius app. For more information, view [here](https://support.termius.com/hc/en-us/articles/21150508470809-I-can-t-find-the-local-terminal-option-in-the-desktop-app).

>[!tip]- Termius Config
> [Modify Default Shell to zsh](https://support.termius.com/hc/en-us/articles/8414917685145-How-to-change-the-default-shell-in-local-terminal-)
> 
> Your Termius configuration page should look something like the following picture
> 
> ![[termius_config.png|700]]

## Terminal Multiplexer
---
- Tools that let you manage **multiple shells inside a single Terminal window** 
- Useful for running long processes, splitting panes, and detaching/reattaching sessions

### tmux
- My daily driver for multiplexing
- [Install tmux](https://github.com/tmux/tmux/wiki)  
- Key features:
  - Split windows into panes
  - Detach/reattach sessions
  - Persistent workflows (survive SSH disconnects and preserve command state like `lazygit`)

>[!code]- Common Commands
> ```bash
> # Create new session (attach if exists)
> tmux new-session -A -s cs_git
>
> # List all sessions
> tmux ls
>
> # Kill a specific session
> tmux kill-session -t mysession
>
> # Detach from a session (inside tmux)
> Ctrl-b d
>
> # Reattach to last session
> tmux attach
> ```

### Zellij
- A modern Rust-based multiplexer with built-in layouts and plugin support
- Install with `cargo install --locked zellij`

>[!code]- Common Commands
> ```bash
> # Start a new Zellij session
> zellij
>
> # Start a named session
> zellij --session mysession
>
> # List all sessions
> zellij list-sessions
>
> # Attach to an existing session
> zellij attach mysession
>
> # Kill a specific session
> zellij kill-session mysession
>
> # Kill all sessions
> zellij kill-all-sessions
> ```
>
> 🔑 Inside Zellij (default keybindings):
> - `Ctrl-p` → command palette  
> - `Alt-n` → new tab  
> - `Alt-h/j/k/l` → move between panes (vim-style)  
> - `Alt-[` → enter scroll mode  
> - `Ctrl-g` → lock mode  

### Alternatives
- **GNU Screen** – the OG multiplexer, everywhere by default, but feels dated  
- **Byobu** – a friendlier wrapper around tmux/Screen, adds status bar and easier bindings  
- **WezTerm** – GPU-accelerated terminal emulator with built-in multiplexer mode  
- **abduco + dvtm** – minimalist combo, lightweight but niche


## Shell
---
- The program that lets you control your [[OS]] using text commands

>[!important] `/bin/sh` vs `/bin/bash`
> `/bin/sh` is the POSIX shell - minimal, basic scripting features only. `/bin/bash` is the Bourne Again Shell - a superset of sh with extras like:
> - Tab completion
> - Arrow key history navigation
> - Bash script syntax like conditionals, {1..10} brace expansion and $() nesting etc.
> 
> On Debian, `/bin/sh` is [[File System Link#Soft (Symbolic) File System Link|symlinked]] to `dash`, which is even more stripped down than traditional `sh`. For interactive use, you almost always want bash. You can configure it with `sudo chsh -s /bin/bash <username>`.

### ZSH
- A [[Unix#Unix-like]] [[#Shell]] that is very extensive and powerful
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
