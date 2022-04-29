import { createOfferList } from './shop/createOfferList'
import { offers } from '../data/offers'
import { handleFilter } from './shop/filter'
import { resetForm } from './shop/reset'
import { showFilters } from './shop/showFilters'
import { createCartList } from './cart/createCartList'
import { addToCart } from './shop/addToCart'
import { totalPrice } from './cart/totalPrice'

const shopFunctions = () => {
  const hash = location.hash.substring(1)
  if (hash === 'shop') {
    createOfferList(offers)
    addToCart()
    handleFilter()
    resetForm()
    showFilters()
  }
}

const cartFunctions = () => {
  const hash = location.hash.substring(1)
  if (localStorage.getItem('cart') && hash === 'cart') {
    const cart = JSON.parse(localStorage.getItem('cart') || '')
    createCartList(cart)
    totalPrice()
  }
}

export const subpageFunctions = () => {
  shopFunctions()
  cartFunctions()
}
