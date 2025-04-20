// @ts-ignore
import readerModeScript from "./scripts/readermode.inline"
import styles from "./styles/readermode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ReaderMode: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "readermode")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="readerIcon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="6" y="4" width="12" height="16" rx="1"></rect>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="9" y1="12" x2="15" y2="12"></line>
        <line x1="9" y1="16" x2="13" y2="16"></line>
      </svg>
    </button>
  )
}

ReaderMode.beforeDOMLoaded = readerModeScript
ReaderMode.css = styles

export default (() => ReaderMode) satisfies QuartzComponentConstructor
