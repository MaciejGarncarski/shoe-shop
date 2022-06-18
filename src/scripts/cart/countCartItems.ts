import { getCartItems } from './getCartItems'
import type { itemCount } from '../../types/types'

export const countCartItems = () => {
  const linksToCart = document.querySelectorAll<HTMLAnchorElement>('[href="/cart"]')
  const cartData = getCartItems()
  const cartItemsPrices = cartData.map(({ count }: itemCount) => count)
  const activeClass = 'item-count--active'

  linksToCart.forEach((link) => {
    const countNotification = link.querySelector('.item-count') as HTMLSpanElement

    const updateCount = (totalCount: string) => {
      if (cartData.length !== 0) {
        countNotification.classList.add(activeClass)
        countNotification.textContent = totalCount
      }
    }

    if (cartItemsPrices.length !== 0) {
      const totalCount = cartItemsPrices.reduce((prev: number, next: number) => prev + next) || ''
      totalCount <= 9 ? updateCount(totalCount.toString()) : updateCount('9+')
    } else if (countNotification) {
      countNotification.classList.remove(activeClass)
    }
  })
}
