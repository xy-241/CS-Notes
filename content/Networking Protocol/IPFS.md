---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-05-18, 20:05
Last Date: 2024-05-18T20:10:27+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A decentralised storage system
- IPFS gateway - bridge the gap between web2 and web3, using http to access content on the IPFS network, DHT
- each uploaded file is represented with an unique hash calculated form the file itself, we use this hash to retrieve from the IPFS network instead of retrieving a particular file from a server using an url
- IPNS is the DNS in the IPFS, the value it maps to is the hash that can change, so we can update our application, and user-side no change

- Once another peer downloaded your file and updated and propagated its DHT, even if you remove the file on your side, the file is still available for others. It is like bittorrent