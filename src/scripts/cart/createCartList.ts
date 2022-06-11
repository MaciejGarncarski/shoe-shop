import { handleErrorMessage } from '../handleErrorMessage'
import { addItems } from './addItems'
import { deleteItem } from './deleteItem'

type offerTypes = {
  name: string
  price: number
  discount: number
  count: number
  img: string
}

const template = (name: string, count: number, img: string, price: number) => {
  return `
          <li class="item">
              <picture class="item__img">
                <source srcset="/images/shoes/webp/${img}.webp" type="img/webp" />
                <source srcset="/images/shoes/png/${img}.png" type="img/png" />
                <img loading="lazy" src="/images/shoes/png/${img}.png" alt="${name}" />
              </picture>
              <div class="item__name-container">
                <span class="item__tag">${name}</span><span class="item__price">${price}€</span>
              </div>
              <div class="item__change-price">
                  <button type="button" id="minus" class="item__button" data-type="remove" title="delete one ${name}">
                    <span class="fa-solid fa-minus"></span>
                  </button>
                  <input type="number" value="${count}" min="1" step="1" title="${name} count" class="item__input"/>
                  <button type="button" id="plus" class="item__button" data-type="add" title="add one ${name}">
                    <span class="fa-solid fa-plus "></span>
                  </button>
              </div>
              <button class="item__button item__button--delete" type="button" title="delete item">
                  <span class="fa-solid fa-trash-can"></span>
              </button>
          </li>
      `
}

export const createCartList = (data: offerTypes[]) => {
  const container = document.querySelector('.cart__items') as HTMLDivElement
  if (container) {
    container.innerHTML = ''
    container.innerHTML = data
      .map(({ name, price, count, img }: offerTypes) => template(name, count, img, price))
      .join('')
    deleteItem()
    addItems(data)
    handleErrorMessage(data, container, 'No items in cart')
  }
}
