export const itemCount = () => {
  const cartIcons = document.querySelectorAll<HTMLAnchorElement>('[href="#cart"]')

  if (localStorage.getItem('cart')) {
    const cartData = JSON.parse(localStorage.getItem('cart') || '')
    let totalCount = 0
    cartData.forEach(({ count }: { count: number }) => (totalCount += count))
    cartIcons.forEach((icon) => {
      const iconValue = icon.childNodes[6]
      if (cartData.length > 0) {
        const count = document.createElement('p')
        count.className = 'item-count'
        count.textContent = totalCount.toString()
        if (totalCount > 9) {
          count.textContent = '9+'
        }
        if (!iconValue) {
          icon.appendChild(count)
        } else if (totalCount > 9) {
          iconValue.textContent = '9+'
        } else {
          iconValue.textContent = totalCount.toString()
        }
      } else if (icon.childNodes[6]) {
        iconValue.remove()
      }
    })
  }
}
