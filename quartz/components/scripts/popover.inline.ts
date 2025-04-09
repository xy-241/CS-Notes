import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"
import { randomIdNonSecure } from "../../util/random"

const p = new DOMParser()

async function mouseEnterHandler(
  this: HTMLAnchorElement,
  { clientX, clientY }: { clientX: number; clientY: number },
) {
  clearActivePopover()

  const link = this
  const id = randomIdNonSecure()
  if (link.dataset.noPopover === "true") {
    return
  }

  async function setPosition(popoverElement: HTMLElement) {
    const { x, y } = await computePosition(link, popoverElement, {
      strategy: "fixed",
      middleware: [inline({ x: clientX, y: clientY }), shift(), flip()],
    })
    Object.assign(popoverElement.style, {
      transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
    })
  }

  const prevPopoverElement = document.getElementById(`popover-${id}`)
  const hasAlreadyBeenFetched = () => !!document.getElementById(`popover-${id}`)

  // dont refetch if there's already a popover
  if (hasAlreadyBeenFetched()) {
    setPosition(prevPopoverElement as HTMLElement)
    prevPopoverElement?.classList.add("active-popover")
    return
  }

  const thisUrl = new URL(document.location.href)
  thisUrl.hash = ""
  thisUrl.search = ""
  const targetUrl = new URL(link.href)
  const hash = decodeURIComponent(targetUrl.hash)
  targetUrl.hash = ""
  targetUrl.search = ""

  const response = await fetchCanonical(targetUrl).catch((err) => {
    console.error(err)
  })

  // bailout if another popover exists
  if (hasAlreadyBeenFetched()) {
    return
  }

  if (!response) return
  const [contentType] = response.headers.get("Content-Type")!.split(";")
  const [contentTypeCategory, typeInfo] = contentType.split("/")

  const popoverElement = document.createElement("div")
  popoverElement.classList.add("popover")
  const popoverInner = document.createElement("div")
  popoverInner.classList.add("popover-inner")
  popoverElement.appendChild(popoverInner)

  popoverInner.dataset.contentType = contentType ?? undefined

  switch (contentTypeCategory) {
    case "image":
      const img = document.createElement("img")
      img.src = targetUrl.toString()
      img.alt = targetUrl.pathname

      popoverInner.appendChild(img)
      break
    case "application":
      switch (typeInfo) {
        case "pdf":
          const pdf = document.createElement("iframe")
          pdf.src = targetUrl.toString()
          popoverInner.appendChild(pdf)
          break
        default:
          break
      }
      break
    default:
      const contents = await response.text()
      const html = p.parseFromString(contents, "text/html")
      normalizeRelativeURLs(html, targetUrl)
      // prepend all IDs inside popovers to prevent duplicates
      html.querySelectorAll("[id]").forEach((el) => {
        const targetID = `popover-internal-${el.id}`
        el.id = targetID
      })
      const elts = [...html.getElementsByClassName("popover-hint")]
      if (elts.length === 0) return

      elts.forEach((elt) => popoverInner.appendChild(elt))
  }

  setPosition(popoverElement)
  popoverElement.id = `popover-${id}`
  popoverElement.classList.add("active-popover")
  document.body.appendChild(popoverElement)

  if (hash !== "") {
    const targetAnchor = `#popover-internal-${hash.slice(1)}`
    const heading = popoverInner.querySelector(targetAnchor) as HTMLElement | null
    if (heading) {
      // leave ~12px of buffer when scrolling to a heading
      popoverInner.scroll({ top: heading.offsetTop - 12, behavior: "instant" })
    }
  }
}

function clearActivePopover() {
  const allPopoverElements = document.querySelectorAll(".popover")
  if (allPopoverElements) {
    allPopoverElements.forEach((popoverElement) =>
      popoverElement.classList.remove("active-popover"),
    )
  }
}

document.addEventListener("nav", () => {
  const links = [...document.getElementsByClassName("internal")] as HTMLAnchorElement[]
  for (const link of links) {
    link.addEventListener("mouseleave", clearActivePopover)
    link.addEventListener("mouseenter", mouseEnterHandler)
    window.addCleanup(() => {
      link.removeEventListener("mouseenter", mouseEnterHandler)
      link.removeEventListener("mouseleave", clearActivePopover)
    })
  }
})
