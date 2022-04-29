import { createCartList } from './createCartList'
import { itemCount } from './itemCount'
import { totalPrice } from './totalPrice'

export const deleteItem = () => {
  const items = document.querySelectorAll('.item')
  items.forEach((item) => {
    const deleteBtn = item.querySelector('.item__delete-btn') as HTMLButtonElement
    const itemName = item.querySelector('.item__name-text') as HTMLSpanElement

    const handleClick = () => {
      if (localStorage.getItem('cart')) {
        const cart = JSON.parse(localStorage.getItem('cart') || '')
        const newCart = cart.filter(({ name }: { name: string }) => name !== itemName.textContent)
        createCartList(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
        totalPrice()
        itemCount()
      }
    }

    deleteBtn.addEventListener('click', handleClick)
  })
}
