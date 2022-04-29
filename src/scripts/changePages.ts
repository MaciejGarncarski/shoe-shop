import { fetchPage } from './fetchPage'
import { setActivePage } from './setActivePage'
import { subpageFunctions } from './subpageFunctions'

export const dynamicHash = async () => {
  const routes = ['home', 'shop', 'cart']
  const hash = location.hash.substring(1)
  if (routes.includes(hash)) {
    await fetchPage(`pages/${hash}.html`)
  } else if (hash === '') {
    window.location.hash = 'home'
    await fetchPage('pages/home.html')
  } else {
    await fetchPage('pages/404.html')
  }
  subpageFunctions()
  setActivePage()
}

export const changePages = () => window.addEventListener('hashchange', dynamicHash)
