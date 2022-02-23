import './scss/style.scss'
import { checkIsHomepage } from './scripts/checkIsHomepage'
import { changePages } from './scripts/changePages'
import { setActivePage } from './scripts/setActivePage'
import { mobileMenu } from './scripts/mobileMenu'
import { checkIsOnline } from './scripts/checkIsOnline'
import { copyLink } from './scripts/copyLink'
import { itemCount } from './scripts/cart/itemCount'

setActivePage()
checkIsHomepage()
changePages()
mobileMenu()
itemCount()
copyLink()
checkIsOnline()
