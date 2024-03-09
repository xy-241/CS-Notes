---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-08-10T00:30:35+08:00
Last Date: 2024-03-10T00:09:11+08:00
References: 
---
## Abstract
---
- Person authorized to use the system


## Linux User
---
- Based on [[Unix]] & [[POSIX]]
</br>

- Obtain Current [[User]] Info
```bash
who
```

- Obtain [[#UID]] of a user and [[#User Group]] information that the user is in
```bash
id <USER_NAME>
```

- List All Users in the system
```bash
cut -d: -f1 /etc/passwd
```



## Terminologies 
---
### UID
- Stands for **User IDentification**
- A number that is assigned to each [[User|User]] by System Administrator
- One is assigned to **Superuser (UNIX)**
### User Group
- Assigned a Group IDentification (GID)
- [[User|User]] can be members of the group


