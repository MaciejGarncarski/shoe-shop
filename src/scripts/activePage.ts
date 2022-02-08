const activePage = () => {
    const button = document.querySelector('.burger')
    const menu = document.querySelector('.nav__list') as HTMLUListElement
    button?.addEventListener('click', () => {
        button.classList.toggle('burger--active')
        menu.classList.toggle('nav__list--active')
        document.body.classList.toggle('locked')
    })
}

export { activePage }
