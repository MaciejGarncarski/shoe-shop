import { offers } from '../../data/offers'
import { getCartItems } from '../cart/getCartItems'
import { countCartItems } from '../cart/countCartItems'
import { saveNewCart } from '../cart/saveNewCart'
import { addedToCartPopup } from './popup'
import type { itemType, cartItem } from '../../types/types'

export const addToCart = () => {
  const items = document.querySelectorAll('.shop-item')
  let timeout: ReturnType<typeof setTimeout>

  items.forEach((item) => {
    const btn = item.querySelector('.shop-item__cart-btn') as HTMLButtonElement
    const currentItemName = item.querySelector('.shop-item__name') as HTMLHeadingElement
    const findItemByName = ({ name }: { readonly name: string }) => currentItemName.textContent === name

    const onClick = () => {
      const { name, price, discount, img } = offers.find(findItemByName) as itemType

      const currentCart = getCartItems()

      if (currentCart.find(findItemByName)) {
        const currentCartItem = currentCart.find(findItemByName) as cartItem
        const newCartItem = Object.assign({}, currentCartItem, { count: currentCartItem.count + 1 })
        const mapCartItems = (item: itemType) => (item.name === currentItemName.textContent ? newCartItem : item)
        const newCart = currentCart.map(mapCartItems)
        saveNewCart(newCart)
      } else {
        const cartItem: cartItem = {
          name,
          price: discount * price,
          discount,
          img: img,
          count: 1,
        }
        const newCart = [...currentCart, cartItem]
        saveNewCart(newCart)
      }

      addedToCartPopup(timeout)
      countCartItems()
    }

    btn.addEventListener('click', onClick)
  })
}
