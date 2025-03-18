import sourceMapSupport from "source-map-support"
sourceMapSupport.install(options)
import cfg from "../quartz.config"
import { BuildCtx, WorkerSerializableBuildCtx } from "./util/ctx"
import { FilePath } from "./util/path"
import {
  createFileParser,
  createHtmlProcessor,
  createMarkdownParser,
  createMdProcessor,
} from "./processors/parse"
import { options } from "./util/sourcemap"
import { MarkdownContent, ProcessedContent } from "./plugins/vfile"

// only called from worker thread
export async function parseMarkdown(
  partialCtx: WorkerSerializableBuildCtx,
  fps: FilePath[],
): Promise<MarkdownContent[]> {
  const ctx: BuildCtx = {
    ...partialCtx,
    cfg,
  }
  return await createFileParser(ctx, fps)(createMdProcessor(ctx))
}

// only called from worker thread
export function processHtml(
  partialCtx: WorkerSerializableBuildCtx,
  mds: MarkdownContent[],
): Promise<ProcessedContent[]> {
  const ctx: BuildCtx = {
    ...partialCtx,
    cfg,
  }
  return createMarkdownParser(ctx, mds)(createHtmlProcessor(ctx))
}
