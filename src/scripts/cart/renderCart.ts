import { addItems, maximumItems } from './addItems'
import { deleteItem } from './deleteItem'
import type { cartItem } from '../../types/types'

const template = (name: string, count: number, img: string, price: number) => {
  return `
          <li class="cart-item">
              <picture class="cart-item__img">
                <source srcset="/images/shoes/webp/${img}.webp" type="img/webp" />
                <img loading="lazy" src="/images/shoes/png/${img}.png" alt="${name}" />
              </picture>
              <div class="cart-item__name-container">
                <span class="cart-item__tag">${name}</span><span class="cart-item__price">${price}€</span>
              </div>
              <div class="cart-item__change-price">
                  <button type="button" id="removeOneItem" class="button cart-item__button" data-type="remove" title="Delete one ${name} from cart">
                    <span class="fa-solid fa-minus"></span>
                  </button>
                  <input type="number" value="${count}" min="1" step="1" max="${maximumItems}" title="Count of ${name} in cart" class="cart-item__input"/>
                  <button type="button" id="addOneItem" class="button cart-item__button" data-type="add" title="Add one ${name} to cart">
                    <span class="fa-solid fa-plus "></span>
                  </button>
              </div>
              <button class="button cart-item__button cart-item__button--delete" type="button" title="delete all ${name} from cart">
                  <span class="fa-solid fa-trash"></span>
              </button>
          </li>
      `
}

export const renderCart = (data: cartItem[]) => {
  const container = document.querySelector('.cart__items') as HTMLDivElement

  const message = `
    <span class="not-found-message">
      No items in cart
      <a href="/products" class="cart__link button">go back to shopping!</a>
    </span>
  `

  if (container) {
    container.innerHTML = data
      .map(({ name, price, count, img }: cartItem) => template(name, count, img, price))
      .join('')
    deleteItem()
    addItems()

    if (container.childElementCount === 0) {
      container.innerHTML = message
    }
  }
}
