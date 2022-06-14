import type { offerType } from '../../types/types'

type itemType = offerType & {
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
    const totalNetto = () => {
      const withoutVat = (newPrice / 1.23).toFixed(2)
      const cents = withoutVat.substring(withoutVat.length - 2, withoutVat.length)
      if (cents === '00') {
        return withoutVat.substring(0, withoutVat.length - 3)
      }
      return withoutVat
    }

    total.textContent = `${totalNetto()}€`
    totalVat.textContent = `${newPrice.toString()}€`
    container.classList.remove('cart__total-container--hidden')
  } else if (total) {
    total.textContent = ''
    totalVat.textContent = ''
    container.classList.add('cart__total-container--hidden')
  }
}
