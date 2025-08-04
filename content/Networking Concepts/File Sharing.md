---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-03-26, 16:13
Last Date: 2025-08-04T18:52:46+08:00
References: 
draft: 
description: 
---
## Abstract
---
- The sharing of data among [[Host]] over [[Computer Network]]

| File Sharing Services                     | Use Case                                                                                                                            |                                     |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| SCP                                       | `scp file.txt user@remote:/path/to/dest/`<br><br>Simplest CLI tool using [[SSH]] underneath.                                        |                                     |
| RSYNC                                     | `rsync -avz file.txt user@remote:/path/`<br><br>Efficient sync with [[#Delta Transfer\|delta-transfer]], supports resume, excludes. |                                     |
| [[File Sharing#Airdrop\|Airdrop]]         | File sharing in [[Computer Network#Local Area Network (LAN)                                                                         | LAN]] among **Apple devices only**. |
| [[File Sharing#LocalSend\|LocalSend]]     | File sharing in LAN among different devices like from Android to iPhone.                                                            |                                     |
| [[File Sharing#SFTP\|SFTP]]               | File sharing with [[Host#Server\|Server]], since SFTP is pre-installed in all modern machines.                                      |                                     |
| [[File Sharing#Filebrowser\|Filebrowser]] | File sharing with **a nice web UI**.                                                                                                |                                     |

### Delta Transfer
- Only parts of the a file that have changed (the "delta") are transferred, **not the whole file**. 



## Airdrop
---
- Apple's proprietary file-sharing feature for Apple devices
- **Bluetooth:** AirDrop initially uses Bluetooth to discover nearby compatible devices
- **Peer-to-Peer Wi-Fi:** Once devices are discovered, AirDrop creates a peer-to-peer Wi-Fi connection between them, even without an internet connection, thanks to [Zero-configuration networking - Wikipedia](https://en.wikipedia.org/wiki/Zero-configuration_networking). The data is transferred over the `awdl0` [[Network Interface]] 

>[!success] Extremely Fast
> It is the fastest wireless local file sharing tool I have tried so far!

## LocalSend
---
- Open-source application that lets you easily and securely share files and text between devices on your local network
- Download [LocalSend Client](https://github.com/localsend/localsend?tab=readme-ov-file#download), it basically includes a web server that is able to send and receive files over the [[Computer Network]]. So no 3rd-party [[Host#Server]] is needed 

>[!success] Cross-platform
> Supports Windows, macOS, Linux, Android & iOS.

>[!attention] 
> The [[Host]] need to be connected to the same [[Computer Network]]!
> 
> Slower than [[#Airdrop]].

>[!help] Unable to detect another host
> Restart the LocalSend client on another host.

## SFTP
---
- Stands for **SSH File Transfer Protocol**
- Basically [[SSH]] with [[File Sharing]] capabilities, uses the same port `22`
- Refer to this [guide](https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server) to use `sftp` cli command

## Filebrowser
---
- Having a gDrive Web UI to access files in a particular folder of the machine with [[Authentication]].
- Refer to [filebrowser Github Repo](https://github.com/filebrowser/filebrowser) for more details

## References
---
- [How To Use SFTP to Securely Transfer Files with a Remote Server | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server)