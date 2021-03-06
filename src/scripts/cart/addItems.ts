import { updateCartItems } from './updateCartItems'

export const maximumItems = 15

export const addItems = () => {
  const items = document.querySelectorAll<HTMLLIElement>('.cart-item')
  items.forEach((item) => {
    const addBtn = item.querySelector('[data-type="add"]') as HTMLButtonElement
    const removeBtn = item.querySelector('[data-type="remove"]') as HTMLButtonElement
    const itemName = item.querySelector('.cart-item__tag') as HTMLParagraphElement
    const itemCount = item.querySelector('.cart-item__input') as HTMLInputElement

    const onInputChange = () => {
      if (itemCount.valueAsNumber <= 0 || itemCount.valueAsNumber > maximumItems) {
        updateCartItems(itemName, itemCount, maximumItems)
      } else {
        updateCartItems(itemName, itemCount, itemCount.valueAsNumber)
      }
    }

    const disableButtons = () => {
      addBtn.disabled = itemCount.valueAsNumber === maximumItems
      removeBtn.disabled = itemCount.valueAsNumber === 1
    }
    disableButtons()

    const onClick = (operation: string) => {
      if (operation === 'addOneItem' && itemCount.valueAsNumber < maximumItems) {
        updateCartItems(itemName, itemCount, itemCount.valueAsNumber + 1)
      } else if (operation === 'removeOneItem' && itemCount.valueAsNumber > 1) {
        updateCartItems(itemName, itemCount, itemCount.valueAsNumber - 1)
      }
      disableButtons()
    }

    addBtn.addEventListener('click', () => onClick('addOneItem'))
    removeBtn.addEventListener('click', () => onClick('removeOneItem'))
    itemCount.addEventListener('input', () => {
      onInputChange()
      disableButtons()
    })
  })
}
