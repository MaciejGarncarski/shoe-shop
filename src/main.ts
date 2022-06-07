import './scss/main.scss'
import { changePages, dynamicHash } from './scripts/changePages'
import { setActivePage } from './scripts/setActivePage'
import { mobileMenu } from './scripts/mobileMenu'
import { copyLink } from './scripts/copyLink'
import { itemCount } from './scripts/cart/itemCount'

setActivePage()
changePages()
mobileMenu()
dynamicHash()
itemCount()
copyLink()

if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]))
}
