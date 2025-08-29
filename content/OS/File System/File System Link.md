---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2023-10-20T14:13:00
Last Date: 2025-08-29T11:10:54+08:00
References:
description: Hard links save space by directly referencing data, while soft links navigate paths across different file territories.
---
## Abstract
---
- It is like hyperlink on the webpage, that links up the components of [[File System]]


## Hard File System Link
---
```bash
# Create a hard link to a file:
ln /path/to/file path/to/hardlink
```

- Pointing to [[Inode]] with data
- Must be on the same [[File System]]


>[!success] Space saving
> We can have multiple references to a single set of data without duplicating the data. Like an additional name for an existing piece of data on disk. Deleting one hard link does not delete the data, as long as other links to that data remain


>[!important]
> When we create a **hard link** on [[#Soft (Symbolic) File System Link|soft link]] (`ln existing_symlink hardlink_name`), It just resolves the soft link to its target inode (the real file’s inode) and then creates a new hard link to that inode. So the new hard link points **directly** to the real file’s inode, not “to the soft link inode”. Deleting the symlink only removes that symlink inode.



## Soft (Symbolic) File System Link
---
- Separate [[Inode|inode]] containing the [[File System#Pathname|path]] to target [[File|file]]. Become [[#Dangling File System Link]] if target is deleted
- The size is all about the length of the pathname it stores in the inode
- Across different [[File System]]

```bash
# To create a symlink:
ln -s <source-location> <symlink-location>

# To symlink, while overwriting existing destination files
ln -sf <source-location> <symlink-location>
```

>[!bigbrain] Can be used to manage dotfiles
> Tools like [GNU Stow](https://www.gnu.org/software/stow/) helps to manage dotfiles in one place in an organised manner, and we can version control it with [[Git]]. Refer to [Stow has forever changed the way I manage my dotfiles](https://youtu.be/y6XCebnB9gs?si=j4oYPrbRk5bWfq2b) for more details

### Dangling File System Link
- A [[#Soft (Symbolic) File System Link|soft link]] whose stored pathname cannot be resolved to a valid [[Inode|inode]] (because the target file or directory has been moved or deleted)


## Useful Commands
---
```bash
realpath path/to/file_or_directory
```
- **[[#Soft (Symbolic) File System Link|Symbolic link]]**: `realpath` resolves the stored pathname until it reaches the [[Inode|inode]], then prints the canonical path (normalised absolute path with no `.` or `..` left)
- **[[#Hard File System Link|Hard link]]**: `realpath` simply normalises the pathname (since the directory entry already points to the inode)
- For **executables/binaries**, reveals the actual file location on disk after resolving symlinks (useful to see where a command is really stored)

