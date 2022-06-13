export const markActivePage = () => {
  const linkList = document.querySelectorAll<HTMLLIElement>('.nav__item')
  const linkToHome = document.querySelector('.nav__link[href="#home"]') as HTMLAnchorElement
  const hash = location.hash.substring(1)

  linkList.forEach((link) => {
    const linkAnchor = link.querySelector('.nav__link') as HTMLAnchorElement
    linkAnchor.classList.remove('nav__link--active')
    if (hash === link.dataset.to) {
      linkAnchor.classList.add('nav__link--active')
    } else if (hash === '') {
      linkToHome.classList.add('nav__link--active')
    }
  })
}
