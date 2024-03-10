---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-08-10T00:30:35+08:00
Last Date: 2024-03-10T22:26:13+08:00
References: 
---
## Abstract
---
- Person authorised to use the system


## Linux User
---
- Based on [[Unix]] & [[POSIX]]
</br>

- Obtain information of all [[User]] session in the [[OS]]
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

- Create user with **administrative privileges**
```bash
sudo useradd -m -G wheel <USERNAME>
sudo passwd johndoe # Set the password for new user

sudo usermod -aG <GROUPNAME> <USERNAME> # Add new user to other groups
```
- Delete user
```bash
sudo userdel <USERNAME>
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


