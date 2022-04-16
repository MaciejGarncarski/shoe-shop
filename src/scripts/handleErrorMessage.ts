import { offerTypes } from '../types/types'

type cartTypes = {
  name: string
  price: number
  discount: number
  count: number
  img: string
}

export const handleErrorMessage = (data: offerTypes[] | cartTypes[], container: HTMLElement, text: string) => {
  if (data.length === 0 && container) {
    container.innerHTML = `<span class="not-found-message">${text}.</span>`
  }
}
