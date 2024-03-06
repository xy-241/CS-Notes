---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-11-14T21:02:55+08:00
Last Date: 2024-03-06T14:36:50+08:00
References: 
---
## Ubuntu Setup
---
1. Install [Docker Engine](https://docs.docker.com/engine/install/ubuntu/#set-up-the-repository)
	Install Thought Script
	```bash
	
	```
1. 

We may have missing dependencies when dkpk the Docker Desktop, run this to install those missing dependencies
```bash
sudo apt --fix-broken install
```

3. Add the user to the docker group
```bash
sudo usermod -aG docker <USERNAME>
```