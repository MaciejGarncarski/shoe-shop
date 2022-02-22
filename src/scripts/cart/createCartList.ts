import { addItems } from './addItems'
import { deleteItem } from './deleteItem'
import { focusElement } from './focusElement'

type offerTypes = {
  name: string
  price: number
  discount: number
  count: number
  img: string
}

export const createCartList = (data: offerTypes[]) => {
  const container = document.querySelector('.cart__items') as HTMLDivElement
  if (container) {
    container.innerHTML = ''
    container.innerHTML = data
      .map(({ name, price, count, img }: offerTypes) => {
        const newPrice = count * price
        const template = `
                <li class="item">
                    <img class="item__img" loading="lazy" src="/images/shoes/${img}.png" alt="${name}">
                    <p class="item__name">${name}</p>
                    <div class="item__change-price">
                        <p class="item__price">${newPrice}€ for</p>
                        <input type="number" value="${count}" min="1" step="1" title="add item" class="item__count"/>
                        <p>item/items</p>
                    </div>
                    <button class="item__delete-btn" type="button" title="delete item">
                        <span class="fa-solid fa-trash-can"></span>
                    </button>
                </li>
            `
        return template
      })
      .join('')
    if (container.innerHTML === '' || data.length === 0) {
      container.innerHTML = '<li><p>Your cart is empty.</p></li>'
    } else {
      focusElement()
      deleteItem()
      addItems(data)
    }
  }
}
