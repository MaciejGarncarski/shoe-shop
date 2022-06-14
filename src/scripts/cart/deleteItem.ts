import { createCartList } from './createCartList'
import { getCartItems } from './getCartItems'
import { itemCount } from './itemCount'
import { saveNewCart } from './saveNewCart'
import { totalPrice } from './totalPrice'

export const deleteItem = () => {
  const items = document.querySelectorAll('.cart-item')
  items.forEach((item) => {
    const deleteBtn = item.querySelector('.cart-item__button--delete') as HTMLButtonElement
    const itemName = item.querySelector('.cart-item__tag') as HTMLSpanElement

    const onClick = () => {
      const cart = getCartItems()
      const newCart = cart.filter(({ name }: { name: string }) => name !== itemName.textContent)
      createCartList(newCart)
      saveNewCart(newCart)
      totalPrice()
      itemCount()
    }

    deleteBtn.addEventListener('click', onClick)
  })
}
