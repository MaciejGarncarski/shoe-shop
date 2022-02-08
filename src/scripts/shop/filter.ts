import { offers } from '../../data/offers'
import { createOfferList } from './createOfferList'

const handleErrorMessage = () => {
  const offersContainer = document.querySelector('.offers') as HTMLDivElement
  if (offersContainer.innerHTML === '') {
    offersContainer.innerHTML = "<p class='offers-error'>No items found.</p>"
  }
}

const filter = (ev: SubmitEvent) => {
  ev.preventDefault()
  const minPrice = document.querySelector('#min-price') as HTMLInputElement
  const maxPrice = document.querySelector('#max-price') as HTMLInputElement
  const starsCount = document.querySelector('#star-count') as HTMLInputElement

  const filteredOffers = offers.filter(({ price, discount, stars }) => {
    let discountedPrice = price
    if (discount !== 1) {
      const discountValue = discount * price
      discountedPrice = price - discountValue
    }
    const isPriceEmpty = (maxPrice.value === '' || minPrice.value === '')
    const isStarCountEmpty = (starsCount.value === '' || starsCount.value === '0')

    const filerByPrice = discountedPrice >= +minPrice.value && discountedPrice <= +maxPrice.value
    const filterByStars = stars === +starsCount.value
    const filterByEverything = stars === +starsCount.value && discountedPrice >= +minPrice.value && discountedPrice <= +maxPrice.value

    if (isPriceEmpty && isStarCountEmpty) {
      return offers
    } else if (!isPriceEmpty && isStarCountEmpty) {
      return filerByPrice
    } else if (isPriceEmpty && !isStarCountEmpty) {
      return filterByStars
    } else {
      return filterByEverything
    }
  })
  createOfferList(filteredOffers)
  handleErrorMessage()
}

export const handleFilter = () => {
  const form = document.querySelector('form')
  form?.addEventListener('submit', filter)
}
