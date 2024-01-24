// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import commentsScript from "./scripts/comments.inline"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Footer(props: QuartzComponentProps) {
  return (
    <script src="https://giscus.app/client.js"
      data-repo="xy-241/CS-Notes"
      data-repo-id="R_kgDOK0yNDg"
      data-category="General"
      data-category-id="DIC_kwDOK0yNDs4CbdOh"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="dark_protanopia"
      data-lang="en"
      data-loading="lazy"
      crossOrigin="anonymous"
      async>
    </script>
  )
}

Footer.beforeDOMLoaded = commentsScript

export default (() => Footer) satisfies QuartzComponentConstructor