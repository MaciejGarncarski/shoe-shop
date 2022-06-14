import type { offerType } from '../../types/types'
import { resetForm } from './reset'

const template = (name: string, img: string, discount: number, price: number, stars: number) => {
  const discountValue = discount * price
  const withDiscount = `<p class="shop-item__price product__price--discounted">${price}€</p><p class="shop-item__discount">${discountValue}€</p>`
  const withoutDiscount = `<p class="shop-item__price">${price}€</p>`

  const starCount = [...Array(stars)]

  const onSaleBadge = () => {
    if (discount !== 1) {
      return '<p class="shop-item__on-sale-badge">on sale</p>'
    }
    return ''
  }

  return `
  <li class="shop-item">
      ${onSaleBadge()}
      <picture class="shop-item__img">
        <source srcset="/images/shoes/webp/${img}.webp" type="img/webp" />
        <source srcset="/images/shoes/png/${img}.png" type="img/png" />
        <img  loading="lazy" src="/images/shoes/png/${img}.png" alt="${name}" />
      </picture>
      <h2 class="shop-item__name">${name}</h2>
      <button title="add to cart" type="button" class="shop-item__cart-btn">
          <span class="fas fa-cart-plus"></span>
      </button>
      <div class="shop-item__price-container">
          ${discount !== 1 ? withDiscount : withoutDiscount}
      </div>
      <div class="shop-item__stars-container">
          ${starCount.map(() => `<span class="shop-item__star fa-solid fa-star"></span>`).join('')}
      </div>
  </li>
`
}

export const createOfferList = (data: offerType[]) => {
  const offersContainer = document.querySelector('.offers') as HTMLDivElement
  if (offersContainer) {
    offersContainer.textContent = ''
    offersContainer.innerHTML = data
      .map(({ name, price, discount, img, stars }) => template(name, img, discount, price, stars))
      .join('')
  }
  if (offersContainer.childElementCount === 0) {
    offersContainer.innerHTML = `
          <span class="not-found-message">No offers found.</span>
          `
  }
  resetForm()
}
