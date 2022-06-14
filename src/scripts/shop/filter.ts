import { offers } from '../../data/offers'
import { addToCart } from './addToCart'
import { createOfferList } from './createOfferList'
import debounce from 'lodash.debounce'

const onFilterChange = () => {
  const minPrice = document.querySelector('#min-price') as HTMLInputElement
  const maxPrice = document.querySelector('#max-price') as HTMLInputElement
  const starsCount = document.querySelector('#star-count') as HTMLInputElement

  const filteredOffers = offers.filter(({ price, discount, stars }) => {
    let discountedPrice = price

    if (discount !== 1) {
      const discountValue = discount * price
      discountedPrice = discountValue
    }

    const filterByMin = !minPrice.valueAsNumber || minPrice.valueAsNumber <= discountedPrice
    const filterByMax = !maxPrice.valueAsNumber || maxPrice.valueAsNumber >= discountedPrice
    const filterByStars = starsCount.valueAsNumber || starsCount.valueAsNumber === stars

    return filterByMin && filterByMax && filterByStars
  })
  createOfferList(filteredOffers)
  addToCart()
}

export const runFilters = () => {
  const form = document.querySelector('form') as HTMLFormElement
  form.addEventListener('change', debounce(onFilterChange, 350))
}
