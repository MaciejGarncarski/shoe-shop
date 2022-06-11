import { offerTypes } from '../../types/types'

type itemType = offerTypes & {
  count: number
}

export const totalPrice = () => {
  const container = document.querySelector('.cart__total-container') as HTMLDivElement
  const total = document.querySelector('.cart__total--normal') as HTMLSpanElement
  const totalVat = document.querySelector('.cart__total--vat') as HTMLSpanElement
  const savedCart = JSON.parse(localStorage.getItem('cart') || '')
  const cartItems: number[] = [...savedCart.map(({ price, count }: itemType) => price * count)]

  if (cartItems.length !== 0 && total) {
    const newPrice = cartItems.reduce((acc, curr) => acc + curr)
    const priceWithVat = () => {
      const withVat = (newPrice * 1.23).toFixed(2)
      const cents = withVat.substring(withVat.length - 2, withVat.length)
      if (cents === '00') {
        return withVat.substring(0, withVat.length - 3)
      }
      return withVat
    }

    total.textContent = `${newPrice.toString()}€`
    totalVat.textContent = `${priceWithVat()}€`
    container.classList.remove('cart__total-container--hidden')
  } else {
    total.textContent = ''
    totalVat.textContent = ''
    container.classList.add('cart__total-container--hidden')
  }
}
