import { offers } from '../../data/offers'
import { defaultObj } from '../../types/types'
import { itemCount } from '../cart/itemCount'

type itemType = {
  name: string
  price: number
  discount: number
  count: number
  img: string
}

const showNotification = () => {
  const overlay = document.querySelector('.added-to-cart') as HTMLDivElement
  const closeBtn = document.querySelector('.added-to-cart__close') as HTMLDivElement
  const active = 'added-to-cart--active'
  overlay.classList.remove(active)
  setTimeout(() => overlay.classList.add(active), 500)
  closeBtn.addEventListener('click', () => overlay.classList.remove(active))
}

let cart: itemType[] = []

if (localStorage.getItem('cart')) {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '')
  cartItems.forEach((item: itemType) => cart.push(item))
}

export const addToCart = () => {
  const addBtn = document.querySelectorAll('.product__cart-btn')
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart') || '')
  }

  addBtn.forEach((btn) => {
    const currentItem = btn.parentElement?.childNodes[3] as HTMLParagraphElement

    const handleClick = () => {
      const { name, price, discount, img } = offers.find(({ name }) => currentItem.textContent === name) || defaultObj
      const item: itemType = {
        name,
        price: discount * price,
        discount,
        img: img,
        count: 1,
      }
      if (cart.find(({ name }) => name === item.name)) {
        const current: itemType = cart.find(({ name }) => name === item.name) || defaultObj
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
