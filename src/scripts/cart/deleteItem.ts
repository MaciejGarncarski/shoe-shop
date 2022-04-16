import { createCartList } from './createCartList'
import { itemCount } from './itemCount'
import { totalPrice } from './totalPrice'

export const deleteItem = () => {
  const deleteBtns = document.querySelectorAll('.item__delete-btn')
  if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart') || '')
    deleteBtns.forEach((btn) => {
      const currentItem = btn.parentElement?.children[1] as HTMLButtonElement
      btn.addEventListener('click', () => {
        cart.shift(cart.find(({ name }: { name: string }) => name !== currentItem.textContent))
        localStorage.setItem('cart', JSON.stringify(cart))
        btn.parentElement?.classList.add('item--active')
        createCartList(cart)
        totalPrice()
        itemCount()
      })
    })
  }
}
