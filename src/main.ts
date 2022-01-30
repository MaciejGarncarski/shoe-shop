import './scss/style.scss'
import { checkIsHomepage } from "./scripts/checkIsHomepage"
import { changePages } from "./scripts/changePages"
import { setActivePage } from './scripts/setActivePage';
import { updateFooter } from "./scripts/updateFooter";
import { menuButton } from './scripts/menuButton';

setActivePage();
checkIsHomepage();
changePages();
updateFooter();
menuButton();