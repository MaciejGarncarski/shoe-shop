import { offers } from '../../data/offers'
import { defaultObj, itemTypes } from '../../types/types'
import { itemCount } from '../cart/itemCount'

const showNotification = () => {
  const overlay = document.querySelector('.added-to-cart') as HTMLDivElement
  const closeBtn = document.querySelector('.added-to-cart__close-btn') as HTMLDivElement
  const active = 'added-to-cart--active'
  overlay.classList.remove(active)
  overlay.classList.add(active)
  closeBtn.focus()
  closeBtn.addEventListener('click', () => overlay.classList.remove(active))
}

let cart: itemTypes[] = []

if (localStorage.getItem('cart')) {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '')
  cartItems.forEach((item: itemTypes) => cart.push(item))
}

export const addToCart = () => {
  const items = document.querySelectorAll('.product')
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart') || '')
  }

  items.forEach((item) => {
    const btn = item.querySelector('.product__cart-btn') as HTMLButtonElement
    const currentItem = item.querySelector('.product__name') as HTMLHeadingElement

    const handleClick = () => {
      const { name, price, discount, img } = offers.find(({ name }) => currentItem.textContent === name) || defaultObj
      const item: itemTypes = {
        name,
        price: discount * price,
        discount,
        img: img,
        count: 1,
      }
      if (cart.find(({ name }) => name === item.name)) {
        const current: itemTypes = cart.find(({ name }) => name === item.name) || defaultObj
        current.count++
      } else {
        cart.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      showNotification()
      itemCount()
    }

    btn.addEventListener('click', handleClick)
  })
}
