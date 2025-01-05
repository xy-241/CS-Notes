---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - git
Creation Date: 2023-11-28T16:31:00
Last Date: 2025-01-05T15:40:25+08:00
References: 
description: git rebase rewrites commit history for linearity. Avoid rebasing public branches; use it for local feature branches. Commands like --continue, --abort, and -i manage conflicts or edits. For shared branches, prefer git merge.
---
>[!important]
> The golden rule of `git rebase` is to **avoid rebasing public branches** to prevent rewriting history that others might rely on.
> 
> `git rebase` should only be applied to **local feature branches** to keep your feature branch commit history clean.
> 
> For **public branches** shared among team members, it's better to use `git merge` to preserve the integrity of the shared history. This way, when tracing which new feature caused an issue, you can troubleshoot using the merge commits instead of relying just on `git bisect`, which can be more complex and less intuitive.

## Abstract
---
- `git rebase` is a Git command used to rewrite the commit history of a branch by moving its base to a new starting point. This allows you to integrate changes from another branch while maintaining a linear and clean commit history


## Basics
---
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
---
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

### Remove feature branch from Git history
- Initialise the rebase, including commits between the merged commit (inclusive) and the commit where the feature branch starts (inclusive) 
- If you only want to remove the feature branch, simply save and exit the rebase plan without making any changes. The branch will be effectively removed from the history 

## References
---
- [ByteByteGo on LinkedIn](https://www.linkedin.com/posts/bytebytego_systemdesign-coding-interviewtips-activity-7279732455685648384-aZJv?utm_source=share&utm_medium=member_desktop)
- [直接使用git pull拉代码，被同事狠狠diss了！\_哔哩哔哩\_bilibili](https://b23.tv/CFCm3Bo)