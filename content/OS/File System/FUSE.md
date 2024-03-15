---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - macos
  - linux
Creation Date: 2024-02-07, 16:20
Last Date: 2024-03-15T22:18:33+08:00
References: 
draft: 
description: FUSE (Filesystem in Userspace) lets programs manage filesystems without kernel privileges, enabling custom cloud storage mounts and powering tools like Rclone. It achieves this by acting as a bridge between user-space filesystem implementations and the kernel, forwarding requests and returning results.
---
## Abstract
---
- Stands for [[File System|Filesystem]] in [[User Space|USErspace]]
- A software interface that enables program in the [[User Space]] to create and manage filesystems without requiring [[Privilege Level#Kernel Mode]]
</br>
  
- Traditionally, filesystem operations like reading and writing files, creating directories, and managing file metadata are handled by the [[Kernel]]. However, FUSE allows these operations to be implemented in user space by user programs, outside the kernel
</br>

- The content of these file systems can come from anywhere: from the local disk, from across the network, from memory, or any other combination of sources



>[!success] Flexibility 
> Developer can create their own filesystem with customisations without the need to modify the Kernel
> 
> This is commonly used for mounted Cloud Storage. The files dropped into the mounted Cloud Storage is stored by making network calls instead of IO. We need to have a set of logic for this. FUSE allows us to introduce this new set of logic without modifying the kernel

>[!success] Developer Friendly
> Writing a file system using FUSE is orders of magnitude easier and quicker than the traditional approach of writing in-kernel file systems. Since FUSE file systems are regular applications (as opposed to [[Kernel#Kernel Module]]), you have just as much flexibility and choice in programming tools, debuggers, and libraries as you have if you were developing standard applications



>[!info] FUSE on MacOS
> macOS doesn't come with a FUSE kernel module built directly into the core operating system, but it does support installing and using FUSE via 3rd-party FUSE Kernel Module. [macFUSE](https://formulae.brew.sh/cask/macfuse#default) is a popular choice

### FUSE Driver
- Also known as **FUSE File Systems** 
- The actual filesystem implementation running in [[User Space]]

### FUSE Mechanism
![[fuse_architecture.png|400]]

- FUSE works by providing a **FUSE Kernel Module** that acts as a **bridge** between the filesystem requests made by **File System User** and [[#FUSE Driver]]

  </br>
  
- When an application makes a filesystem request, the request is forwarded to the FUSE kernel module, which then passes it to the user-space filesystem implementation. Once the operation is completed in user space, the result is sent back to the kernel module, which returns the result to the application


## RCLONE
- [Rclone](https://rclone.org/) allows us to mount cloud storages to the local [[File System]], supports both read and write

>[!code]- Mounting
> Mount with `rclone mount --vfs-cache-mode writes <REMOTE>: <LOCAL_FOLDER>`, so we are able to use CLI to manipulate files without issues. Without `--vfs-cache-mode writes`, we may get weird errors when using `cp` to transfer files for some reasons. If you know why, please comment down below :)



## APFS-FUSE
---
- [apfs-fuse](https://github.com/sgan81/apfs-fuse) is a **read-only** [[#FUSE Driver]] for [[File System#APFS]](mounting APFS to [[Linux Kernel]]). It also supports software encrypted volumes and fusion drives. Firmlinks are not supported yet
- Obtain `apfs-fuse` by building from source
```bash
# Obtain the Repo
git clone https://github.com/sgan81/apfs-fuse.git
cd apfs-fuse
git submodule init
git submodule update
 
# Compile the driver:
mkdir build
cd build
cmake ..
ccmake . # Only if you want to change build options
make
```

>[!help]- `cmake ..` unable to run successfully
> If you are building from AUR, you need to have the build tools installed, try `sudo pamac install base-devel`. For more details, refer to [Arch Docs](https://wiki.manjaro.org/index.php/Arch_User_Repository)

- Mount and unmount the APFS
```bash
# Mounting, uid and gid are the id of current user. This allows current user to access the mounted APFS
apfs-fuse -o uid=<uid>,gid=<gid>,allow_other /dev/<device> <mount-path>

# Unmounting
sudo umount <mount-path>
```
- For more information, refer to [here](https://github.com/sgan81/apfs-fuse?tab=readme-ov-file#usage)





## References
---
- [CS170 Lab 6: File System](https://sites.cs.ucsb.edu/~trinabh/classes/w19/labs/lab6.html)