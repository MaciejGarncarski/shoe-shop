import type { itemType, cartItem } from '../../types/types'

type cartType = cartItem | cartItem[] | itemType | itemType[]

export const saveNewCart = (newCart: cartType) => localStorage.setItem('cart', JSON.stringify(newCart))
