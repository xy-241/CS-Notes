import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const NLWebChat: QuartzComponent = ({}: QuartzComponentProps) => {
    return (
      <>
        <div id="docs-search-container"></div>
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
              import { NLWebDropdownChat } from 'https://neuro-cs-nlweb.me-4b4.workers.dev/nlweb-dropdown-chat.js';

              const chat = new NLWebDropdownChat({
                containerId: 'docs-search-container',
                site: 'https://neuro-cs-nlweb.me-4b4.workers.dev',
                placeholder: 'Search for docs...',
                endpoint: 'https://neuro-cs-nlweb.me-4b4.workers.dev'
              });
            `,
          }}
        />
      </>
    )
  }

  return NLWebChat
}) satisfies QuartzComponentConstructor
