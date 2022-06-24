import type { shopItem } from '../../types/types'
import { resetForm } from './reset'

const template = (name: string, img: string, discount: number, price: number, stars: number) => {
  const discountValue = discount * price
  const withDiscount = `<p class="shop-item__price shop-item__price--discounted">${price}€</p><p class="shop-item__discount">${discountValue}€</p>`
  const withoutDiscount = `<p class="shop-item__price">${price}€</p>`

  const starCount = [...Array(stars)]

  return `
  <li class="shop-item glass">
      <div class="shop-item__stars-container">
      ${starCount.map(() => '<span class="shop-item__star fa-solid fa-star"></span>').join('')}
      </div>
      <button title="Add ${name} to cart" type="button" class="button shop-item__cart-btn">
          <span class="fas fa-cart-plus"></span>
      </button>
      <picture class="shop-item__img">
        <source srcset="/images/shoes/webp/${img}.webp" type="img/webp" />
        <img  loading="lazy" src="/images/shoes/png/${img}.png" alt="${name}" />
      </picture>
      <h2 class="shop-item__name">${name}</h2>
      <div class="shop-item__price-container">
          ${discount !== 1 ? withDiscount : withoutDiscount}
      </div>
  </li>
`
}

export const renderProducts = (data: shopItem[]) => {
  const productsContainer = document.querySelector('.products') as HTMLDivElement
  const htmlData = data
    .map(({ name, price, discount, img, stars }) => template(name, img, discount, price, stars || 0))
    .join('')

  if (productsContainer) {
    productsContainer.textContent = ''
    productsContainer.innerHTML = htmlData
  }
  if (productsContainer.childElementCount === 0) {
    productsContainer.innerHTML = `
      <span class="not-found-message">No items found.</span>
      `
  }
  resetForm()
}
