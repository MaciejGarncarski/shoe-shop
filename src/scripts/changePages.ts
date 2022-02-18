import { setWindowHash } from './setWindowHash'
import { setActivePage } from './setActivePage'
import { dynamicHash } from './dynamicHash'
import { fetchPage } from './fetchPage'

const handleLinkClick = () => {
  const navLinks = document.querySelectorAll<HTMLLIElement>('.list__item')
  navLinks.forEach((link) => {
    link.addEventListener('click', async (e: MouseEvent) => {
      e.preventDefault()
      const destination = link.dataset.to
      const hash = window.location.hash.substring(1)
      if (destination !== hash) {
        await fetchPage(`/pages/${destination}.html`)
        setWindowHash(destination)
        setActivePage()
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
