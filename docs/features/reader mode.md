---
title: Reader Mode
tags:
  - component
---

Reader Mode is a feature that allows users to focus on the content by hiding the sidebars and other UI elements. When enabled, it provides a clean, distraction-free reading experience.

## Configuration

Reader Mode is enabled by default. To disable it, you can remove the component from your layout configuration in `quartz.layout.ts`:

```ts
// Remove or comment out this line
Component.ReaderMode(),
```

## Usage

The Reader Mode toggle appears as a button with a book icon. When clicked:

- Sidebars are hidden
- Hovering over the content area reveals the sidebars temporarily

Unlike Dark Mode, Reader Mode state is not persisted between page reloads but is maintained during SPA navigation within the site.

## Customization

You can customize the appearance of Reader Mode through CSS variables and styles. The component uses the following classes:

- `.readermode`: The toggle button
- `.readerIcon`: The book icon
- `[reader-mode="on"]`: Applied to the root element when Reader Mode is active

Example customization in your custom CSS:

```scss
.readermode {
  // Customize the button
  svg {
    stroke: var(--custom-color);
  }
}
```
