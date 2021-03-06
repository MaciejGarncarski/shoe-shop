import { injectPage } from './fetchPage'
import { homeFunctions, shopFunctions, cartFunctions } from './subpageFunctions'

type routesInfo = {
  [key: string]: {
    path: string
    title: string
    function?: () => void
  }
}

const routes: routesInfo = {
  '/': {
    path: 'pages/home.html',
    title: 'Shoe Shop | Homepage',
    function: homeFunctions,
  },
  '/products': {
    path: 'pages/products.html',
    title: 'Shoe Shop | Products',
    function: shopFunctions,
  },
  '/cart': {
    path: 'pages/cart.html',
    title: 'Shoe Shop | Your Cart',
    function: cartFunctions,
  },
  '404': {
    path: 'pages/404.html',
    title: 'Shoe Shop | Not Found',
  },
}

export const handleLocation = async () => {
  const path = window.location.pathname
  if (path.length === 0) {
    window.location.pathname = '/'
  }

  const route = routes[path] || routes['404']

  const isFetchOk = await injectPage(route.path)
  if (route.function && isFetchOk) {
    route.function()
  }

  document.title = route.title
}

export const urlRoutes = (event: MouseEvent) => {
  event.preventDefault()
  const target = event.target as HTMLAnchorElement
  if (target.pathname !== window.location.pathname) {
    window.history.pushState({}, '', target.href)
    changeOnClick()
    handleLocation()
  }
}

export const changeOnClick = () => {
  const links = document.querySelectorAll<HTMLAnchorElement>('a')
  const linksWithoutFooter = Array.from(links).filter((link) => link.className !== 'footer__link')
  linksWithoutFooter.forEach((link) => {
    link.removeEventListener('click', urlRoutes)
    link.addEventListener('click', urlRoutes)
  })
}

export const changePages = () => {
  changeOnClick()
  window.addEventListener('popstate', handleLocation)
}
