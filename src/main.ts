import './scss/main.scss'
import { changePages, dynamicHash } from './scripts/changePages'
import { markActivePage } from './scripts/markActivePage'
import { mobileMenu } from './scripts/mobileMenu'
import { copyLink } from './scripts/copyLink'
import { itemCount } from './scripts/cart/itemCount'

markActivePage()
changePages()
mobileMenu()
dynamicHash()
itemCount()
copyLink()

if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]))
}
