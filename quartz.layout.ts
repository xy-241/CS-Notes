import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.Banner()],
  afterBody: [Component.Comments()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/xy-241/CS-Notes"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta({showReadingTime:true}),
    Component.TagList(), 
    Component.Author(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.DesktopOnly(Component.RecentNotes({ 
      title: "Recent writing",
      linkToMore: "tags/" as SimpleSlug, 
      limit: 3, 
      showTags: true,
      sort: (pageA, pageB) => {
        const dateA = pageA.dates?.modified?.getTime() ?? 0
        const dateB = pageB.dates?.modified?.getTime() ?? 0
        return dateB - dateA
      }
    })),
    Component.Explorer(),
  ],
  right: [
    // Component.MobileOnly(Component.Explorer()),
    // Component.DesktopOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
