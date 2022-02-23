import { dynamicHash } from './dynamicHash'
import { fetchPage } from './fetchPage'
import { updateHistory } from './updateHistory'

const checkIsHomepage = async () => {
  if (location.hash === '') {
    await fetchPage('pages/home.html')
    updateHistory('home')
  } else {
    dynamicHash()
  }
}

export { checkIsHomepage }
