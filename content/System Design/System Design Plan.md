---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2025-11-01, 19:58
Last Date: 2025-11-01T19:59:44+08:00
References:
draft:
description:
---
## System Design Plan
---
### Step 1 (Requirements)
- Hybrid CAP.
- Non-functional considerations with context.
- Clarify what is in-scope and out-of-scope.


### Step 2 (Core Entities & API)
- Identify high-level DB entities (don’t worry about attributes yet).
- User info embedded in the JWT header, so it can’t be altered.


### Step 3 (High-Level Design)
- Map out the architecture diagram.
- Determine the type and quality of database needed (both NoSQL and SQL can work).
- Start simple without optimization; cover all functional requirements first.
- Abstract out the payment component (provide a callback endpoint to receive payment confirmations).
- Use distributed locks with auto-TTL to keep the data model clean (mid-level candidates may only think of cron jobs).


### Step 4 (Deep Dive (the differentiator))
- Reference relevant non-functional requirements.
- **ElasticSearch** for fast search using inverted indexes; cannot be the main DB since it can’t handle complex transaction management.
- **Change Data Capture (CDC):** changes in the primary DB are streamed to update ElasticSearch. Heavy updates may require a queue or batching.
- **Caching complexities (especially with ranking):**
  - Might require sticky sessions.
  - AWS OpenSearch supports node query caching for faster queries without adding external caching layers.
  - Alternatively, Redis works, but invalidation must be handled carefully when primary DB changes.
  - CDN caching works for static content but loses effectiveness with high key permutations or timestamp-driven keys. User-specific results also reduce usefulness.
- **Real-time UX improvements:**
  - **Long polling:** cheap and easy, especially if users remain on a page for a few minutes.
  - **Server-Sent Events (SSE):** simpler than WebSockets if communication is server → client only.
- **Choke Point (virtual waiting queue):**
  - Prevents instant access and avoids “fastest click wins” behavior.
  - Redis can be used.
  - Similar to a rate limiter but with better UX.


## Misc
---

### When to shard
- High write throughput, vertical scaling exhausted.
- Excessive data volume.
- Hotspot keys causing uneven load.

### When **not** to shard
- Strong global consistency required.
- Queries frequently join large tables (sharding increases fan-out).
- Operational maturity is low.

## References
---
- [System Design Interview: Design Ticketmaster w/ a Ex-Meta Staff Engineer - YouTube](https://youtu.be/fhdPyoO6aXI?si=dI9umvuXx-jTOMUR)