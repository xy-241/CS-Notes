---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-04-11, 20:20
Last Date: 2024-05-12T23:13:59+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Open-source [[OS#Embedded OS]] that is based on [[Linux Kernel]], primarily designed for [[Network Router]]

>[!attention]
> Use the [[File System#Ext4]] for [[File System]] for easy expansion of the [[Flash Memory]]!

>[!attention]
> OpenWRT doesn't uses ash instead of bash, so `.bashrc` doesn't work, use `/etc/profile` instead.

[OpenWrt Firmware Selector](https://firmware-selector.openwrt.org/?version=23.05.3&target=rockchip%2Farmv8&id=friendlyarm_nanopi-r4s)
## Packages
---
>[!important] Prerequisites
> OpenWRT comes with minimal set of tools, run the below command to update and install all the neccssary tools to install new tools & configure openwrt with breeze!
> 
> - [ ] `opkg install tar wget-ssl shadow-useradd shadow-usermod shadow-groupadd sudo openssh-sftp-server unzip curl bash git-http`

### GUI System Tools
- [ ] [luci-theme-argo](https://github.com/jerrykuku/luci-theme-argon) & `opkg install luci-lib-ipkg`
- [ ] `opkg install luci-i18n-netdata-zh-cn`
- [ ] `opkg install luci-i18n-uhttpd-zh-cn`
- [ ] `opkg install luci-i18n-ddns-go-zh-cn`
- [ ] `opkg install luci-i18n-dockerman-zh-cn`, refer to [OpenWrt as Docker container host](https://openwrt.org/docs/guide-user/virtualization/docker_host) for more information


### Networking Tools
- [ ] `opkg install cloudflared`
- [ ] `opkg install nftables kmod-nft-queue kmod-nf-conntrack-netlink` for [OpenGFW](https://gfw.dev/)
- [ ] `opkg install adguardhome` (the binary & config are in `/usr/bin`, [setup guide](https://openwrt.org/docs/guide-user/services/dns/adguard-home)) - [DNS sinkhole - Wikipedia](https://en.wikipedia.org/wiki/DNS_sinkhole)

### Proxy Tools
- [ ] `opkg install luci-app-openclash`

### System Tools
- [ ] `opkg install rclone`(or install the zip from [official site](https://rclone.org/downloads/), `ln -s /root/.bin/rclone /usr/bin/rclone`) & [[Cron Job#Cronitor]] for [[#OpenWRT Backup]]
- [ ] `opkg install python3`
- [ ] `opkg install coreutils-nohup procps-ng-watch`
- [ ] `opkg install file`
- [ ] `opkg install stress`
- [ ] `opkg install luci-app-dockerman`

### Third-party packages
- [[Package Manager#Download from Github]]
- [ ] btop
- [ ] fastfetch



## OpenWRT Backup and Restore
---
- I use [[FUSE#RCLONE]] and [[Cron Job]] to have automated back up to a cloud storage of my choice. I also use [[Cron Job#Cronitor]] to make I get notified when the job fails. Refer to [OpenWrt Wiki - Backup and restore](https://openwrt.org/docs/guide-user/troubleshooting/backup_restore) for more information

>[!code] Sample cronjob code
> Make sure you have **rclone**, **cronitor cli** installed and a folder `backup` created in the root directory. For Cronitor cli, you need to download the installation script and remove the `sudo` from the script first, and `cronitor discover` didn't work for me, you need to add in the cronitor wrapper yourself as shown below.
>
> ```
> 0 0 * * * cronitor exec <your_cronitor_job_key> "sysupgrade -b /root/backup/backup-${HOSTNAME}-$(date +%F%T).tar.gz && /usr/bin/rclone sync /root/backup/ r2:<remote_cloud_storage_folder>"
> ```

>[!important] OpenWRT restore
> Personally I prefer to use the Web UI to restore the OpenWRT system configuration, then use [[File Sharing#SFTP]] to upload all the configuration files at the `/root`.
## References
---
- [【软路由篇】2024新手软路由指南，什么是软路由？为什么要软路由？小白怎么上手软路由？全家科学上网看这篇就够了！ - 科学上网 技术分享](https://bulianglin.com/archives/openwrt.html)