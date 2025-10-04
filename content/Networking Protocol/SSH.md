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
Last Date: 2025-10-04T12:28:21+08:00
References:
draft:
description: SSH (Secure Shell) is a network protocol that enables secure remote server management through encrypted communications, supporting robust authentication methods like public-key cryptography over traditional passwords. It allows multiplexing a single connection into multiple channels for various data transfers including command execution and port forwarding.
---
## Abstract
---
- Stands for **Secure [[Terminal#Shell|SHell]]**
- A [[Network Protocol]] used to enable developers to manage [[Host#Server]] and network devices remotely with **encryption**

>[!tip] Port forwarding trick
> If we want to do [[Local Port Forwarding]], [[Remote Port Forwarding]] or [[Dynamic Port Forwarding]], we can start with `ssh -f -N -T` to have more efficient connection and smoother experience.
> 
> - **`-f`** → Forks to background after authentication (runs independently of your terminal process)
> - **`-N`** → Don’t execute remote commands (just forwarding, no shell)
> - **`-T`** → Disable TTY allocation (no interactive terminal)
> 
> This allows us to run only the tunnel, no shell, detached from the terminal.

## SSH Configuration File
---

```ini
# ===== Global Settings =====
Include ~/.orbstack/ssh/config

# ===== Jump Hosts =====
Host jump-host
  HostName <JUMP_SERVER_ADDRESS>         # Example: jump.example.edu
  User <YOUR_USERNAME>                   # Replace with your actual username
  IdentityFile ~/.ssh/<JUMP_KEY_NAME>    # Path to private key for jump server
  IdentitiesOnly yes
  ForwardAgent yes
  
# ===== Only use Jump host if we are not within network =====
Match host target-host,!<JUMP_HOST_ADDRESS> !exec "ping -c 1 -W 500 <TARGET_SERVER_ADDRESS> &>/dev/null"
  ProxyJump jump-host
Host target-host
  HostName <TARGET_SERVER_ADDRESS>       # Example: target.example.edu
  User <YOUR_USERNAME>                   # Replace with your actual username
  IdentityFile ~/.ssh/<TARGET_KEY_NAME>  # Path to private key for target server
  IdentitiesOnly yes
  
# ===== SSH via Cloudflare Tunnel =====
Host <YOUR_DOMAIN>                       # Example: ssh.example.com
  ServerAliveInterval=600
  ProxyCommand <PATH_TO_CLOUDFLARED> access ssh --hostname %h
  
# ===== SSH Agent =====
Host *
   IdentityAgent "<PATH_TO_SSH_AGENT_SOCKET>"
```

>[!tool] Connection scenarios
> 1. **Direct Access**: When on NUS network, connect directly to xlogin.
> 2. **Jump Host Access**: When outside NUS network, automatically routes through soc-jump.
> 3. **Cloudflare Access**: Custom domain uses Cloudflare for secure tunneling 
> 4. **Auto authentication with private key**: Strongbox manages SSH private keys and automatically fills them in

>[!important]- Keywords Explained
>  **Include** - Imports another SSH config file, allowing modular configuration 
> - _Benefit_: Keeps OrbStack configurations separate, enabling cleaner organization
> 
> **Host** - Defines settings for specific host connections
> -  _Benefit_: Allows customised settings for different servers
> 
> **HostName** - Specifies the actual server address to connect to
> - _Benefit_: Enables use of shorthand aliases when connecting
> 
> **User** - Sets default username for connections
> - _Benefit_: Avoids typing username with every connection
> 
> **IdentityFile** - Specifies private key file for authentication 
> - _Benefit_: Uses specific keys for specific servers, improving security, especially if you are using multiple ssh keys and having a ssh agent that tries to perform the authentication
>
> **IdentitiesOnly** - Forces SSH to only use specified identity files
> - _Benefit_: Prevents authentication failures from trying wrong keys
> 
> **ForwardAgent** - Enables SSH agent forwarding
> - _Benefit_: Allows authentication to further servers without copying keys 
> 
> **Match** - Creates conditional blocks based on criteria
> - _Benefit_: Dynamically changes connection behavior based on conditions
> 
> **!exec** - Executes a command and applies config if command fails 
> - _Benefit_: Checks network connectivity to determine routing
> 
> **ProxyJump** - Specifies intermediate host to connect through
> - _Benefit_: Simplifies multi-hop SSH connections into a single command
> 
> **ServerAliveInterval** - Sets time interval for keep-alive packets
> - _Benefit_: Prevents connection timeouts for long-running sessions
> 
> **ProxyCommand** - Defines custom command for establishing connections
> - _Benefit_: Enables connections through non-standard routing, like Cloudflare
> 
> **IdentityAgent** - Specifies socket path for SSH agent
> - _Benefit_: Integrates with password managers like Strongbox for key management
> 
> **RemoteCommand** - Task specific
> - _Benefit_: Best when you want “ssh host” to always run one thing and then exit.” Not so good for “I want a normal shell but with some tweaks.

>[!tip] Connect to NUS SoC cluster without FortiClientVPN
> Refter to setting up [Jump host](https://www.comp.nus.edu.sg/~chowcm/sjump.html) and use the config file stated above.


## SSH Packet
---
![[ssh_packet.webp|400]]

>[!attention] Encryption in transit
> The diagram at the left hand side shows all the components of a SSH packet. The diagram at the right hand side shows only **Packet Length** and **Message Authentication Code** are **unencrypted** when the SSH packet is transmitted over the [[Computer Network]].

| Packet Component                | Purpose                                                                                                                                                                                                                                                                                                               |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Packet Length**               | Indicates the total length of the packet in [[Computer Data Representation#Byte\|Byte]] (excluding the length field itself).                                                                                                                                                                                          |
| **Padding amount**              | Determines the size of padding.                                                                                                                                                                                                                                                                                       |
| **Payload**                     | The actual data being transmitted. Usually compressed with a tool like [zlib - Wikipedia](https://en.wikipedia.org/wiki/Zlib).                                                                                                                                                                                        |
| **Padding**                     | **Randomly generated bytes** used to obscure the true length of the payload, making it harder to analyze the traffic.                                                                                                                                                                                                 |
| **Message Authentication Code** | A [[Hash Digest]] calculated using the **packet contents** and a **shared secret key**. This ensures the packet hasn't been tampered with and originates from the correct sender. <br><br>A [[Digital Signature]] if [[#SSH Public-key Cryptography Authentication\|Public-key Cryptography Authentication]] is used. |




## SSH Channel
---

![[ssh_tunnel_multiplexing.png|400]]

- A **single SSH connection** can be **multiplexed** into **multiple SSH channels simultaneously**, each **transferring various types of data bidirectionally**

>[!example]
> **Session Channel**
> - Channel used for running commands on remote [[Host]]
> 
> **Port Forwarding Channel**
> - For [[Local Port Forwarding]]
> 
> **X11 Channel**
> - Forwarding X11 (graphical user interface) traffic, allowing remote X11 applications to be displayed on the local machine




## SSH Public-key Cryptography Authentication
---
- We can use username and password, but [[SSH]] supports [[Asymmetric Cryptography]] which is more secure

>[!question] Why not just use the good old username and password?
> First, password is **vulnerable to brute-force attacks**, you know users tend to set **weak passwords** :)
> 
> Second, we may have multiple users accessing the same remote server account. Using password means **all users share the same password**, on the other hand, with public-key, each user has his **own private key** to access the remote server. When we want to **remove a user's access**, we just need to **remove his public key** from the remote server.

>[!code] Setup Public-key Cryptography Authentication
> 1. Generate [[Asymmetric Cryptography#Public Key]] and [[Asymmetric Cryptography#Private Key]] using [[Asymmetric Cryptography#EdDSA, ED25519]] (Much shorter key than [[Asymmetric Cryptography#RSA]] with the same level of encryption)
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





## References
---
- [How Secure Shell Works (SSH) - Computerphile - YouTube](https://youtu.be/ORcvSkgdA58?si=i5F1Jc2ecK1bXJJJ)
- [Secure Shell - Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell#:~:text=A%20single%20SSH%20connection%20can,of%20a%20server%2Dside%20process.)