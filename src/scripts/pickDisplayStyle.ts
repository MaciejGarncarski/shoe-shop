export const pickDisplayStyle = () => {
    const listButton = document.querySelector('.list-button') as HTMLButtonElement
    const galleryButton = document.querySelector('.gallery-button') as HTMLButtonElement
    const offersContainer = document.querySelector('.offers')

    if (listButton && galleryButton) {
        listButton.addEventListener('click', () => {
            listButton.classList.add('buttons__button--active')
            galleryButton.classList.remove('buttons__button--active')
            offersContainer?.classList.add('offers--list')
        })

        galleryButton.addEventListener('click', () => {
            galleryButton.classList.add('buttons__button--active')
            listButton.classList.remove('buttons__button--active')
            offersContainer?.classList.remove('offers--list')
        })
    }
}
