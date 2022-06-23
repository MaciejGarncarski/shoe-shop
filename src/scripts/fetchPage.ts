import { markActivePage } from './markActivePage'

export const loader = `
<div class="loading"><div></div><div></div><div></div><div></div></div>
`
const errorMsg = `<p class="not-found-message fetch-error">Couldn't load this page. Check your internet connection.</p>`

export const injectPage = async (url: string) => {
  const app = document.querySelector('.app') as HTMLDivElement
  app.innerHTML = loader
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.text()
      app.innerHTML = data
      markActivePage()
      return response.status
    }
    throw new Error(`Http error: ${response.status}`)
  } catch (error) {
    console.error(error)
    app.innerHTML = errorMsg
    return null
  }
}
