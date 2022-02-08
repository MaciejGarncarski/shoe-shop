import { offers } from '../../data/offers'
import { createOfferList } from './createOfferList'

const handleErrorMessage = () => {
    const offersContainer = document.querySelector('.offers') as HTMLDivElement
    if (offersContainer.innerHTML === '') {
        offersContainer.innerHTML = "<p class='offers-error'>No items found.</p>"
    }
}

const filter = () => {
    const minPrice = document.querySelector('#min-price') as HTMLInputElement
    const maxPrice = document.querySelector('#max-price') as HTMLInputElement
    const starsCount = document.querySelector('#star-count') as HTMLInputElement

    const filteredOffers = offers.filter(({ price, discount, stars }) => {
        let discountedPrice = price

        if (discount !== 1) {
            const discountValue = discount * price
            discountedPrice = price - discountValue
        }

        const filterByMin = !+minPrice.value || +minPrice.value <= discountedPrice
        const filterByMax = !+maxPrice.value || +maxPrice.value >= discountedPrice
        const filterByStars = !starsCount.value || +starsCount.value === stars

        return filterByMin && filterByMax && filterByStars
    })
    createOfferList(filteredOffers)
    handleErrorMessage()
}

export const handleFilter = () => {
    const form = document.querySelector('form')
    form?.addEventListener('input', filter)
}
