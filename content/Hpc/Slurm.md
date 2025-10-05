---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - hpc
Creation Date: 2025-10-04, 13:03
Last Date: 2025-10-04T13:54:25+08:00
References:
draft:
description:
---
## Abstract
---


## Common Tuning Flags
---

| Flag                | Meaning     | Description                                              |
| ------------------- | ----------- | -------------------------------------------------------- |
| `-p gpu`            | Partition   | Run in the `gpu` queue (instead of default queue)        |
| `--constraint=xgpf` | Node filter | Restrict job to nodes labeled `xgpf`                     |
| `--gpus=1`          | GPU request | Request 1 GPU (can increase to 2, 4, etc., if available) |

