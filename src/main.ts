import './scss/main.scss'
import { handleLocation, changePages } from './scripts/changePages'
import { markActivePage } from './scripts/markActivePage'
import { enableMobileMenu } from './scripts/enableMobileMenu'
import { copyLink } from './scripts/copyLink'
import { countCartItems } from './scripts/cart/countCartItems'
import { saveNewCart } from './scripts/cart/saveNewCart'

markActivePage()
changePages()
enableMobileMenu()
handleLocation()
copyLink()
countCartItems()

if (!localStorage.getItem('cart')) {
  saveNewCart([])
}
