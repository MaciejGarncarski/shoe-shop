import { itemCount as cartItemCount } from './itemCount'
import { totalPrice } from './totalPrice'
import { saveNewCart } from './saveNewCart'

import type { offerType } from '../../types/types'

type cartOfferType = offerType & { count: number }

export const addItems = (data: cartOfferType[]) => {
  const items = document.querySelectorAll<HTMLLIElement>('.item')
  items.forEach((item) => {
    const addBtn = item.querySelector('[data-type="add"]') as HTMLButtonElement
    const removeBtn = item.querySelector('[data-type="remove"]') as HTMLButtonElement
    const itemName = item.querySelector('.cart-item__tag') as HTMLParagraphElement
    const itemCount = item.querySelector('.cart-item__input') as HTMLInputElement

    const findItemByName = ({ name }: { name: string }) => itemName.textContent === name

    const updateInputValue = (currentItemData: cartOfferType) => {
      itemCount.value = currentItemData.count.toString() || ''
      totalPrice()
      cartItemCount()
    }

    const getCartData = () => {
      const cart = data
      const currentItemData = data.find(findItemByName) as cartOfferType
      return { cart, currentItemData }
    }

    const onInputChange = () => {
      const { cart, currentItemData } = getCartData()
      currentItemData.count = itemCount.valueAsNumber
      if (itemCount.valueAsNumber <= 0 || itemCount.valueAsNumber > 50) {
        currentItemData.count = 1
      }
      saveNewCart(cart)
      updateInputValue(currentItemData)
    }

    const updateItem = (operation: string) => {
      const { cart, currentItemData } = getCartData()
      if (operation === 'addOneItem' && itemCount.valueAsNumber < 50) {
        currentItemData.count = itemCount.valueAsNumber + 1
      } else if (operation === 'removeOneItem' && itemCount.valueAsNumber > 1) {
        currentItemData.count = itemCount.valueAsNumber - 1
      }
      saveNewCart(cart)
      updateInputValue(currentItemData)
    }

    addBtn.addEventListener('click', () => updateItem('addOneItem'))
    removeBtn.addEventListener('click', () => updateItem('removeOneItem'))
    itemCount.addEventListener('change', onInputChange)
  })
}
