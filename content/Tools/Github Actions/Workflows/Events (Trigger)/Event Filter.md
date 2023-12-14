---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - cicd_tools
Creation Date: 2023-07-28T18:20:47+08:00
Last Date: 2023-07-28T18:20:47+08:00
References:
---
>[!exampel] push [[Events (Trigger)]]
>- Filter based on target branch
>- Filter based on [[File System]] to ignore certain files

>[!note] Pattern matching
>1. ``feat-*``: All branch that starts with ``feat-``, but we cant include more ``/``
>2. ``'feat/**'``: All the branches that start with ``feat/``, and we can have more ``/`` like ``feat/new/button``

>[!note] References
>[push event filter](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#running-your-pull_request-workflow-based-on-the-head-or-base-branch-of-a-pull-request)