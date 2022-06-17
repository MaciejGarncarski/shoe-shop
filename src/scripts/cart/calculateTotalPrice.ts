import type { cartItem } from '../../types/types'
import { getCartItems } from './getCartItems'

export const calculateTotalPrice = () => {
  const container = document.querySelector('.cart__total-container') as HTMLDivElement
  const total = document.querySelector('.cart__total--normal') as HTMLSpanElement
  const totalVat = document.querySelector('.cart__total--vat') as HTMLSpanElement

  const savedCart = getCartItems()

  const cartItems = savedCart.map(({ price, count }: cartItem) => price * count)

  const totalNetto = (newPrice: number) => {
    const withoutVat = (newPrice / 1.23).toFixed(2)
    const cents = withoutVat.substring(withoutVat.length - 2, withoutVat.length)
    if (cents === '00') {
      return withoutVat.substring(0, withoutVat.length - 3)
    }
    return withoutVat
  }

  if (cartItems.length !== 0) {
    const newPrice = cartItems.reduce((acc, curr) => acc + curr)
    total.textContent = `${totalNetto(newPrice)}€`
    totalVat.textContent = `${newPrice.toString()}€`
    container.classList.remove('cart__total-container--hidden')
  } else {
    total.textContent = ''
    totalVat.textContent = ''
    container.classList.add('cart__total-container--hidden')
  }
}
