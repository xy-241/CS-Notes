---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - devops
  - binance
Creation Date: 2024-11-11, 10:41
Last Date: 2024-11-13T13:56:47+08:00
References: 
draft: 
description: 
---
## Abstract
---
- We usually interact with `launchd` through a **convenient layer of abstraction** provided by `brew services`

>[!question] How does this work?
> Homebrew maintains a `.plist` configuration file for every package it installs, typically located at `/usr/local/Cellar/$pkgName/$pkgVersion/homebrew.mxcl.$pkgName.plist`. On newer Macs, this file may be found at `/opt/homebrew/Cellar/$pkgName/$pkgVersion/homebrew.mxcl.$pkgName.plist`. 
> 
> When starting a service, `brew services` reads the corresponding `.plist` file and copies it to a location like `/usr/local/opt/$pkgName/homebrew.mxcl.$pkgName.plist`. Editing this copied version of the `.plist` file does not affect the original, and therefore won't alter the service's configuration.

>[!question] How to append command parameters
> You can add `<string>` elements to the `<array>` to append command arguments.
> 
> However, be aware that `brew services` often employs a **wrapper script for enhanced service management**. This wrapper script might **handle command-line parameters**, potentially overriding or supplementing those specified in the plist file.

## References
---
- [macos - How to pass arguments to homebrew service - Stack Overflow](https://stackoverflow.com/questions/41880429/how-to-pass-arguments-to-homebrew-service)