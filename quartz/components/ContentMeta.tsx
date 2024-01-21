import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      var modifiedSegment: string = ""
      var createdSegment: string = ""
      // const segments: string[] = []

      if (fileData.dates) {
        const cfgDefaultDataType = cfg.defaultDateType // For backward compatibility, just in case this is used somewhere else by the original author

        if (fileData.dates.created) {
          cfg.defaultDateType = "created"
          createdSegment = formatDate(getDate(cfg, fileData)!)
        }

        if (fileData.dates.modified) {
          cfg.defaultDateType = "modified"
          modifiedSegment = formatDate(getDate(cfg, fileData)!)
        }

        cfg.defaultDateType = cfgDefaultDataType
      }

      // Display reading time if enabled
      var readingTimeStr: string = ""
      if (options.showReadingTime) {
        const { text: timeTaken, words: _words } = readingTime(text)
        readingTimeStr = `${_words} words, ${timeTaken}`
      }

      return (
        <p class={`content-meta ${displayClass ?? ""}`}>
          Created: &nbsp;{createdSegment} <br /> Modified: {modifiedSegment} <br /> {readingTimeStr}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor
