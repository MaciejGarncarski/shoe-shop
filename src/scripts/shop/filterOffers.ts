import { products } from '../../data/products'
import { initAddToCart } from './addToCart'
import { renderProducts } from './renderProducts'

export const filterProducts = () => {
  const minPrice = document.querySelector('#min-price') as HTMLInputElement
  const maxPrice = document.querySelector('#max-price') as HTMLInputElement
  const markedStars = document.querySelectorAll('.clicked')

  const filteredProducts = products.filter(({ price, discount, stars }) => {
    const itemPrice: number = discount * price
    const filterByMin: boolean = !minPrice.valueAsNumber || minPrice.valueAsNumber <= itemPrice
    const filterByMax: boolean = !maxPrice.valueAsNumber || maxPrice.valueAsNumber >= itemPrice
    const filterByStars: boolean = !markedStars.length || markedStars.length === stars

    return filterByMin && filterByMax && filterByStars
  })

  renderProducts(filteredProducts)
  initAddToCart()
}
