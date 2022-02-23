import { itemCount as cartItemCount } from './itemCount'
import { totalPrice } from './totalPrice'
import { defaultObj } from '../../types/types'

type offerTypes = {
  name: string
  price: number
  discount: number
  count: number
  img: string
}

export const addItems = (data: offerTypes[]) => {
  const items = document.querySelectorAll<HTMLLIElement>('.item')
  items.forEach((item) => {
    const minus = item.querySelector('#minus') as HTMLButtonElement
    const plus = item.querySelector('#plus') as HTMLButtonElement
    const itemName = item.querySelector('.item__name') as HTMLParagraphElement
    const itemPrice = item.querySelector('.item__price') as HTMLParagraphElement
    const itemCount = item.querySelector('.item__count') as HTMLInputElement
    const itemPronun = item.querySelector('.item__pronoun') as HTMLInputElement

    const updateItem = (operation: string) => {
      const currentItemData: offerTypes = data.find(({ name }) => name === itemName.textContent) || defaultObj
      const oldData = data.filter(({ name }) => name !== itemName.textContent)

      const setPronoun = () => {
        if (currentItemData.count === 1) {
          itemPronun.textContent = 'item'
        } else {
          itemPronun.textContent = 'items'
        }
      }

      if (operation === 'plus') {
        if (currentItemData.count >= 1 && currentItemData.count <= 50) {
          currentItemData.count++
        }
        setPronoun()
      } else if (operation === 'minus') {
        if (currentItemData.count > 1) {
          currentItemData.count--
        }
        setPronoun()
      }

      itemPrice.textContent = `${currentItemData.price * currentItemData.count}€`
      itemCount.value = currentItemData?.count.toString() || ''
      const newData = [currentItemData, ...oldData]
      localStorage.setItem('cart', JSON.stringify(newData))
      totalPrice()
      cartItemCount()
    }

    plus.addEventListener('click', () => updateItem('plus'))
    minus.addEventListener('click', () => updateItem('minus'))
  })
}
