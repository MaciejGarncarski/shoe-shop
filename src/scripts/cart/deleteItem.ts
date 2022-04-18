import { createCartList } from './createCartList'
import { itemCount } from './itemCount'
import { totalPrice } from './totalPrice'

export const deleteItem = () => {
  const deleteBtns = document.querySelectorAll('.item__delete-btn')
  if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart') || '')
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement
        const currentItemText = target.parentNode?.children[1].children[0].textContent
        const currentItem = cart.find(({ name }: { name: string }) => name === currentItemText)
        cart.pop(currentItem)
        createCartList(cart)
        totalPrice()
        itemCount()
        btn.parentElement?.classList.add('item--active')
        localStorage.setItem('cart', JSON.stringify(cart))
      })
    })
  }
}
