---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-10-23T15:22:00
Last Date: 
References:
---
## Abstract
- An [[Init System]] 


## Commands
### ``systemctl daemon-reload``
- ``systemctl`` caches the service config files. When we make edits or add in new service config file. We should call this command to take in the changes


## Terminologies
### Units
- Things that *Systemd* can manage for you
### Runtime Units
- Config files stored inside `/run/systemd/system`
### Priority 
- `/etc/systemd/system` 1st priority, [[#Runtime Units]] 2nd priority, followed by `/lib/systemd/system`
### Service
- A type of [[#Units]]
- [Example: Systemd service for HashiCorp Vault](https://chat.openai.com/share/be72b529-70e8-43a0-b083-1410f6ab2302)
