---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2023-10-23T15:22:00
Last Date: 2024-04-13T18:01:33+08:00
References: 
aliases: []
---
## Abstract
---
- An [[Init System]] that manages the lifecycles of of [[Process (进程)]] for [[OS]] that is based on [[Linux Kernel]]




## Systemd Unit
---
- System resources that [[Systemd]] manages 


>[!info] Systemd Unit vs Systemd Service 
> A Systemd Service is a specific type of unit that represents a **system service** or **daemon**. Systemd Unit covers a bigger scope that includes [[Socket]], [[File System#Mounted File System]] and [[OS/IO/IO Device|IO Device]] etc.


>[!tip] Systemd Unit management cheatsheet
> Refer to this [How To Use Systemctl to Manage Systemd Services and Units | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units) to list, edit and inspect [[#Systemd Unit]] which is used to manage the Systemd.
> 
> Just a side note, `systemctl start` starts the systemd unit immediately but the system unit isn't auto started after a reboot. `systemctl enable` ensures the systemd unit is restarted after a reboot, however it is only started after a reboot.

>[!tip] View the systemd unit configuration
> `systemctl list-units` to find the systemd unit you interested in. Then use `systemctl cat <systemd_unit>` to view the configuration.
### Static Systemd Runtime Unit
- [[#Systemd Unit]] stored inside `/lib/systemd/system`, provided by the [[OS]] or packages

### Dynamic Systemd Runtime Unit
- [[#Systemd Unit]] stored inside `/run/systemd/system`, reflect the current state of systemd-managed services and resources 


## Custom Systemd Unit
---
- We should place our own Systemd Unit files in `/etc/systemd/system/`. This can override or extend the default unit files found in [[#Static Systemd Runtime Unit]] without directly modifying the **default unit files** provided by the [[OS]] or packages.


>[!important]
> Systemd caches the systemd config files. When we make **edits or add** in new systemd config files. We should call `systemctl daemon-reload` to take in the changes.

>[!example]
> Here are some example: [Shadowsocks service](https://chat.openai.com/share/c42ff710-7742-4cc5-b496-b2c62a5c79d2) & [HashiCorp Vault service](https://chat.openai.com/share/be72b529-70e8-43a0-b083-1410f6ab2302)

## Systemd Log
---
- You can use `journalctl -u <systemd_unit>` to view all the log produced by a [[#Systemd Unit]]. Refer to [How To Use Journalctl to View and Manipulate Systemd Logs | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs) for more details

>[!tip] Systemd Log export & backup
> You can use `journalctl -u shadowsocks --since "2024-04-12 00:00:00" --until "2024-04-13 00:00:00" -o cat > shadowsocks_2024-04-12.log` to export the logs of a system unit collected from `2024-04-12 00:00:00` to `2024-04-13 00:00:00` into a file called `shadowsocks_2024-04-12.log`. The you can use [[FUSE#RCLONE]] to backup the file to a cloud storage.