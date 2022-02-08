import { fetchPage } from './fetchPage'
import { setActivePage } from './setActivePage'
import { setWindowHash } from './setWindowHash'

const dynamicHash = async () => {
  const hashArr = ['home', 'shop', 'cart']
  const hash = location.hash.substring(1)
  if (!hashArr.includes(location.hash.substring(1))) {
    await fetchPage('pages/404.html')
    setWindowHash('404')
  } else {
    await fetchPage(`pages/${hash}.html`)
  }
  setActivePage()
}

export { dynamicHash }
