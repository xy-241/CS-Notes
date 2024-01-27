---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-08-10T00:30:35+08:00
Last Date: 2023-12-21T15:57:35+08:00
References: 
---
## Abstract
---
- Person authorized to use the system


## Linux User
---
Based on [[Unix]] & [[POSIX]]

```bash
# List All Users
cut -d: -f1 /etc/passwd

# Obtain User Info
id <USER_NAME>

# Obtain Current User Info
who
```


## Terminologies 
---
### UID
- Stands for *User IDentification*
- A number that is assigned to each [[User|User]] by System Administrator
- One is assigned to **Superuser (UNIX)**
### User Group
- Assigned a Group IDentification (GID)
- [[User|User]] can be members of the group


