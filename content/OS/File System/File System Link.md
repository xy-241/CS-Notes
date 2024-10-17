---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2023-10-20T14:13:00
Last Date: 2024-10-17T16:34:00+08:00
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
> When we create a **Hard link** on [[#Soft (Symbolic) File System Link]], we create a **direct link** to the existing piece of data on disk, so independent of the soft file system link.



## Soft (Symbolic) File System Link
---
- Points to another [[File]] by [[File System#Pathname]]
- The size is all about the length of the [[File System#Pathname]] it stores in [[Inode]]
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
- When [[#Soft (Symbolic)]] points to an nonexistent [[File|file]]


## Useful Commands
---
**`realpath`**
- Display the resolved [[#Hard File System Link]] for a [[File]] or [[File System#File Directory]]

```bash
realpath path/to/file_or_directory
```