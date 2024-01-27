---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2023-07-14T20:53:45+08:00
Last Date: 2024-01-27T19:43:46+08:00
References: 
---
## Abstract
---
* Controlled by [[Device Controller]]
* Examples are like keyboard and monitor 


## Useful Commands
---
**`read`**
- **BASH**, not for **ZSH** builtin for retrieving data from standard input
```bash
# Display a prompt before the input:
read -p "Enter your input here: " variable
```


 ## Terminologies
---
### Plug and Play
- [[OS]] automatically collect information about the [[IO Device]]
- Centrally assign **interrupt level** & **IO Addresses**
- Tell each IO device what its numbers are
