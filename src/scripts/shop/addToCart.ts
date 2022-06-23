import { offers } from '../../data/offers'
import { getCartItems } from '../cart/getCartItems'
import { countCartItems } from '../cart/countCartItems'
import { saveNewCart } from '../cart/saveNewCart'
import { addedToCartPopup } from './popup'
import type { item, cartItem } from '../../types/types'

export const addToCart = () => {
  const items = document.querySelectorAll('.shop-item')
  let timeout: ReturnType<typeof setTimeout>

  items.forEach((item) => {
    const btn = item.querySelector('.shop-item__cart-btn') as HTMLButtonElement
    const currentItemName = item.querySelector('.shop-item__name') as HTMLHeadingElement
    const findItemByName = ({ name }: { readonly name: string }) => currentItemName.textContent === name

    const onClick = () => {
      const { name, price, discount, img } = offers.find(findItemByName) as item

      const currentCart = getCartItems()

      if (currentCart.find(findItemByName)) {
        const currentCartItem = currentCart.find(findItemByName) as cartItem
        const newCartItem = { ...currentCartItem, count: currentCartItem.count + 1 }
        const mapCartItems = (item: item) => (item.name === currentItemName.textContent ? newCartItem : item)
        const existingItemCart = currentCart.map(mapCartItems)
        saveNewCart(existingItemCart)
      } else {
        const cartItem: cartItem = {
          name,
          price: discount * price,
          discount,
          img: img,
          count: 1,
        }
        const newItemCart = [...currentCart, cartItem]
        saveNewCart(newItemCart)
      }

      addedToCartPopup(timeout)
      countCartItems()
    }

    btn.addEventListener('click', onClick)
  })
}
