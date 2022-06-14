export const markActivePage = () => {
  const linkList = document.querySelectorAll<HTMLLIElement>('.nav__item')
  const linkToHome = document.querySelector('.nav__link[href="#home"]') as HTMLAnchorElement
  const hash = location.hash.substring(1)

  const activeClass = 'nav__link--active'

  linkList.forEach((link) => {
    const linkAnchor = link.querySelector('.nav__link') as HTMLAnchorElement
    linkAnchor.classList.remove(activeClass)
    if (hash === link.dataset.to) {
      linkAnchor.classList.add(activeClass)
    } else if (hash === '') {
      linkToHome.classList.add(activeClass)
    }
  })
}
