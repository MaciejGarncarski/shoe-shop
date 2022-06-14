import type { itemType, offerType } from '../../types/types'

export const saveNewCart = (newCart: offerType[] | itemType[]) => localStorage.setItem('cart', JSON.stringify(newCart))
