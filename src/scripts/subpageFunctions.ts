import { renderProducts } from './shop/renderProducts'
import { products } from '../data/products'
import { initFilters } from './shop/initFilter'
import { showFilters } from './shop/showFilters'
import { renderCart } from './cart/renderCart'
import { initAddToCart } from './shop/addToCart'
import { calculateTotalPrice } from './cart/calculateTotalPrice'
import { getCartItems } from './cart/getCartItems'
import { countCartItems } from './cart/countCartItems'
import { changeOnClick } from './changePages'

export const homeFunctions = () => {
  changeOnClick()
}

export const shopFunctions = () => {
  renderProducts(products)
  initAddToCart()
  initFilters()
  showFilters()
  changeOnClick()
}

export const cartFunctions = () => {
  const cart = getCartItems()
  renderCart(cart)
  countCartItems()
  calculateTotalPrice()
  changeOnClick()
}
