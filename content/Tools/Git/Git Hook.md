---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - git
Creation Date: 2024-01-08, 22:10
Last Date: 2024-03-10T18:13:31+08:00
References: 
draft: 
---
## Abstract
---
- A script or program located in `.git/hooks` [[File System#File Directory]] that can be triggered at certain points in the Git workflow
- These hooks allow you to customize and automate actions before or after specific events, such as committing changes, pushing to a repository, or merging branches
- If the script doesn't `exit 0`, the commit is aborted
- We can use tools like [[#Husky]] to have an easier time managing git hooks


## Benefits
---
- Useful for enforcing coding standards, running tests, or performing other checks to maintain the quality and consistency of a codebase

## Husky
---
- A tool that makes working with [[Git Hook]] easier, requires the [[Package Manager#NPM]]
- `npx husky-init && npm install` to have husky that is managing a script that runs `npm test` before every commit. Detailed can be found [here](https://typicode.github.io/husky/getting-started.html#automatic-recommended)
- More configurations can be found [here](https://typicode.github.io/husky/guide.html)
