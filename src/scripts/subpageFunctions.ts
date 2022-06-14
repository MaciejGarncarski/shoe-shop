import { createOfferList } from './shop/createOfferList'
import { offers } from '../data/offers'
import { runFilters } from './shop/filter'
import { showFilters } from './shop/showFilters'
import { createCartList } from './cart/createCartList'
import { addToCart } from './shop/addToCart'
import { totalPrice } from './cart/totalPrice'
import { getCartItems } from './cart/getCartItems'

export const shopFunctions = () => {
  createOfferList(offers)
  addToCart()
  runFilters()
  showFilters()
}

export const cartFunctions = () => {
  const cart = getCartItems()
  createCartList(cart)
  totalPrice()
}
