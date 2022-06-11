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
    const addBtn = item.querySelector('[data-type="add"]') as HTMLButtonElement
    const removeBtn = item.querySelector('[data-type="remove"]') as HTMLButtonElement
    const itemName = item.querySelector('.item__tag') as HTMLParagraphElement
    const itemCount = item.querySelector('.item__input') as HTMLInputElement

    const displayNewCount = (currentItemData: offerTypes, oldData: offerTypes[]) => {
      itemCount.value = currentItemData.count.toString() || ''
      const newData = [currentItemData, ...oldData]
      localStorage.setItem('cart', JSON.stringify(newData))
      totalPrice()
      cartItemCount()
    }

    const getData = () => {
      const currentItemData: offerTypes = data.find(({ name }) => name === itemName.textContent) || defaultObj
      const oldData = data.filter(({ name }) => name !== itemName.textContent)
      return { oldData, currentItemData }
    }

    const handleInputChange = () => {
      const { oldData, currentItemData } = getData()
      currentItemData.count = +itemCount.value
      if (+itemCount.value <= 0) {
        currentItemData.count = 1
      }
      displayNewCount(currentItemData, oldData)
    }

    const updateItem = (operation: string) => {
      const { oldData, currentItemData } = getData()

      if (operation === 'plus') {
        if (currentItemData.count >= 1 && currentItemData.count <= 50 && +itemCount.value <= 50) {
          currentItemData.count = +itemCount.value + 1
        }
      } else if (operation === 'minus') {
        if (currentItemData.count > 1 && +itemCount.value > 1) {
          currentItemData.count = +itemCount.value - 1
        }
      }
      displayNewCount(currentItemData, oldData)
    }

    addBtn.addEventListener('click', () => updateItem('plus'))
    removeBtn.addEventListener('click', () => updateItem('minus'))
    itemCount.addEventListener('change', handleInputChange)
  })
}
