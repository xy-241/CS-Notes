import { i18n } from "../i18n"
import { FullSlug, joinSegments, pathToRoot } from "../util/path"
import { JSResourceToScriptElement } from "../util/resources"
import { googleFontHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Head: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description
    const { css, js } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)

    const iconPath = joinSegments(baseDir, "static/icon.png")
    const ogImagePath = `https://${cfg.baseUrl}/static/og-image.png`

    return (
      <head>
        <script
          src="https://notesss.yxy.ninja/script.js"
          type="text/javascript">
        </script>
        <script
        dangerouslySetInnerHTML={{
          __html: `
            window.DD_RUM && window.DD_RUM.init({
              clientToken: 'pubf8e87c77bc40109caafef497cae669d9',
              applicationId: '1790642d-89c4-45b7-8ba8-b2d58a5212b2',
              proxy: 'https://notesss.yxy.ninja',
              site: 'datadoghq.com',
              service: 'notes.yxy.ninja',
              env: 'prod',
              // Specify a version number to identify the deployed version of your application in Datadog 
              // version: '1.0.0', 
              sessionSampleRate: 100,
              sessionReplaySampleRate: 100,
              trackUserInteractions: true,
              trackResources: true,
              trackLongTasks: true,
              defaultPrivacyLevel: 'allow',
              usePartitionedCrossSiteSessionCookie: true,
            });
          `,
        }}
        />

        {/* <script async src="https://rum.cronitor.io/script.js"></script>
        <script
        dangerouslySetInnerHTML={{
            __html: `
              window.cronitor = window.cronitor || function() { (window.cronitor.q = window.cronitor.q || []).push(arguments); };
              cronitor('config', { clientKey: 'fe62c9349bb06b60dd67e689bebb2838' });`
          }}
        >
        </script> */}

        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="CS Notes by Xinyang YU" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {cfg.baseUrl && <meta property="og:image" content={ogImagePath} />}
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="675" />
        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        {css.map((href) => (
          <link key={href} href={href} rel="stylesheet" type="text/css" spa-preserve />
        ))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
