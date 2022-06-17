import { fetchPage } from './fetchPage'
import { shopFunctions, cartFunctions } from './subpageFunctions'

type routesType = {
  [key: string]: {
    path: string
    title: string
    function?: () => void
  }
}

const routes: routesType = {
  '/': {
    path: 'pages/home.html',
    title: 'Shoe Shop | Homepage',
  },
  '/shop': {
    path: 'pages/shop.html',
    title: 'Shoe Shop | Browse Shop',
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
  await fetchPage(route.path)

  if (route.function) {
    route.function()
  }
  document.title = route.title
}

export const urlRoutes = (event: MouseEvent) => {
  event.preventDefault()
  const target = event.target as HTMLAnchorElement
  if (target.pathname !== window.location.pathname) {
    window.history.pushState({}, '', target.href)
    handleLocation()
  }
}

export const changeOnClick = () => {
  const links = document.querySelectorAll<HTMLAnchorElement>('.nav__link')
  links.forEach((link) => link.addEventListener('click', urlRoutes))
}

export const changePages = () => {
  changeOnClick()
  window.addEventListener('popstate', handleLocation)
}
