import { offers } from '../../data/offers'
import { createOfferList } from './createOfferList'
import { addToCart } from './addToCart'
import { runFilters } from './filter'
import { showFilters } from './showFilters'

export const resetForm = () => {
  const resetButton = document.querySelector('.filters__reset')
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      createOfferList(offers)
      addToCart()
      runFilters()
      showFilters()
    })
  }
}
