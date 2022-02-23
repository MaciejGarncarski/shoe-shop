import { offerTypes } from '../../types/types'

type itemType = offerTypes & {
  count: number
}

export const totalPrice = () => {
  const total = document.querySelector('.cart__total-price') as HTMLSpanElement
  const container = document.querySelector('.cart__total') as HTMLDivElement
  const cart = JSON.parse(localStorage.getItem('cart') || '')
  const arr: number[] = [...cart.map(({ price, count }: itemType) => price * count)]
  if (arr.length !== 0) {
    const newPrice = arr.reduce((prev, next) => prev + next)
    if (total) {
      total.textContent = newPrice.toString()
      container.classList.add('cart__total--active')
    }
  } else if (total) {
    total.textContent = '0'
    container.classList.remove('cart__total--active')
  }
}
