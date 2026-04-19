---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-10-19T13:51:00
Last Date: 2026-04-19T19:50:08+08:00
References: 
---
## Abstract
---
- Used to monitor the **frontend** of an application
- Enable us to get the metadata about the client such as the user-agent, [[IP Address]] & record down the user actions on the page via [[#Session Replay]]

## Session Replay
---
- Play back a user's real browsing session in the browser. Looks like a screen recording, but stored as **DOM events**, not video
- Most implementations (Umami, Datadog RUM, LogRocket, OpenReplay) use [**rrweb**](https://www.rrweb.io/), which captures two things:
	- An initial **full-page DOM snapshot** (including inline stylesheets) when the session starts, so playback renders without the origin server
	- A stream of **incremental events** (DOM mutations, clicks, scroll, inputs, mouse moves) batched and timestamped
- Playback replays the snapshot into a sandboxed iframe, then re-applies the events at original timing. No video codec, only deterministic DOM reconstruction

### Why Not Video
| Approach | 5 min session size | Text / inputs | Searchable |
|---|---|---|---|
| Screen video @ 1080p | **30 to 100 MB** (lossy, scales with visual activity) | Hard to read | No, only pixels |
| rrweb DOM events | **200 KB to 2 MB** compressed (50 to 100× smaller) | Exact, subject to masking | Yes, query events by selector or value |

- Because events are DOM-level, replays can be **filtered and diffed** (e.g. "show sessions that clicked `.checkout-btn`"), which a pixel buffer cannot support

### Masking & Privacy
- rrweb supports **selector-based masking** that redacts text nodes and input values **before they leave the browser**. Umami exposes it as `data-mask-level`:
	- `strict` = `maskAllInputs: true` + `maskTextSelector: '*'`. Smallest events, replay is visually sparse
	- `moderate` (default) = `maskAllInputs: true` only. Text stays visible
- Drop entire subtrees from recording with a **block selector**, e.g. `data-block-selector=".no-record"`. Useful for payment widgets, authenticated dashboards, or any element wrapping PII
- Session replay is **effectively PII capture in transit** without masking. Update privacy policies and DPAs before turning it on for pages with user-entered data

### Storage & Sampling
- Events are stored as `JSONB` or compressed `bytea` in the analytics DB. Umami uses two tables: `session_replay` (raw chunks) and `session_replay_saved` (user-pinned replays)
- Control volume at ingest time (cheaper than deleting later):
	- `data-sample-rate` (0..1): fraction of sessions recorded. Production deployments typically sit at `0.1` to `0.2`
	- `data-max-duration` (ms): hard cap per session, guards against long-lived tabs. Umami recorder default 5 min
- Backstop with retention pruning + [[Postgres#Postgres VACUUM|VACUUM]]:
```sql
DELETE FROM session_replay WHERE created_at < NOW() - INTERVAL '30 days';
VACUUM ANALYZE session_replay;
```

## References
---
- [rrweb documentation](https://www.rrweb.io/)
- [Umami session replay announcement (v3.1.0)](https://github.com/umami-software/umami/releases/tag/v3.1.0) 