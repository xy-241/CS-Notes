---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - security
  - bash
  - linux
  - macos
Creation Date: 2024-03-08, 21:34
Last Date: 2024-03-22T21:50:31+08:00
References: 
draft: 
description: 
---
## Abstract
---
- **Secure SHell**
- A [[Network Protocol]] used to enable developers to manage servers and network devices remotely

## Public-key Cryptography Authentication
---
- We can use username and password, but [[SSH]] supports [[Asymmetric Cryptography]] which is more secure

>[!code] Setup Public-key Cryptography Authentication
> 1. Generate [[Asymmetric Cryptography#Public Key]] and [[Asymmetric Cryptography#Private Key]] that are 4096 [[Computer Data Representation#Bit]] using [[Asymmetric Cryptography#RSA]] (A good balance of security & performance)
> ```bash
> ssh-keygen -t ed25519 -C "YOUR_COMMENT" # ed25519 keys are a lot shorter than rsa keys without sacrificing security
> ```
> 
> 2. Copy the public key(the key ends with `.pub`) to the remote [[Host]] (Should be stored inside `~/.ssh/authorized_keys` by default)
> ```bash
> ssh-copy-id -i /path/to/your/public_key username@remote_hostname
> ```
> 
> 3. Disable password authentication & enable public key authentication. Modify `/etc/ssh/sshd_config`, uncomment and set the following attributes
> ```plaintext
> PasswordAuthentication no
> PubkeyAuthentication yes
> ```
> 
> 4. Restart the SSH server on the remote host
> ```bash
> # Linux
> sudo systemctl restart sshd
> 
> # MacOS
> sudo launchctl stop com.openssh.sshd
> sudo launchctl start com.openssh.sshd
> ```
> 
> 5. SSH into remote host with private key!
> ```bash
> ssh -i /path/to/your/private_key username@remote_hostname
> ```
