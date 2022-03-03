export const itemCount = () => {
  const cartIcons = document.querySelectorAll<HTMLAnchorElement>('[href="#cart"]')

  if (localStorage.getItem('cart')) {
    const cartData = JSON.parse(localStorage.getItem('cart') || '')
    const prices = cartData.map(({ count }: { count: number }) => count)
    cartIcons.forEach((icon) => {
      const countNotification = icon.querySelector('.item-count') as HTMLSpanElement

      const updateCount = (totalCount: string) => {
        if (!countNotification && cartData.length !== 0) {
          icon.innerHTML += `<span class="item-count">${totalCount}</span>`
        } else if (countNotification) {
          countNotification.textContent = totalCount
        }
      }

      if (prices.length !== 0) {
        const totalCount = prices.reduce((prev: number, next: number) => prev + next)
        if (totalCount <= 9) {
          updateCount(totalCount.toString())
          console.log(totalCount)
        } else {
          updateCount('+9')
        }
      } else if (countNotification) {
        countNotification.remove()
      }
    })
  }
}
