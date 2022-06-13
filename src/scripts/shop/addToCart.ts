import { offers } from '../../data/offers'
import { defaultObj, itemTypes } from '../../types/types'
import { itemCount } from '../cart/itemCount'
import { addedToCartPopup } from './popup'

let cart: itemTypes[] = []

if (localStorage.getItem('cart')) {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '')
  cartItems.forEach((item: itemTypes) => cart.push(item))
}

export const addToCart = () => {
  let timeout: ReturnType<typeof setTimeout>
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
      addedToCartPopup(timeout)
      itemCount()
    }

    btn.addEventListener('click', handleClick)
  })
}
