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
Last Date: 2024-04-12T00:55:48+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A tool that automates the entire process of **installing**, **updating**, **configuring**, and **removing** software on your computer. Also **handling dependencies** under the hood

>[!success] Effortless Management
> Without a package manager, you'd have to hunt down software, figure out all its dependencies, install everything in the right order – a tedious and error-prone process. Some may even require you to compile from source which requires a compiling tool chain.

- The list below shows the comparison of commands of package managers lik [[#Brew]], apt & [[#Pacman]] etc
<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" src="https://en.wikipedia.org/wiki/Package_manager#Comparison_of_commands" 
 ></iframe>
 </div>


## Brew
---
- The [[Package Manager]] for MacOS
- Install with `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- [Interesting analytics data](https://formulae.brew.sh/analytics/)

>[!code] Package Management
> List all the installed packages: `brew list` 
> 
> Check for outdated package: `brew outdated`
> 
> Upgrade all packages: `brew upgrade`
> 
> Check for deprecated packages: `brew doctor`




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

>[!code] Package Management
> List all the installed packages: `pipx list` 
> 
> Upgrade all packages: `pipx upgrade-all`

>[!caution]
> Currently, there isn't a way to check for outdated packaged. Refer to this [issue](https://github.com/pypa/pipx/issues/149) for more updates on this matter.

## NPM
---
- [[Package Manager]] for [[Node.js]] Applications
- Come with [[JS Toolset#NVM]]

>[!code] Package Management
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
- [[Package Manager]] for [[Rust]], installed along with the [[Rust Toolset]]

>[!code] Package Management
> `ls ~/.cargo/bin` - list all the installed packages
> 
> Updating packages - Cargo doesn't come with a command to upgrade installed packages. We need to re-install the packages to update the packages.


## Pacman
---
- [[Package Manager]] for Arch distros

>[!tip] Pacman on Tren!
> [Paru](https://github.com/Morganamilo/paru?tab=readme-ov-file#installation) is a wrapper around Pacman written in [[Rust]]. Very similar syntax, zero learning curve.

>[!code] Package Management
> Install packages: `pacman -S` 
> 
> Search for a package: `pacman -Ss`
> 
> Upgrade all packages: `pacman -Syu`
> 
> Remove a package: `pacman -R`


>[!code] Install package from `package-name.pkg.tar.xz`
> ```bash
> sudo pacman -U package-name.pkg.tar.xz
> ```


## Basher
---
- A [[Package Manager]] for shell scripts. You can install it with `curl -s https://raw.githubusercontent.com/basherpm/basher/master/install.sh | bash`. Refer to its [Github Page](https://github.com/basherpm/basher) for more information

>[!code] Basic usage
> Install package: `basher install <github_username>/<project_name>` or the full [[URL]] to the git repo that isn't hosted on Github.
> 
> Uninstall package: `basher install <github_username>/<project_name>`
> 
> Check for outdated package: `basher outdated`
> 
> Upgrade all packages: `basher upgrade --all`


## Download from Github
---
- Github has many useful tools, but some of them aren't part of [[Package Manager]] we can use on our system. We can still install the executables without compiling ourselves if they offer [releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)

>[!code] Install executables from Github releases page
> Install the executable using `wget -qO package.tbz <GITHUB_PROJECT_URL>/releases/latest/download/<ASSET_FILENAME>`.
> 
> Then we can decompress the file with `tar xf <ASSET_FILENAME>`, go into the decompressed folder and move the executable to `/usr/local/bin`. And now we should be able to call the executable from the [[Terminal]]!

>[!caution]
> We need to manually update the packages installed. 


## References
---
- [Package manager - Wikipedia](https://en.wikipedia.org/wiki/Package_manager#Comparison_of_commands)