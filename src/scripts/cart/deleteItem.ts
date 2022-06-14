import { createCartList } from './createCartList'
import { getCartItems } from './getCartItems'
import { itemCount } from './itemCount'
import { totalPrice } from './totalPrice'

export const deleteItem = () => {
  const items = document.querySelectorAll('.item')
  items.forEach((item) => {
    const deleteBtn = item.querySelector('.item__button--delete') as HTMLButtonElement
    const itemName = item.querySelector('.item__tag') as HTMLSpanElement

    const onClick = () => {
      const cart = getCartItems()
      const newCart = cart.filter(({ name }: { name: string }) => name !== itemName.textContent)
      createCartList(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      totalPrice()
      itemCount()
    }

    deleteBtn.addEventListener('click', onClick)
  })
}
