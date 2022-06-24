import type { cartItem } from '../../types/types'

type cartType = cartItem[]

export const saveNewCart = (newCart: cartType) => localStorage.setItem('cart', JSON.stringify(newCart))
