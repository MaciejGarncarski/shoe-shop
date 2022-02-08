import { createOfferList } from './shop/createOfferList'
import { offers } from '../data/offers'
import { handleFilter } from './shop/filter'
import { pickDisplayStyle } from './pickDisplayStyle'
import { resetForm } from './shop/reset'

const setActivePage = () => {
    const linkList = document.querySelectorAll<HTMLAnchorElement>('.link__anchor')

    linkList.forEach((link) => {
        link.classList.remove('link__anchor--active')
        const linkParent = link.parentNode as HTMLLIElement
        const hash = location.hash.substring(1)

        const shopFunctions = () => {
            if (linkParent.dataset.to === 'shop') {
                createOfferList(offers)
                handleFilter()
                resetForm()
                pickDisplayStyle()
            }
        }

        if (hash === linkParent.dataset.to) {
            link.classList.add('link__anchor--active')
            shopFunctions()
        } else if (hash === '') {
            linkList[0].classList.add('link__anchor--active')
        }
    })
}

export { setActivePage }
