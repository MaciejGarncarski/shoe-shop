import { calculateTotalPrice } from './calculateTotalPrice'
import { countCartItems } from './countCartItems'
import type { cartItem } from '../../types/types'

export const updateInputValue = (input: HTMLInputElement, currentItemData: cartItem) => {
  input.value = currentItemData.count.toString() || ''
  calculateTotalPrice()
  countCartItems()
}
