import './scss/main.scss'
import { changePages, dynamicHash } from './scripts/changePages'
import { markActivePage } from './scripts/markActivePage'
import { enableMobileMenu } from './scripts/enableMobileMenu'
import { copyLink } from './scripts/copyLink'
import { itemCount } from './scripts/cart/itemCount'
import { saveNewCart } from './scripts/cart/saveNewCart'

markActivePage()
changePages()
enableMobileMenu()
dynamicHash()
itemCount()
copyLink()

if (!localStorage.getItem('cart')) {
  saveNewCart([])
}
