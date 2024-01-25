import { QuartzTransformerPlugin } from "../types"
import rehypePrettyCode, { Options as CodeOptions } from "rehype-pretty-code"

import darkPlus from 'tm-themes/themes/dark-plus.json'

export const SyntaxHighlighting: QuartzTransformerPlugin = () => ({
  name: "SyntaxHighlighting",
  htmlPlugins() {
    return [
      [
        rehypePrettyCode,
        {
          keepBackground: true,
          theme: {
            dark: "poimandres",
            light: "light-plus",
          },
        } satisfies Partial<CodeOptions>,
      ],
    ]
  },
})
