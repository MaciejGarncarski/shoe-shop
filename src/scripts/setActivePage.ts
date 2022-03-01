export const setActivePage = () => {
  const linkList = document.querySelectorAll<HTMLAnchorElement>('.nav__link')
  const homeLink = linkList[0]
  linkList.forEach((link) => {
    const linkParent = link.parentNode as HTMLLIElement
    const hash = location.pathname.substring(1)
    link.classList.remove('nav__link--active')
    if (hash === linkParent.dataset.to) {
      link.classList.add('nav__link--active')
    } else if (hash === '') {
      homeLink.classList.add('nav__link--active')
    }
  })
}
