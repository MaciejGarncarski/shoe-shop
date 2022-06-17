import { addItems } from './addItems'
import { deleteItem } from './deleteItem'
import type { cartItem } from '../../types/types'

const template = (name: string, count: number, img: string, price: number) => {
  return `
          <li class="cart-item">
              <picture class="cart-item__img">
                <source srcset="/images/shoes/webp/${img}.webp" type="img/webp" />
                <source srcset="/images/shoes/png/${img}.png" type="img/png" />
                <img loading="lazy" src="/images/shoes/png/${img}.png" alt="${name}" />
              </picture>
              <div class="cart-item__name-container">
                <span class="cart-item__tag">${name}</span><span class="cart-item__price">${price}€</span>
              </div>
              <div class="cart-item__change-price">
                  <button type="button" id="removeOneItem" class="cart-item__button" data-type="remove" title="delete one ${name} from cart">
                    <span class="fa-solid fa-minus"></span>
                  </button>
                  <input type="number" value="${count}" min="1" step="1" max="50" title="${name} count in cart" class="cart-item__input"/>
                  <button type="button" id="addOneItem" class="cart-item__button" data-type="add" title="add one ${name} to cart">
                    <span class="fa-solid fa-plus "></span>
                  </button>
              </div>
              <button class="cart-item__button cart-item__button--delete" type="button" title="delete all ${name} from cart">
                  <span class="fa-solid fa-trash-can"></span>
              </button>
          </li>
      `
}

export const createCartList = (data: cartItem[]) => {
  const container = document.querySelector('.cart__items') as HTMLDivElement
  if (container) {
    container.innerHTML = ''
    container.innerHTML = data
      .map(({ name, price, count, img }: cartItem) => template(name, count, img, price))
      .join('')
    deleteItem()
    addItems()

    const message = `
      No items in cart
      <a href="#shop" class="cart__link">go back to shopping!</a>
    `
    if (container.childElementCount === 0) {
      container.innerHTML = `
        <span class="not-found-message">${message}</span>
        `
    }
  }
}
