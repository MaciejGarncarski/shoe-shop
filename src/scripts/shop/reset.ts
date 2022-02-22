import { offers } from '../../data/offers'
import { createOfferList } from './createOfferList'

export const resetForm = () => {
  const resetButton = document.querySelector('.filters__reset')
  if (resetButton) {
    resetButton.addEventListener('click', () => createOfferList(offers))
  }
}
