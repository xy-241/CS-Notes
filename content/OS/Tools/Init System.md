---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-23T15:26:00
Last Date: 2024-04-13T18:16:08+08:00
References: 
---
## Abstract
---
- A [[Process (进程)]] that runs in the background
- Most important [[Process (进程)]] with [[Process IDentifier (PID)]] **1**
- Manages the **lifecycle** of **all services** that run in the background
- Below shows a list of common init systems. Basically [[Systemd]] for [[Linux Kernel]], **Launchd** for [[MacOS]] and **busybox** for for [[OS#Embedded OS]] like [[OpenWRT]]
<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://en.wikipedia.org/wiki/Init#Other_implementations" 
 ></iframe>
 </div>


>[!tip] Something simpler
> If you just want to run a task in the background after the user logs out, you can just run `nohup <command> &`, the **standard output** and **standard error** streams are redirected to a file named `nohup.out` in the **current directory by default**. But this doesn't restart the service on failure or after a reboot etc.


