import { fetchPage } from './fetchPage'
import { markActivePage } from './markActivePage'
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
    checkout: async () => {
      await fetchPage('pages/checkout.html')
      cartFunctions()
    },
  }

  if (routes[hash]) {
    routes[hash]()
  } else if (hash === '') {
    window.location.hash = 'home'
  } else {
    await fetchPage('pages/404.html')
  }

  markActivePage()
}

export const changePages = () => window.addEventListener('hashchange', dynamicHash)
