---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-07-15T16:58:57+08:00
Last Date: 2023-12-24T16:20:02+08:00
References: 
---
## Abstract
---
- Contains low-level IO software
- Nowadays, stored in **Flash RAM** - nonvolatile & can be updated

## Booting BIOS
---
1. Checks [[Main Memory]] capacity
2. Check [[IO Device]]
3. Scanning [[IO Bus#PCI Bus]] etc to detect all devices attached
4. Determine the **Boot Device** by trying out a list of devices stored in the **CMOS**