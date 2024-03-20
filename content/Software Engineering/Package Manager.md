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
Last Date: 2024-03-19T20:45:52+08:00
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

>[!code]- Package Management
> `brew list` - list all the installed packages
> 
> `brew upgrade` - update all the packages
> 
> `brew doctor` - check for deprecated packages

>[!info]- Brew Formula
> Simple Ruby scripts, we can easily revert our modifications and merge upstream updates with `brew edit <PACKAGE_NAME>`.

>[!info]- Brew Tap
> Add additional repositories that extend the core Homebrew installation, so we can install a wider range of command-line tools and utilities. You can list all the repositories brew taps on with `brew tap`.

>[!info]- Brew Cask
> Extension to Homebrew that allow you to install full-fledged macOS GUI applications. You can list all the apps installed with brew cash with `brew list --cask`.

>[!info]- Brew Bottles
> These are pre-compiled binary packages created by Homebrew maintainers or the community. They save you the time and effort of compiling a formula from source code.

>[!info]- Poured from Bottle
> When you see a message like "Pouring <package_name>", it means Homebrew is installing the package using a pre-compiled bottle instead of building it from source.
## Pipx
---
- [[Package Manager]] for Python Applications
- Install with [[#Brew]] - `brew install pipx && pipx ensurepath`

## NPM
---
- [[Package Manager]] for [[Node.js]] Applications
- Come with [[JS Toolset#NVM]]

>[!code]- Package Management
> `npm list -g` - list all the installed packages
> 
> `npm update -g` - update all the packages
> 
> `npm outdated -g` - check for outdated packages

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

>[!info]- `package-lock.json`
> When we install a package, it is recorded as `package@^1.11.10`, `1.11.10` is using [Semantic Versioning](https://semver.org/). This means if that package releases a new version, and we run `npm install`, it will grab the newer version without our notice! `package-lock.json` ensures it doesn't grab the latest version unless we explicitly ask it to do so. This ensures the dependencies we install across different collaborators are the same.

## Cargo
---
- [[Package Manager]] for [[Rust]]

>[!code]- Package Management
> `ls ~/.cargo/bin` - list all the installed packages
> 
> Updating packages - Cargo doesn't come with a command to upgrade installed packages. We need to re-install the packages to update the packages.


## Pacman
---
- [[Package Manager]] for Arch distros

>[!tip] Pacman on Tren!
> [Paru](https://github.com/Morganamilo/paru?tab=readme-ov-file#installation) is a wrapper around Pacman written in [[Rust]]. Very similar syntax, zero learning curve.

>[!tip] Basic Syntax
> Install `pacman -S` , delete `pacman -R`, search `pacman -Ss`, upgrade `pacman -Syu`

>[!code]- Install package from `package-name.pkg.tar.xz`
> ```bash
> sudo pacman -U package-name.pkg.tar.xz
> ```

## Download from Github
---
- Github has many useful tools, but some of them aren't part of [[Package Manager]] we can use on our system. We can still install the executables without compiling ourselves if they offer [releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)

>[!code] Install executables from Github releases page
> Install the executable using `wget -qO package.tbz <GITHUB_PROJECT_URL>/releases/latest/download/<ASSET_FILENAME>`.
> 
> Then we can decompress the file with `tar xf <ASSET_FILENAME>`, go into the decompressed folder and move the executable to `/usr/local/bin`. And now we should be able to call the executable from the [[Terminal]]!