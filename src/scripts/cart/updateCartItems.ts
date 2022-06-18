import { saveNewCart } from './saveNewCart'
import { updateInputValue } from './updateInputValue'
import type { item, cartItem } from '../../types/types'
import { getCartItems } from './getCartItems'

export const updateCartItems = (itemName: HTMLSpanElement, input: HTMLInputElement, newCount: number) => {
  const findItemByName = ({ name }: { name: string }) => itemName.textContent === name

  const cartItems = getCartItems()
  const currentCartItem = cartItems.find(findItemByName)

  const mapCartItems = (item: item) => (item.name === currentCartItem?.name ? newItem : item)

  const newItem = Object.assign({}, currentCartItem, { count: newCount })
  const newCart = cartItems.map(mapCartItems)
  const newItemData = newCart.find(findItemByName) as cartItem

  saveNewCart(newCart)
  updateInputValue(input, newItemData)
}
