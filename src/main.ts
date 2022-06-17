import './scss/main.scss'
import { changePages, dynamicHash } from './scripts/changePages'
import { markActivePage } from './scripts/markActivePage'
import { enableMobileMenu } from './scripts/enableMobileMenu'
import { copyLink } from './scripts/copyLink'
import { countCartItems } from './scripts/cart/countCartItems'
import { saveNewCart } from './scripts/cart/saveNewCart'

markActivePage()
changePages()
enableMobileMenu()
dynamicHash()
countCartItems()
copyLink()

if (!localStorage.getItem('cart')) {
  saveNewCart([])
}
