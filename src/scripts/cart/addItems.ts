import { updateCartItems } from './updateCartItems'

export const addItems = () => {
  const items = document.querySelectorAll<HTMLLIElement>('.cart-item')
  items.forEach((item) => {
    const addBtn = item.querySelector('[data-type="add"]') as HTMLButtonElement
    const removeBtn = item.querySelector('[data-type="remove"]') as HTMLButtonElement
    const itemName = item.querySelector('.cart-item__tag') as HTMLParagraphElement
    const itemCount = item.querySelector('.cart-item__input') as HTMLInputElement

    const onInputChange = () => {
      if (itemCount.valueAsNumber <= 0 || itemCount.valueAsNumber > 50) {
        updateCartItems(itemName, itemCount, 1)
      } else {
        updateCartItems(itemName, itemCount, itemCount.valueAsNumber)
      }
    }

    const onClick = (operation: string) => {
      if (operation === 'addOneItem' && itemCount.valueAsNumber < 50) {
        updateCartItems(itemName, itemCount, itemCount.valueAsNumber + 1)
      } else if (operation === 'removeOneItem' && itemCount.valueAsNumber > 1) {
        updateCartItems(itemName, itemCount, itemCount.valueAsNumber - 1)
      }
    }

    addBtn.addEventListener('click', () => onClick('addOneItem'))
    removeBtn.addEventListener('click', () => onClick('removeOneItem'))
    itemCount.addEventListener('input', onInputChange)
  })
}
