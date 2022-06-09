import { fetchPage } from './fetchPage'
import { setActivePage } from './setActivePage'
import { shopFunctions, cartFunctions } from './subpageFunctions'

type routesType = {
  [key: string]: () => void
}

export const dynamicHash = async () => {
  const hash = location.hash.substring(1)

  const routes: routesType = {
    home: async () => {
      await fetchPage('pages/home.html')
      window.location.hash = 'home'
    },
    shop: async () => {
      await fetchPage('pages/shop.html')
      shopFunctions()
    },
    cart: async () => {
      await fetchPage('pages/cart.html')
      cartFunctions()
    },
  }

  setActivePage()
  routes[hash] ? routes[hash]() : await fetchPage('pages/404.html')
}

export const changePages = () => window.addEventListener('hashchange', dynamicHash)
