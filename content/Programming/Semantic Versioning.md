---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2025-06-05, 20:19
Last Date: 2025-06-29T16:21:45+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Follows the format: `MAJOR.MINOR.PATCH`, a way to assign version numbers to software release in a way to convey meaningful information about the changes between releases 

## Patch
---
- Last number, e.g. `1.2.**3**`
- **When to bump:** Bug fixes, small tweaks, or security patches
- **Doesn't break anything** for users, safe to upgrade ✅ 
- **Example:** `1.2.3` → `1.2.4` after fixing a broken API edge case

## MINOR 
---
- Middle number, e.g. `1.**2**.3`
- **When to bump:** Add **backward-compatible features**
- Old code still works, new features available, signals improvements without risk 🚀 
- **Example:** `1.2.3` → `1.3.0` when you add a new function or config option

## MAJOR
---
- First number, e.g. `**1**.2.3`
- **When to bump:** You make **breaking changes**
- APIs changed, old usage might break. Big warning to users: read the changelog ⚠️ 
- **Example:** `1.2.3` → `2.0.0` if you rename functions or change behavior

## Unstable Release
---
### `0.x.x`
- Anything with major `0` (`0.x.y`) means “still unstable”
- Even patch or minor bumps **can break stuff**
- Used for **early-stage**, experimental packages

### Pre-release tags
- `1.2.0-alpha.1` -> `1.2.0-beta.1` -> `2.0.0-rc.1`
- Optional, used to release **test versions** before stable
- Often used in CI pipelines, internal QA

## Version Range Operators
---
### `^` Caret
- Allows minor version updates

>[!example]
> - `^1.2.3` accepts `1.2.3` to `<2.0.0` (any 1.x.x version)
> - `^0.2.3` accepts `0.2.3` to `<0.3.0` (any 0.2.x version)
> - `^0.0.3` accepts only `0.0.3` to `<0.0.4` (only patch updates)

### `~` Tilde
- only allows [[#Patch|patch updates]]

>[!example]
> - `~1.2.3` accepts `1.2.3` to `<1.3.0` (any 1.2.x version)
> - `~0.2.3` accepts `0.2.3` to `<0.3.0` (any 0.2.x version)
> - `~1.2` accepts `1.2.0` to `<1.3.0`

>[!tip]
> Use `~` when you want to be more cautious and only accept bug fixes.