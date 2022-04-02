import { updateHistory } from './updateHistory'
import { setActivePage } from './setActivePage'
import { dynamicHash } from './dynamicHash'
import { fetchPage } from './fetchPage'
import { subpageFunctions } from './subpageFunctions'

const handleLinkClick = () => {
  const navLinks = document.querySelectorAll<HTMLLIElement>('.nav__item')
  const hash = location.hash.substring(1)

  navLinks.forEach((link) => {
    link.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault()
      const destination = link.dataset.to
      if (destination !== hash) {
        await fetchPage(`/pages/${destination}.html`)
        updateHistory(destination)
        setActivePage()
        subpageFunctions()
      }
    })
  })
}

const changePages = () => {
  handleLinkClick()
  window.addEventListener('popstate', () => {
    dynamicHash()
  })
}

export { changePages }
