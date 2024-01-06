---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
Creation Date: 2024-01-02, 16:40
Last Date: 2024-01-04T17:25:13+08:00
References: 
draft: 
---
## Abstract
---
![[basic_token_authentication.png]]
- One example is API Key
## Benefits
---
### Stateless
- Address [[Session-Cookie Authentication#Hard to Scale]] issue
- [[Token-Based Authentication]] includes a user ID, eliminating the need for the [[Host#Server]] to store token information in memory

### Cookie Independent 
- Doesn't rely on [[Cookie]], can work with [[Local Storage]]

### Cross Platform Support
- Support both mobile and web platforms natively 

### Much More Secure
- Mitigate the [[Session-Cookie Authentication#XSS Attack]] & [[Session-Cookie Authentication#CSRF Attack]] risks