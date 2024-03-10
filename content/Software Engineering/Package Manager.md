---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
  - macos
  - python
  - js
  - rust
Creation Date: 2024-03-10, 17:29
Last Date: 2024-03-10T22:37:20+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A tool that automates the entire process of **installing**, **updating**, **configuring**, and **removing** software on your computer. Also **handling dependencies** under the hood

>[!success] Effortless Management
> Without a package manager, you'd have to hunt down software, figure out all its dependencies, install everything in the right order – a tedious and error-prone process. Some may even require you to compile from source which requires a compiling tool chain.


## Brew
---
- The [[Package Manager]] for MacOS
- Install with `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- [Interesting analytics data](https://formulae.brew.sh/analytics/)

## Pipx
---
- [[Package Manager]] for Python Applications
- Install with [[#Brew]] - `brew install pipx && pipx ensurepath`

## NPM
---
- [[Package Manager]] for [[Node.js]] Applications
- Come with [[JS Toolset#NVM]]

>[!code]- Obtain the absolute path to global node modules 
> ```bash
> npm root -g
> 
> # We can take advantage of this to copy certain runtime dep to the production build
> cp -R $(npm root -g)/dd-trace ./traced-deps/node_modules
> ```

>[!code]- Manage `package.json`
> With the use of [npm pkg](https://docs.npmjs.com/cli/v7/commands/npm-pkg)
> ```shell
> # Example, set a script called 'pre-commit'
> npm pkg set scripts.pre-commit="npx prettier . --write && npx oxlint"
> ```

## Cargo
---
- [[Package Manager]] for [[Rust]]


## Pacman
---
- [[Package Manager]] for Arch distros

>[!tip] Pacman on Tren!
> [Paru](https://github.com/Morganamilo/paru?tab=readme-ov-file#installation) is a wrapper around Pacman written in [[Rust]]. Very similar syntax, zero learning curve.

>[!tip] Basic Syntax
> Install `pacman -S` , delete `pacman -R`, search `pacman -Ss`

>[!code]- Install package from `package-name.pkg.tar.xz`
> ```bash
> sudo pacman -U package-name.pkg.tar.xz
> ```

