import { offerTypes } from '../../types/types'
import { handleErrorMessage } from '../handleErrorMessage'

const template = (name: string, img: string, discount: number, price: number, stars: number) => {
  const discountValue = discount * price
  const withDiscount = `<p class="product__price product__price--discounted">${price}€</p><p class="product__discount">${discountValue}€</p>`
  const withoutDiscount = `<p class="product__price">${price}€</p>`

  const starCount = [...Array(stars)]

  const onSaleBadge = () => {
    if (discount !== 1) {
      return '<p class="product__on-sale-badge">on sale</p>'
    }
    return ''
  }

  return `
  <li class="product">
      ${onSaleBadge()}
      <picture class="product__img">
        <source srcset="/images/shoes/webp/${img}.webp" type="img/webp" />
        <source srcset="/images/shoes/png/${img}.png" type="img/png" />
        <img  loading="lazy" src="/images/shoes/png/${img}.png" alt="${name}" />
      </picture>
      <h2 class="product__name">${name}</h2>
      <button title="add to cart" type="button" class="product__cart-btn">
          <span class="fas fa-cart-plus"></span>
      </button>
      <div class="product__price-container">
          ${discount !== 1 ? withDiscount : withoutDiscount}
      </div>
      <div class="product__stars-container">
          ${starCount.map(() => `<span class="product__star fa-solid fa-star"></span>`).join('')}
      </div>
  </li>
`
}

export const createOfferList = (data: offerTypes[]) => {
  const offersContainer = document.querySelector('.offers') as HTMLDivElement
  if (offersContainer) {
    offersContainer.textContent = ''
    offersContainer.innerHTML = data
      .map(({ name, price, discount, img, stars }) => template(name, img, discount, price, stars))
      .join('')
    handleErrorMessage(data, offersContainer, 'No items Found')
  }
}
