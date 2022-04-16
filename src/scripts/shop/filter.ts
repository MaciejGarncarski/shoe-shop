import { offers } from '../../data/offers'
import { addToCart } from './addToCart'
import { createOfferList } from './createOfferList'
import { handleErrorMessage } from '../handleErrorMessage'
import debounce from 'lodash.debounce'

const container = document.querySelector('.offers') as HTMLUListElement

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
  handleErrorMessage(filteredOffers, container, 'No items found.')
  addToCart()
}

export const handleFilter = () => {
  const form = document.querySelector('form') as HTMLFormElement
  form.addEventListener('input', debounce(filter, 250))
}
