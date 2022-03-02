import { fetchPage } from './fetchPage'
import { setActivePage } from './setActivePage'
import { updateHistory } from './updateHistory'
import { subpageFunctions } from './subpageFunctions'
const dynamicHash = async () => {
  const hashArr = ['home', 'shop', 'cart']
  const hash = location.pathname.substring(1)
  if (!hashArr.includes(location.pathname.substring(1))) {
    await fetchPage('pages/404.html')
    updateHistory('404')
  } else {
    await fetchPage(`pages/${hash}.html`)
  }
  subpageFunctions()
  setActivePage()
}

export { dynamicHash }
