import { products } from '../../data/products'
import { getCartItems } from '../cart/getCartItems'
import { countCartItems } from '../cart/countCartItems'
import { saveNewCart } from '../cart/saveNewCart'
import { addedToCartPopup } from './popup'

let timeout: ReturnType<typeof setTimeout>

export const initAddToCart = () => {
  const items = document.querySelectorAll('.shop-item')

  items.forEach((item) => {
    const btn = item.querySelector('.shop-item__cart-btn') as HTMLButtonElement
    const currentItemName = item.querySelector('.shop-item__name') as HTMLHeadingElement
    const findItemByName = ({ name }: { name: string }) => currentItemName.textContent === name

    const addToCart = () => {
      const currentCart = getCartItems()
      const foundCartItem = currentCart.find(findItemByName)
      const clickedItem = products.find(findItemByName)

      if (clickedItem) {
        if (foundCartItem) {
          const modifiedClickedItem = { ...clickedItem, count: foundCartItem.count + 1 }
          const newCart = currentCart.map((cartItem) => {
            return cartItem.name === modifiedClickedItem.name ? modifiedClickedItem : cartItem
          })
          saveNewCart(newCart)
        } else {
          const newItem = { ...clickedItem, count: 1 }
          saveNewCart([...currentCart, newItem])
        }
        addedToCartPopup(timeout)
        countCartItems()
      }
    }

    btn.addEventListener('click', addToCart)
  })
}
