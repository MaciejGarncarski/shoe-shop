import './scss/index.scss'
import { handleLocation, changePages } from './scripts/changePages'
import { markActivePage } from './scripts/markActivePage'
import { enableMobileMenu } from './scripts/enableMobileMenu'
import { copyLink } from './scripts/copyLink'
import { countCartItems } from './scripts/cart/countCartItems'
import { saveNewCart } from './scripts/cart/saveNewCart'
import { initFilters } from './scripts/shop/initFilter'

markActivePage()
changePages()
enableMobileMenu()
handleLocation()
copyLink()
countCartItems()
initFilters()

if (!localStorage.getItem('cart')) {
  saveNewCart([])
}
