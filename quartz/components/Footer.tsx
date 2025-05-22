import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
<footer class={`${displayClass ?? ""}`}>
  <p style="text-align: center;">
    <a href="https://mangiarco.github.io/digit-garden/licence">
      <img src="https://img.shields.io/badge/License-CC_BY_4.0-blue.svg?style=flat" alt="License Badge" />
    </a>
    &nbsp;&nbsp;
    <img
      src="https://visitor-badge.laobi.icu/badge?page_id=mangiarco.github.io/digit-garden&label=Page%20Views"
      alt="Page Views"
    />
  </p>
</footer>
    )
  }
  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
