---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-12-29, 12:06
Last Date: 2025-01-01T17:15:19+08:00
References: 
draft: 
description: "Common VPN frameworks like IPSec and TLS/SSL offer secure data transmission, while WireGuard is a lightweight alternative. VPNs provide three key functions: encryption (AES, 3DES), integrity (SHA), and authentication (RSA, PSK). PiVPN simplifies self-hosting."
---
## Abstract
---
- Common **VPN frameworks** include **IPSec** and **TLS/SSL**, which are collections of [[Network Protocol|networking protocols]]. A modern, lightweight alternative is WireGuard

>[!important] Three main purposes
> **Encryption**: Protects data using algorithms like AES and 3DES.
> 
> **Integrity**: Ensures data hasn't been tampered with, using hashing algorithms like SHA.
> 
> **Authentication**: Verifies identities using methods such as RSA and pre-shared keys (PSK).

>[!question] How about Wireguard and OpenVPN?
> WireGuard is **independent of both TLS/SSL and IPSec**. It is a standalone protocol designed to be lightweight, secure, and easy to configure, without relying on the frameworks of TLS/SSL or the protocols of IPSec.
>
> OpenVPN is a VPN protocol that **falls under the TLS/SSL framework** but is highly versatile, allowing integration with other frameworks like IPSec when needed.

>[!tool] VPN self-host
> [PiVPN](https://www.pivpn.io/) is the simplest way to setup and manage a VPN.

## References
---
- [VPN概念，技术原理和误区\_哔哩哔哩\_bilibili](https://b23.tv/RWjPNAm)