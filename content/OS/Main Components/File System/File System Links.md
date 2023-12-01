---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-20T14:13:00
Last Date: 
References:
---
## Abstract


## Terminologies 
### Hard
- Pointing to [[Inode]]
- Space saving, we can have multiple references to a single set of data without duplicating the data
- Must be on the same [[File System (Directory Hierarchy)]]
- Like an additional name for an existing piece of data on disk. Deleting one hard link does not delete the data, as long as other links to that data remain
- When we create a *Hard link* on [[#Soft (Symbolic)]], we create a direct link to the existing piece of data on disk, so independent of the [[#Soft (Symbolic)]]

```bash
# Create a hard link to a file:
ln /path/to/file path/to/hardlink
```

### Soft (Symbolic)
- Points to another [[File]] by [[Pathname]]
- The size is all about the length of the [[Pathname]] it stores
- Broken if the another [[File]] is broken
- Across different [[File System (Directory Hierarchy)]]
```bash
# To create a symlink:
ln -s <source-location> <symlink-location>

# To symlink, while overwriting existing destination files
ln -sf <source-location> <symlink-location>
```

### Dangling Link
- When [[#Soft (Symbolic)]] points to an nonexistent file