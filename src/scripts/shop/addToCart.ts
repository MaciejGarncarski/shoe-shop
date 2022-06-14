import { offers } from '../../data/offers'
import type { itemType, offerType } from '../../types/types'
import { getCartItems } from '../cart/getCartItems'
import { itemCount } from '../cart/itemCount'
import { saveNewCart } from '../cart/saveNewCart'
import { addedToCartPopup } from './popup'

let cart: itemType[] = []

if (localStorage.getItem('cart')) {
  const cartItems = getCartItems()
  const cartItemsArray = [cartItems]
  cartItemsArray.forEach((item: itemType) => cart.push(item))
}

export const addToCart = () => {
  const items = document.querySelectorAll('.shop-item')
  let timeout: ReturnType<typeof setTimeout>
  cart = getCartItems()

  items.forEach((item) => {
    const btn = item.querySelector('.shop-item__cart-btn') as HTMLButtonElement
    const currentItem = item.querySelector('.shop-item__name') as HTMLHeadingElement
    const findItemByName = ({ name }: { name: string }) => currentItem.textContent === name

    const onClick = () => {
      const { name, price, discount, img } = offers.find(findItemByName) as offerType
      const cartItem: itemType = {
        name,
        price: discount * price,
        discount,
        img: img,
        count: 1,
      }
      if (cart.find(findItemByName)) {
        const current: itemType = cart.find(findItemByName) as itemType
        current.count++
      } else {
        cart.push(cartItem)
      }
      saveNewCart(cart)
      addedToCartPopup(timeout)
      itemCount()
    }

    btn.addEventListener('click', onClick)
  })
}
