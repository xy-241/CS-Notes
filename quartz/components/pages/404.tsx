import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1>Oops</h1>
      <p>I am still working on this note. Tell me <a src={"https://github.com/xy-241/CS-Notes/issues"}>here</a> if you want to read it urgently!</p>

      <p>Meanwhile, here is a cute cat to express my apologies :)</p>
      <img src={"https://cataas.com/cat/cute/says/Github Star Pls?fontColor=white&fontSize=50"} alt={"cuteCat"} />
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
