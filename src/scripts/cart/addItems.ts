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
    const itemPlural = item.querySelector('.item__pronoun') as HTMLInputElement

    const setPlural = (currentItemData: offerTypes) => {
      if (currentItemData.count === 1) {
        itemPlural.textContent = 'item'
      } else {
        itemPlural.textContent = 'items'
      }
    }

    const displayNewCount = (currentItemData: offerTypes, oldData: offerTypes[]) => {
      itemPrice.textContent = `${currentItemData.price * currentItemData.count}€`
      itemCount.value = currentItemData?.count.toString() || ''
      const newData = [currentItemData, ...oldData]
      localStorage.setItem('cart', JSON.stringify(newData))
      totalPrice()
      cartItemCount()
    }

    const handleInputChange = () => {
      const currentItemData: offerTypes = data.find(({ name }) => name === itemName.textContent) || defaultObj
      const oldData = data.filter(({ name }) => name !== itemName.textContent)
      currentItemData.count = +itemCount.value
      displayNewCount(currentItemData, oldData)
      setPlural(currentItemData)
    }

    const updateItem = (operation: string) => {
      const currentItemData: offerTypes = data.find(({ name }) => name === itemName.textContent) || defaultObj
      const oldData = data.filter(({ name }) => name !== itemName.textContent)

      if (operation === 'plus') {
        if (currentItemData.count >= 1 && currentItemData.count <= 50 && +itemCount.value <= 50) {
          currentItemData.count = +itemCount.value + 1
        }
        setPlural(currentItemData)
      } else if (operation === 'minus') {
        if (currentItemData.count > 1 && +itemCount.value > 1) {
          currentItemData.count = +itemCount.value - 1
        }
        setPlural(currentItemData)
      }
      displayNewCount(currentItemData, oldData)
    }

    plus.addEventListener('click', () => updateItem('plus'))
    minus.addEventListener('click', () => updateItem('minus'))
    itemCount.addEventListener('change', handleInputChange)
  })
}
