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

const setActivePage = () => {
    const linkList = document.querySelectorAll<HTMLAnchorElement>('.link__anchor')

    linkList.forEach((link) => {
        link.classList.remove('link__anchor--active')
        const linkParent = link.parentNode as HTMLLIElement
        const hash = location.hash.substring(1)

        const shopFunctions = () => {
            if (linkParent.dataset.to === 'shop') {
                createOfferList(offers)
                addToCart()
                handleFilter()
                resetForm()
                showFilters()
            }
        }

        const cartFunctions = () => {
            if (linkParent.dataset.to === 'cart') {
                if (localStorage.getItem('cart')) {
                    createCartList(JSON.parse(localStorage.getItem('cart') || ''))
                    addItems(JSON.parse(localStorage.getItem('cart') || ''))
                }
                deleteItem()
                totalPrice()
            }
        }

        if (hash === linkParent.dataset.to) {
            link.classList.add('link__anchor--active')
            shopFunctions()
            cartFunctions()
        } else if (hash === '') {
            linkList[0].classList.add('link__anchor--active')
        }
    })
}

export { setActivePage }
