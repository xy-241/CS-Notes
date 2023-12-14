---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-12-14T18:16:44+08:00
Last Date: 
References:
---
## Abstract
---
-

## Benefits
---
### Disaster Recovery
- Allow us to roll back to a particular point seamlessly 

## Basics 
---
### Branching Out
```bash
git branch <NEW_BRANCH_NAME> 
```
### Delete Branch
```bash
# Delete local branch
git branch -d <branch-name>

# Delete remote branch
git push origin --delete <branch-name>
```
### Hard Reset
```bash
# Use this caution, make sure other collaborators are not working on any commits after the <COMMIT_ID>
git reset --hard <COMMIT_ID>
```

## Features
---
### Move local commits from branch A to branch B
- Merge commits into branch B
- Delete local branch A, or [[Git Rebase]] for more refine control





## Terminologies
---
### Remote
- The *Repo* in a central cloud
- Default name is `origin`
### Local
### History

### Force Push
- A command `git push --force <remote> <branch>` that *overwrites* the [[#Remote]] repository's history with the [[#Local]] repository's history