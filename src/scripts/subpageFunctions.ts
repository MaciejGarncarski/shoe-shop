import { createOfferList } from './shop/createOfferList'
import { offers } from '../data/offers'
import { handleFilter } from './shop/filter'
import { resetForm } from './shop/reset'
import { showFilters } from './shop/showFilters'
import { createCartList } from './cart/createCartList'
import { addToCart } from './shop/addToCart'
import { totalPrice } from './cart/totalPrice'

export const shopFunctions = () => {
  createOfferList(offers)
  addToCart()
  handleFilter()
  resetForm()
  showFilters()
}

export const cartFunctions = () => {
  if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart') || '')
    createCartList(cart)
    totalPrice()
  }
}
