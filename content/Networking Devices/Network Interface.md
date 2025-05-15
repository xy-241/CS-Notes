---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-05-15, 21:44
Last Date: 2025-05-15T22:17:45+08:00
References: 
draft: 
description: Learn the fundamentals of Network Interface Cards (NICs) and essential Linux networking commands. This guide covers NIC functionality, MAC addressing, and how to view interface states and IP configurations using ip link and ip addr commands.
---
## Abstract
---
- A Network Interface Card (NIC) is a hardware component that connects a computer to a network
- Provides the physical interface between a computer and the network medium
- Each NIC has a unique [[MAC Address|MAC address]] for identification on the network
- Modern NICs often support multiple network speeds and protocols

## Interface Management Commands
---

### Basic Interface Information
- **Show all network interfaces and their states**
  ```sh
  ip link show

  # Output roughly follows the following structure
  # <index>: <interface_name>: <flags> mtu <size> status <state>
  #     link/<type> <MAC or info>
  ```
  - Lists all network interfaces
  - Shows interface states (UP/DOWN)
  - Displays MAC addresses
  - Shows master bridge information
  - Indicates interface type and features

### IP Configuration
- **Display IP address information**
  ```sh
  ip addr show
  ```
  - Shows IP addresses for all interfaces
  - Displays subnet masks
  - Shows broadcast addresses
  - Indicates interface status
  - Lists IPv4 and IPv6 addresses