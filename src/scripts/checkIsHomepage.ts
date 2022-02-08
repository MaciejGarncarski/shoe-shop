import { dynamicHash } from './dynamicHash'
import { fetchPage } from './fetchPage'
import { setWindowHash } from './setWindowHash'

const checkIsHomepage = async () => {
  if (location.hash === '') {
    await fetchPage('pages/home.html')
    setWindowHash('home')
  } else {
    dynamicHash()
  }
}

export { checkIsHomepage }
