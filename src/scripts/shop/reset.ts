import { offers } from '../../data/offers'
import { createOfferList } from './createOfferList'
import { addToCart } from './addToCart'
import { handleFilter } from './filter'
import { showFilters } from './showFilters'

export const resetForm = () => {
  const resetButton = document.querySelector('.filters__reset')
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      createOfferList(offers)
      addToCart()
      handleFilter()
      resetForm()
      showFilters()
    })
  }
}
