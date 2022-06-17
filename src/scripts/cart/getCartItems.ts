import type { cartItem } from '../../types/types'

export const getCartItems = () => {
  if (localStorage.getItem('cart')) {
    return JSON.parse(localStorage.getItem('cart') || '') as cartItem[]
  }
  return []
}
