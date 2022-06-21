import { markActivePage } from './markActivePage'

export const loader = `
<div class="loading"><div></div><div></div><div></div><div></div></div>
`

export const fetchPage = async (url: string) => {
  const app = document.querySelector('.app') as HTMLDivElement
  app.innerHTML = loader
  const response = await fetch(url)
  const data = await response.text()
  app.innerHTML = data
  markActivePage()
}
