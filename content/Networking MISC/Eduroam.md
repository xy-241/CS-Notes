---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-12-29, 14:02
Last Date: 2025-12-29T14:20:47+09:00
References:
draft:
description: Eduroam allows a student to use their home university credentials to access Wi-Fi at other participating institutions.
---
## Abstract
---
- Eduroam allows a student to use their home university credentials to access Wi-Fi at other participating institutions.
- Authenticate at home, authorise locally. Trusts the **decision**, not the identity!



>[!important] How does it work?
> Each university runs a RADIUS server connected to its own identity system (like LDAP). Access points are configured to forward 802.1X authentication requests to the local RADIUS server.
> 
> When a visiting student connects, the local RADIUS server inspects the user’s realm (domain) and forwards the authentication request through the eduroam federation to the student’s home university RADIUS server. The home university authenticates the user against its identity system and returns an **accept or reject decision**. If accepted, the visiting university grants network access without ever authenticating the user itself.


## References
---
- [How Does eduroam Work? - eduroam.org](https://eduroam.org/how/)