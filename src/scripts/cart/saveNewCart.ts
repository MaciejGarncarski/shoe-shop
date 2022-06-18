import type { item, cartItem } from '../../types/types'

type cartType = cartItem | cartItem[] | item | item[]

export const saveNewCart = (newCart: cartType) => localStorage.setItem('cart', JSON.stringify(newCart))
