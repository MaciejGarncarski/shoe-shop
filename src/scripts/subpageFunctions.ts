import { createOfferList } from './shop/createOfferList'
import { offers } from '../data/offers'
import { runFilters } from './shop/filter'
import { showFilters } from './shop/showFilters'
import { createCartList } from './cart/createCartList'
import { addToCart } from './shop/addToCart'
import { calculateTotalPrice } from './cart/calculateTotalPrice'
import { getCartItems } from './cart/getCartItems'
import { countCartItems } from './cart/countCartItems'

export const shopFunctions = () => {
  createOfferList(offers)
  addToCart()
  runFilters()
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
