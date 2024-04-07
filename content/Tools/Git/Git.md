---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - git
Creation Date: 2023-12-14T18:16:44+08:00
Last Date: 2024-04-08T00:11:09+08:00
References: 
---
## Abstract
---
- The modern tool used to empower developers to collaborate
- Great for disaster recovery, allows us to roll back to a particular point seamlessly 

```bash title="Command Cheatsheet"
# Making a new Git branch
git branch <NEW_BRANCH_NAME> 

# Delete local branch
git branch -d <branch-name>
# Delete remote branch
git push origin --delete <branch-name>

# Hard Reset
# Use this caution, make sure other collaborators are not working on any commits after the <COMMIT_ID>
git reset --hard <COMMIT_ID>

# Merge feature branch changes
# On main branch
git merge <FEATURE_BRANCH>
```

### Move local commits from branch A to branch B
- Merge commits into branch B
- Delete local branch A, or [[Git Rebase]] for more refine control

## Git Add-ons
---
- A list of small tools that extend on [[Git]]

### git-open
- Type git open to open the repo website (GitHub, GitLab, Bitbucket) in your browser
- Install with [[Package Manager#Basher]] - `basher install paulirish/git-open`

### git-quick-stats
- Access various useful statistics in a git repository
- Install with [[Package Manager#Basher]] - `basher install arzzen/git-quick-stats`

## Github
---
### Setup a Private Email in Git with Github
- Don't expose you personal email, while still get emails sent to your personal email!
- Go to https://github.com/settings/emails, scroll down and config your as shown in the picture below
![[github_private_email.png|700]]
- Don't forget to change your local git user email with `git config --global user.email "YOUR_PRIVATE_GITHUB_EMAIL"`
- More info refer to [Setting your commit email address - GitHub Docs](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)

## Terminologies
---
### Remote
- The *Repo* in a central cloud
- Default name is `origin`
### Local
### History

### Force Push
- A command `git push --force <remote> <branch>` that *overwrites* the [[#Remote]] repository's history with the [[#Local]] repository's history