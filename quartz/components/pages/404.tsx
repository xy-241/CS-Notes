import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <article class="popover-hint">
      <h1>Oops</h1>
      <p>I am still working on this note. Tell me <a href={"https://github.com/xy-241/CS-Notes/issues"}>here</a> if you want to read it urgently!</p>

      <p>Meanwhile, here is a cute cat to express my apologies 🥺👉🏻👈🏻</p>
      <img src={"https://cataas.com/cat/cute/says/Github Star Pls?fontColor=white&fontSize=50"} alt={"cuteCat"} />

    {/* <p>{i18n(cfg.locale).pages.error.notFound}</p> */}
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
