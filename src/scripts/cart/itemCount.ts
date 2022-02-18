export const itemCount = () => {
  const cartIcons = document.querySelectorAll<HTMLAnchorElement>('[href="#cart"]')
  if (localStorage.getItem('cart')) {
    const cartData = JSON.parse(localStorage.getItem('cart') || '')
    cartIcons.forEach((icon) => {
      if (cartData.length > 0) {
        const count = document.createElement('p')
        count.textContent = cartData.length.toString()
        count.className = 'item-count'
        if (!icon.childNodes[6]) {
          icon.appendChild(count)
        } else {
          icon.childNodes[6].textContent = cartData.length.toString()
        }
      } else {
        if (icon.childNodes[6]) {
          icon.childNodes[6].remove()
        }
      }
    })
  }
}
