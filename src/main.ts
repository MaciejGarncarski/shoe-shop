import './scss/style.scss'
import { checkIsHomepage } from './scripts/checkIsHomepage'
import { changePages } from './scripts/changePages'
import { setActivePage } from './scripts/setActivePage'
import { activePage } from './scripts/activePage'
import { checkIsOnline } from './scripts/checkIsOnline'
import { copyLink } from './scripts/copyLink'

setActivePage()
checkIsHomepage()
changePages()
activePage()
checkIsOnline()
copyLink()
