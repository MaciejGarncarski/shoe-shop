import { createCartList } from './createCartList'
import { getCartItems } from './getCartItems'
import { countCartItems } from './countCartItems'
import { saveNewCart } from './saveNewCart'
import { calculateTotalPrice } from './calculateTotalPrice'

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
      calculateTotalPrice()
      countCartItems()
    }

    deleteBtn.addEventListener('click', onClick)
  })
}
