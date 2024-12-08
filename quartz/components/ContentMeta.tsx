import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      var modifiedSegment: string = ""
      var createdSegment: string = ""
      const fileRelativePath = fileData.filePath
      //const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        const cfgDefaultDataType = cfg.defaultDateType // For backward compatibility, just in case this is used somewhere else by the original author

        if (fileData.dates.created) {
          cfg.defaultDateType = "created" // sets which date type to be set
          createdSegment = <Date date={getDate(cfg, fileData)!} locale={cfg.locale} /> 
        }

        if (fileData.dates.modified) {
          cfg.defaultDateType = "modified" // sets which date type to be set
          modifiedSegment = <Date date={getDate(cfg, fileData)!} locale={cfg.locale} /> 
        }

        cfg.defaultDateType = cfgDefaultDataType
      }


      // Display reading time if enabled
      var readingTimeStr: string = ""
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        // segments.push(displayedTime)
        readingTimeStr = `${_words} words, ${displayedTime}`
      }

      //Created: &nbsp;{createdSegment} <br /> 
      return (
        <p class={classNames(displayClass, "content-meta")}>
          {readingTimeStr} <br />
          Last updated on {modifiedSegment} <br />  
          🌟 <a href={`https://github.com/xy-241/CS-Notes/blame/v4/${fileRelativePath}`} class={classNames(displayClass, "external")} target={"_blank"} style={"font-weight:400"}>
            Edit This Page!<svg class="external-icon" viewBox="0 0 512 512"><path d="M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z"></path></svg>
          </a> &nbsp;
          🗓️ <a href={`https://github.com/xy-241/CS-Notes/commits/v4/${fileRelativePath}`} class={classNames(displayClass, "external")} target={"_blank"} style={"font-weight:400"}>
            History<svg class="external-icon" viewBox="0 0 512 512"><path d="M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z"></path></svg>
          </a>
        </p>
      )

      /*const segmentsElements = segments.map((segment) => <span>{segment}</span>)
      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segmentsElements}
        </p>
      )*/
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
