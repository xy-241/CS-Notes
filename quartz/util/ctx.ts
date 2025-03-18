import { QuartzConfig } from "../cfg"
import { FilePath, FullSlug } from "./path"

export interface Argv {
  directory: string
  verbose: boolean
  output: string
  serve: boolean
  watch: boolean
  port: number
  wsPort: number
  remoteDevHost?: string
  concurrency?: number
}

export interface BuildCtx {
  buildId: string
  argv: Argv
  cfg: QuartzConfig
  allSlugs: FullSlug[]
  allFiles: FilePath[]
  incremental: boolean
}

export type WorkerSerializableBuildCtx = Omit<BuildCtx, "cfg">
