export const markActivePage = () => {
  const linkList = document.querySelectorAll<HTMLAnchorElement>('.nav__link')
  const linkToHome = document.querySelector('.nav__link[href="/"]') as HTMLAnchorElement
  const path = location.pathname

  const activeClass = 'nav__link--active'

  linkList.forEach((link: HTMLAnchorElement) => {
    link.classList.remove(activeClass)
    if (path === link.pathname) {
      link.classList.add(activeClass)
    } else if (path === '/' || path === '') {
      linkToHome.classList.add(activeClass)
    }
  })
}
