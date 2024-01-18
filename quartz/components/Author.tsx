import  style from "./styles/author.scss"
import { FullSlug, _stripSlashes, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { URL } from "url"
import { hostname } from "os"
import { range } from "d3"
import { JSXInternal } from "preact/src/jsx"

const profilePhotos: Record<string, string> = {
  "Xinyang YU": "https://github.com/xy-241.png",
  "Yufan Zhu": "https://github.com/Yufannnn.png",
  "default": "https://imgflip.com/s/meme/Doge.jpg",
}
function createAuthorElement(author: string, link: string) {
  author = author.trim()
  link = link.trim()

  var knownAuthor = (author in profilePhotos);
  const image_element = <img src={knownAuthor ? profilePhotos[author] : profilePhotos["default"]} alt="" />;


  return(
    <div class="authorWLink">
      <a href={link} >
        {image_element}
        <span>{author}</span>
      </a>
    </div>
    )
}
    
function cleanTooManyAuthors(authorsElements:JSXInternal.Element[], maxShown: number= 3) {
  if (authorsElements.length <= maxShown) {
    return authorsElements
  }

  var shownElements = authorsElements.slice(0, maxShown)
  var hiddenAuthors = (
    <div class="hiddenAuthors"> <div class="hiddenAuthorsContainer">{authorsElements.slice(maxShown, authorsElements.length)}</div></div>
  )
  return [...shownElements, hiddenAuthors]
}

export default (() => {
  function Author({fileData}: QuartzComponentProps) {
    const authors = fileData.frontmatter?.["Author"] ?? [""];

    const authorLinks = fileData.frontmatter?.["Author Profile"] ?? [""];
    var authorsElements = [] 

    if (authors) {
      // var message = "🖋"
      for (var i of range(authors.length)) {
        var link = ""
        if (i < authorLinks?.length) {
          link = authorLinks[i]
        }
        authorsElements.push(createAuthorElement(authors[i], link))
      }

      return (
        <div class="author">
        {/* <p>{message} </p> */}
        {cleanTooManyAuthors(authorsElements)}
        </div>
        )
      }
      else {
        return (<p></p>)
      }
    }
    
    Author.css = style
    return Author
  }  
) satisfies QuartzComponentConstructor