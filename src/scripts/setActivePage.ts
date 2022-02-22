import { createOfferList } from './shop/createOfferList'
import { offers } from '../data/offers'
import { handleFilter } from './shop/filter'
import { resetForm } from './shop/reset'
import { showFilters } from './shop/showFilters'
import { createCartList } from './cart/createCartList'
import { deleteItem } from './cart/deleteItem'
import { addItems } from './cart/addItems'
import { addToCart } from './shop/addToCart'
import { totalPrice } from './cart/totalPrice'

const shopFunctions = (linkParent: HTMLLIElement) => {
  if (linkParent.dataset.to === 'shop') {
    createOfferList(offers)
    addToCart()
    handleFilter()
    resetForm()
    showFilters()
  }
}

const cartFunctions = (linkParent: HTMLLIElement) => {
  if (localStorage.getItem('cart')) {
    const data = JSON.parse(localStorage.getItem('cart') || '')
    if (linkParent.dataset.to === 'cart') {
      if (localStorage.getItem('cart')) {
        createCartList(data)
        addItems(data)
      }
      deleteItem()
      totalPrice()
    }
  }
}

export const setActivePage = () => {
  const linkList = document.querySelectorAll<HTMLAnchorElement>('.nav__link')

  linkList.forEach((link) => {
    const linkParent = link.parentNode as HTMLLIElement
    const hash = location.hash.substring(1)
    link.classList.remove('nav__link--active')
    if (hash === linkParent.dataset.to) {
      link.classList.add('nav__link--active')
      shopFunctions(linkParent)
      cartFunctions(linkParent)
    } else if (hash === '') {
      linkList[0].classList.add('nav__link--active')
    }
  })
}
