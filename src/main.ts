import './scss/style.scss'
import { checkIsHomepage } from './scripts/checkIsHomepage'
import { changePages } from './scripts/changePages'
import { setActivePage } from './scripts/setActivePage'
import { updateFooter } from './scripts/updateFooter'
import { activePage } from './scripts/activePage'
import { checkIsOnline } from './scripts/checkIsOnline'

setActivePage()
checkIsHomepage()
changePages()
updateFooter()
activePage()
checkIsOnline()
