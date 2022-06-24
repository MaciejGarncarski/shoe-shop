import { saveNewCart } from './saveNewCart'
import { updateInputValue } from './updateInputValue'
import type { cartItem } from '../../types/types'
import { getCartItems } from './getCartItems'

export const updateCartItems = (itemName: HTMLSpanElement, input: HTMLInputElement, newCount: number) => {
  const findItemByName = ({ name }: { name: string }) => itemName.textContent === name

  const cartItems = getCartItems()
  const currentCartItem = cartItems.find(findItemByName)

  if (currentCartItem !== undefined) {
    const mapCartItems = (item: cartItem) => (item.name === currentCartItem.name ? newItem : item)

    const newItem = { ...currentCartItem, count: newCount }
    const newCart = cartItems.map(mapCartItems)
    const newItemData = newCart.find(findItemByName)

    saveNewCart(newCart)
    if (newItemData !== undefined) {
      updateInputValue(input, newItemData)
    }
  }
}
