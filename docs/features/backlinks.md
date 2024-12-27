---
title: Backlinks
tags:
  - component
---

A backlink for a note is a link from another note to that note. Links in the backlink pane also feature rich [[popover previews]] if you have that feature enabled.

## Customization

- Removing backlinks: delete all usages of `Component.Backlinks()` from `quartz.layout.ts`.
- Hide when empty: hide `Backlinks` if given page doesn't contain any backlinks (default to `true`). To disable this, use `Component.Backlinks({ hideWhenEmpty: false })`.
- Component: `quartz/components/Backlinks.tsx`
- Style: `quartz/components/styles/backlinks.scss`
- Script: `quartz/components/scripts/search.inline.ts`
