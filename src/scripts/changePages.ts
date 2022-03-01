import { updateHistory } from './updateHistory'
import { setActivePage } from './setActivePage'
import { dynamicHash } from './dynamicHash'
import { fetchPage } from './fetchPage'
import { subpageFunctions } from './subpageFunctions'

const handleLinkClick = () => {
  const navLinks = document.querySelectorAll<HTMLLIElement>('.nav__item')
  navLinks.forEach((link) => {
    link.addEventListener('click', async (e: MouseEvent) => {
      e.preventDefault()
      const destination = link.dataset.to
      const hash = location.pathname.substring(1)
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
