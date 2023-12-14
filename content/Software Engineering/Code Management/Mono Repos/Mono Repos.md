---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-10-04T14:01:00
Last Date:
---
## Abstract
---
- Put all the project codes in *one single repo*

## Benefits
---
### Visibility
- Just clone one repo, and we can have all the apps in a project in a single folder to view
### Consistency 
- Share things among apps like `ESLint.conf`, UI library web components, utility lib and documentation etc
### Dependency Management
- A breaking change made to a shared lib will notify all apps that depend on it
### Shared Libs
- A single source of truth for dependencies
- The shared nodeJS modules will be only installed once
### Good for CI
- All apps already unified

## Cons
---
### Big
- More things to build, test & stored