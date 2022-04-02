import { offerTypes } from '../types/types'

export const handleErrorMessage = (data: offerTypes[], container: HTMLElement) => {
  if (data.length === 0) {
    container.innerHTML = `<span class="not-found-message">No items found</span>`
  }
}
