import { offers } from '../../data/offers'
import { createOfferList } from './createOfferList'
import { addToCart } from './addToCart'
import { initFilters } from './initFilter'
import { showFilters } from './showFilters'

export const resetForm = () => {
  const resetButton = document.querySelector('.filters__reset')

  const stars = document.querySelectorAll<HTMLImageElement>('.filters__star-icon img')

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      stars.forEach((star) => star.classList.remove('filters__star-icon--active', 'clicked'))
      createOfferList(offers)
      addToCart()
      initFilters()
      showFilters()
    })
  }
}
