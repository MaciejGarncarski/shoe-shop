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
  const newPrice = count * price
  return `
          <li class="item">
              <picture class="item__img">
                <source srcset="/images/shoes/webp/${img}.webp" type="img/webp" />
                <source srcset="/images/shoes/png/${img}.png" type="img/png" />
                <img loading="lazy" src="/images/shoes/png/${img}.png" alt="${name}" />
              </picture>
              <p class="item__name"><span class="item__name-text">${name}</span>, <span class="item__name-price">${price}€</span></p>
              <div class="item__change-price">
                  <p class="item__price-container"><span class="item__price">${newPrice}€</span> for</p>
                  <button type="button" id="minus" class="item__change-btn" title="delete one ${name}">
                    <span class="fa-solid fa-minus"></span>
                  </button>
                  <input type="number" value="${count}" min="1" step="1" title="${name} count" class="item__count"/>
                  <button type="button" id="plus" class="item__change-btn" title="add one ${name}">
                    <span class="fa-solid fa-plus "></span>
                  </button>
                  <p class="item__pronoun">${count === 1 ? 'item' : 'items'}</p>
              </div>
              <button class="item__delete-btn" type="button" title="delete item">
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
