import { createOfferList } from './shop/createOfferList'
import { offers } from '../data/offers'
import { initFilters } from './shop/initFilter'
import { showFilters } from './shop/showFilters'
import { createCartList } from './cart/createCartList'
import { addToCart } from './shop/addToCart'
import { calculateTotalPrice } from './cart/calculateTotalPrice'
import { getCartItems } from './cart/getCartItems'
import { countCartItems } from './cart/countCartItems'
import { changeOnClick } from './changePages'

export const homeFunctions = () => {
  changeOnClick()
}

export const shopFunctions = () => {
  createOfferList(offers)
  addToCart()
  initFilters()
  showFilters()
  changeOnClick()
}

export const cartFunctions = () => {
  const cart = getCartItems()
  createCartList(cart)
  countCartItems()
  calculateTotalPrice()
  changeOnClick()
}
