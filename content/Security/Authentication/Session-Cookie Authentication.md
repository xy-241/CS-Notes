---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2024-01-18T11:50:36+08:00
References: 
---
## Abstract
---
![[session-cookie_authentication.png|500]]

- Addresses [[HTTP Basic Authentication#Cons]]. A *session ID* is generated to track the user's status during their visit
- The session ID is recorded both [[Host#Server]] and in the [[Host#Client]]
- On Client side, it is stored inside [[Cookie]]. This is the name origin for *Session-Cookie*
- On Server side, it is stored in the server [[Main Memory]] or an independent session server
- Users must still provide their username and password initially, after which the server creates a session for the user's visit. Subsequent requests include the cookie, allowing the server to compare client-side and server-side session IDs
- [https://codeforces.com/]() uses Session-Cookie Authentication, the cookie name is `JSESSIONID`

## Benefit
---
### Improved Security
- Usually comes with [[TTL]], and the token value has no relationship with the user password. So when a session token is leaked, the risk of data loss is smaller

## Cons
---
### XSS Attack
- The session [[Cookie]] can be hijacked by XSS attack which injects malicious scripts to send the session cookie to the hacker

### CSRF Attack
- Hackers deceive users' browsers into unknowingly executing actions on websites. Hackers create malicious sites or emails with links to the targeted site. When users click the link, their browser sends a request with their session [[Cookie]], making the server believe it's a genuine user request
- Websites can use anti-CSRF tokens or demand re-authentication for sensitive tasks to counter CSRF Attack

### Hard to Scale
- Each [[Session-Cookie Authentication]] requires server-side storage of the session state. This can become a performance bottleneck as the number of users and sessions grows
### Non-mobile Friendly
- Mobile app developers must directly manage cookies using the available APIs