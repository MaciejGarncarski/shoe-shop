import { getCartItems } from './getCartItems'

export const itemCount = () => {
  const linksToCart = document.querySelectorAll<HTMLAnchorElement>('[href="#cart"]')

  const cartData = getCartItems()
  const prices = cartData.map(({ count }: { count: number }) => count)
  linksToCart.forEach((link) => {
    const countNotification = link.querySelector('.item-count') as HTMLSpanElement

    const updateCount = (totalCount: string) => {
      if (!countNotification && cartData.length !== 0) {
        link.innerHTML += `<span class="item-count">${totalCount}</span>`
      } else if (countNotification) {
        countNotification.textContent = totalCount
      }
    }
    if (prices.length !== 0) {
      const totalCount = prices.reduce((prev: number, next: number) => prev + next)
      totalCount <= 9 ? updateCount(totalCount) : updateCount('9+')
    } else if (countNotification) {
      countNotification.remove()
    }
  })
}
