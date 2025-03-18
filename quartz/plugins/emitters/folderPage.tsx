import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import { pageResources, renderPage } from "../../components/renderPage"
import { ProcessedContent, QuartzPluginData, defaultProcessedContent } from "../vfile"
import { FullPageLayout } from "../../cfg"
import path from "path"
import {
  FullSlug,
  SimpleSlug,
  stripSlashes,
  joinSegments,
  pathToRoot,
  simplifySlug,
} from "../../util/path"
import { defaultListPageLayout, sharedPageComponents } from "../../../quartz.layout"
import { FolderContent } from "../../components"
import { write } from "./helpers"
import { i18n, TRANSLATIONS } from "../../i18n"
import { BuildCtx } from "../../util/ctx"
import { StaticResources } from "../../util/resources"
interface FolderPageOptions extends FullPageLayout {
  sort?: (f1: QuartzPluginData, f2: QuartzPluginData) => number
}

async function* processFolderInfo(
  ctx: BuildCtx,
  folderInfo: Record<SimpleSlug, ProcessedContent>,
  allFiles: QuartzPluginData[],
  opts: FullPageLayout,
  resources: StaticResources,
) {
  for (const [folder, folderContent] of Object.entries(folderInfo) as [
    SimpleSlug,
    ProcessedContent,
  ][]) {
    const slug = joinSegments(folder, "index") as FullSlug
    const [tree, file] = folderContent
    const cfg = ctx.cfg.configuration
    const externalResources = pageResources(pathToRoot(slug), resources)
    const componentData: QuartzComponentProps = {
      ctx,
      fileData: file.data,
      externalResources,
      cfg,
      children: [],
      tree,
      allFiles,
    }

    const content = renderPage(cfg, slug, componentData, opts, externalResources)
    yield write({
      ctx,
      content,
      slug,
      ext: ".html",
    })
  }
}

function computeFolderInfo(
  folders: Set<SimpleSlug>,
  content: ProcessedContent[],
  locale: keyof typeof TRANSLATIONS,
): Record<SimpleSlug, ProcessedContent> {
  // Create default folder descriptions
  const folderInfo: Record<SimpleSlug, ProcessedContent> = Object.fromEntries(
    [...folders].map((folder) => [
      folder,
      defaultProcessedContent({
        slug: joinSegments(folder, "index") as FullSlug,
        frontmatter: {
          title: `${i18n(locale).pages.folderContent.folder}: ${folder}`,
          tags: [],
        },
      }),
    ]),
  )

  // Update with actual content if available
  for (const [tree, file] of content) {
    const slug = stripSlashes(simplifySlug(file.data.slug!)) as SimpleSlug
    if (folders.has(slug)) {
      folderInfo[slug] = [tree, file]
    }
  }

  return folderInfo
}

function _getFolders(slug: FullSlug): SimpleSlug[] {
  var folderName = path.dirname(slug ?? "") as SimpleSlug
  const parentFolderNames = [folderName]

  while (folderName !== ".") {
    folderName = path.dirname(folderName ?? "") as SimpleSlug
    parentFolderNames.push(folderName)
  }
  return parentFolderNames
}

export const FolderPage: QuartzEmitterPlugin<Partial<FolderPageOptions>> = (userOpts) => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultListPageLayout,
    pageBody: FolderContent({ sort: userOpts?.sort }),
    ...userOpts,
  }

  const { head: Head, header, beforeBody, pageBody, afterBody, left, right, footer: Footer } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()

  return {
    name: "FolderPage",
    getQuartzComponents() {
      return [
        Head,
        Header,
        Body,
        ...header,
        ...beforeBody,
        pageBody,
        ...afterBody,
        ...left,
        ...right,
        Footer,
      ]
    },
    async *emit(ctx, content, resources) {
      const allFiles = content.map((c) => c[1].data)
      const cfg = ctx.cfg.configuration

      const folders: Set<SimpleSlug> = new Set(
        allFiles.flatMap((data) => {
          return data.slug
            ? _getFolders(data.slug).filter(
                (folderName) => folderName !== "." && folderName !== "tags",
              )
            : []
        }),
      )

      const folderInfo = computeFolderInfo(folders, content, cfg.locale)
      yield* processFolderInfo(ctx, folderInfo, allFiles, opts, resources)
    },
    async *partialEmit(ctx, content, resources, changeEvents) {
      const allFiles = content.map((c) => c[1].data)
      const cfg = ctx.cfg.configuration

      // Find all folders that need to be updated based on changed files
      const affectedFolders: Set<SimpleSlug> = new Set()
      for (const changeEvent of changeEvents) {
        if (!changeEvent.file) continue
        const slug = changeEvent.file.data.slug!
        const folders = _getFolders(slug).filter(
          (folderName) => folderName !== "." && folderName !== "tags",
        )
        folders.forEach((folder) => affectedFolders.add(folder))
      }

      // If there are affected folders, rebuild their pages
      if (affectedFolders.size > 0) {
        const folderInfo = computeFolderInfo(affectedFolders, content, cfg.locale)
        yield* processFolderInfo(ctx, folderInfo, allFiles, opts, resources)
      }
    },
  }
}
