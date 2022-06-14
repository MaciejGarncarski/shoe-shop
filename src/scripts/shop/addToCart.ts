import { offers } from '../../data/offers'
import { itemTypes, offerTypes } from '../../types/types'
import { getCartItems } from '../cart/getCartItems'
import { itemCount } from '../cart/itemCount'
import { addedToCartPopup } from './popup'

let cart: itemTypes[] = []

if (localStorage.getItem('cart')) {
  const cartItems = getCartItems()
  const cartItemsArray = [cartItems]
  cartItemsArray.forEach((item: itemTypes) => cart.push(item))
}

export const addToCart = () => {
  const items = document.querySelectorAll('.product')
  let timeout: ReturnType<typeof setTimeout>
  cart = getCartItems()

  items.forEach((item) => {
    const btn = item.querySelector('.product__cart-btn') as HTMLButtonElement
    const currentItem = item.querySelector('.product__name') as HTMLHeadingElement
    const findItemByName = ({ name }: { name: string }) => currentItem.textContent === name

    const onClick = () => {
      const { name, price, discount, img } = offers.find(findItemByName) as offerTypes
      const item: itemTypes = {
        name,
        price: discount * price,
        discount,
        img: img,
        count: 1,
      }
      if (cart.find(findItemByName)) {
        const current: itemTypes = cart.find(findItemByName) as itemTypes
        current.count++
      } else {
        cart.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      addedToCartPopup(timeout)
      itemCount()
    }

    btn.addEventListener('click', onClick)
  })
}
