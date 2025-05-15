---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-05-15, 22:19
Last Date: 2025-05-16T01:41:32+08:00
References: 
draft: 
description: Learn how Layer 2 software bridges work in macOS and Linux. This guide explains virtual interfaces, Ethernet frame forwarding, and network bridging for virtualization, container networking, internet sharing, and traffic analysis. Includes practical commands for creating and managing bridge interfaces.
---
## Abstract
---
- A software-based network device that operates at Layer 2 (Data Link layer) of the [[OSI Model]]
- Connects multiple network segments into a **single broadcast domain**
- Functions similarly to an [[Network Switch]], making multiple networks behave as one
- Transparently forwards [[Ethernet|Ethernet frames]] between interfaces based on [[MAC Address|MAC addresses]]
- Implemented as a virtual [[Network Interface|network interface]] in the operating system

## Core Concepts
---

### Virtual Interface
  - Created and managed through operating system commands
  - Appears as a network interface (e.g., `bridge0`)
  - Can be dynamically created and destroyed
  - Supports various physical and virtual interfaces


### Layer 2 Communication
  - Enables direct communication between devices
  - No Layer 3 (IP) routing required
  - Works at the Ethernet frame level

### Bridge Architecture

```
      [bridge0]
      /      \
   [en0]    [en1]
```
- Bridge interface (`bridge0`) connects multiple physical interfaces
- Physical interfaces (`en0`, `en1`) represent network connections
- All connected interfaces operate as a **single broadcast domain**

## Use Cases
---

### Virtualisation
- **VM Networking**
  - Guest VMs share host's network interface
  - VMs appear as full LAN members
  - Enables seamless network integration

- **Container Networking**
  - [[Docker Network#Docker Bridge Network]] connects containers
  - Creates isolated network environments
  - Enables container-to-container communication

### Network Management
- **Internet Sharing**
  - Bridges Wi-Fi and Ethernet interfaces
  - Enables connection sharing between networks
  - Common in macOS and Linux systems

- **Traffic Analysis**
  - Interface bridging for passive monitoring
  - Network traffic capture and analysis
  - Security monitoring and debugging

## Implementation
---

### macOS Bridge Configuration
- **Software Bridge Implementation**
  - `bridge0` as the primary bridge interface
  - Managed through `ifconfig` commands
  - Supports Ethernet and Wi-Fi interfaces

- **Limitations**
  - Best performance with Ethernet interfaces
  - Wi-Fi bridging may be unstable
  - Driver-specific restrictions may apply

## Bridge Management
---
- **Interface Control**
  ```sh
  # Create bridge
  ifconfig bridge0 create
  
  # Add interfaces
  ifconfig bridge0 addm en0 addm en1
  
  # Enable bridge
  ifconfig bridge0 up
  ```

- **View bridge interface membership**
  ```sh
  bridge link show
  
  # on Macos 
  ifconfig <interface_name> | grep member
  ```
  - Lists interfaces belonging to bridges
  - Shows bridge names (e.g., br-lan, br-guest)
  - Displays Spanning Tree Protocol (STP) state
  - Shows interface cost and priority
  - Indicates bridge port status

- **List only bridge interfaces**
  ```sh
  ifconfig -l | tr ' ' '\n' | grep ^bridge
  ```
  - Filters and displays only bridge interface names
  - Useful for quick identification of bridge interfaces
  - Output is clean, one interface per line

- **Show detailed bridge configuration**
  ```sh
  ifconfig bridge0
  ```
  - Displays complete configuration of specified bridge
  - Shows bridge parameters and settings
  - Includes interface statistics
  - Lists member interfaces

- **List all interfaces with bridge details**
  ```sh
  ifconfig | grep -A5 ^bridge
  ```
  - Shows all bridge interfaces with 5 lines of context
  - Includes interface status and configuration
  - Displays bridge-specific parameters
  - Shows member interface information

