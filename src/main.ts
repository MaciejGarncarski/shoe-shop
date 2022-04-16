import './scss/style.scss'
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
