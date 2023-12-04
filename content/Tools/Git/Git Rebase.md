---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-11-28T16:31:00
Last Date: 
References:
---
## Abstract
- 


## Benefits
### Concise History
- Sometimes, there are commits that are used to tested the idea
- If we don't clean them up, when people branch out, these testing idea commits will follow too which make it harder to read and understand the development of the project
- To prevent meaningless trails and errors commits from polluting the git history, especially when others are branching out

## Basics
### Include commits to rebase
- `git rebase -i HEAD~<NUM_COMMITS>`
- `NUM_COMMITS` is the number of commits, including the current commit HEAD is pointing to
### Check the rebase plan
- `git rebase --edit-todo`
### Continue with rebase after resolving a Merge Conflict
- `git rebase --continue`
### Abandon this current rebase
- `git rebase --abort`
- Use when we messed up, and don't know what to do
### Merge 
- On the branch(`FEATURE_BRANCH`) we want to merge back: `git rebase <MAIN_BRANCH>`
- Checkout out to `MAIN_BRANCH`: `git rebase <FEATURE_BRANCH>`
- Personally I like to have a pull request, merge, then [[#Remove feature branch from Git History]]


## Features
### Edit changes in a past commit
- Initialise the rebase, and set `e` to the commit we want to modify
- After modification, run `git commit --amend`
- Complete the rebase with `git rebase --continue`
- This will create a new commit, we can then proceed to rebase again to drop the previous old commits
### Drop commits in the commit history
- Initialise the rebase, and set `d` to the commit we want to drop
### Rewrite commit messages
- Initialise the rebase, and set `r` to the commit we want to modify
### Combine multiple commits into one
- Initialise the rebase, and set `s` to the commit we want to modify
>[!info]
>- Make sure the oldest commit in the included commits can't be squashed 
>- Or we will get `error: cannot 'squash' without a previous commit` error
### Remove feature branch from [[Git#History]]
- Initialise the rebase, include commits between the merged commit(inclusive) and the commit(inclusive) where the feature branch starts 
- If we just want to remove the feature branch, we can just save and quite the rebase plan. And it is done