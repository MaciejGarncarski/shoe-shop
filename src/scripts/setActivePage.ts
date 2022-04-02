export const setActivePage = () => {
  const linkList = document.querySelectorAll<HTMLAnchorElement>('.nav__link')
  const homeLink = document.querySelector('.nav__link[href="#home"]') as HTMLAnchorElement
  const hash = location.hash.substring(1)

  linkList.forEach((link) => {
    const linkParent = link.parentNode as HTMLLIElement
    link.classList.remove('nav__link--active')

    if (hash === linkParent.dataset.to) {
      link.classList.add('nav__link--active')
    } else if (hash === '') {
      homeLink.classList.add('nav__link--active')
    }
  })
}
