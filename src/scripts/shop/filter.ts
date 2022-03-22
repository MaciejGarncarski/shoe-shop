import { offers } from '../../data/offers'
import { addToCart } from './addToCart'
import { createOfferList } from './createOfferList'

const handleErrorMessage = (element: Element) => {
  if (element && element.innerHTML === '') {
    element.innerHTML = 'No items found.'
  }
}

const offersContainer = document.querySelector('.offers') as HTMLDivElement
const filter = () => {
  const minPrice = document.querySelector('#min-price') as HTMLInputElement
  const maxPrice = document.querySelector('#max-price') as HTMLInputElement
  const starsCount = document.querySelector('#star-count') as HTMLInputElement

  const filteredOffers = offers.filter(({ price, discount, stars }) => {
    let discountedPrice = price

    if (discount !== 1) {
      const discountValue = discount * price
      discountedPrice = discountValue
    }

    const filterByMin = !+minPrice.value || +minPrice.value <= discountedPrice
    const filterByMax = !+maxPrice.value || +maxPrice.value >= discountedPrice
    const filterByStars = !starsCount.value || +starsCount.value === stars

    return filterByMin && filterByMax && filterByStars
  })
  createOfferList(filteredOffers)
  handleErrorMessage(offersContainer)
  addToCart()
}

export const handleFilter = () => {
  const form = document.querySelector('form') as HTMLFormElement
  form.addEventListener('input', filter)
}
