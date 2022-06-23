import './scss/index.scss'
import { handleLocation, changePages } from './scripts/changePages'
import { markActivePage } from './scripts/markActivePage'
import { copyLink } from './scripts/copyLink'
import { countCartItems } from './scripts/cart/countCartItems'
import { saveNewCart } from './scripts/cart/saveNewCart'

markActivePage()
changePages()
handleLocation()
copyLink()
countCartItems()

if (!localStorage.getItem('cart')) {
  saveNewCart([])
}
