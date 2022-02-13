import { offerTypes } from '../../types/types'
import { totalPrice } from './totalPrice'

type itemType = offerTypes & {
    count: number
}

export const addItems = (data: itemType[]) => {
    const inputList = document.querySelectorAll<HTMLInputElement>('.item__count')

    inputList.forEach((input) => {
        input.addEventListener('input', () => {
            const currentName = input.parentElement?.parentElement?.childNodes[3] as HTMLParagraphElement
            const changedPrice = input.parentElement?.childNodes[1] as HTMLParagraphElement
            const currentItemData = data.find(({ name }) => name === currentName.textContent) || { price: 0, count: 1 }
            const oldData = data.filter(({ name }) => name !== currentName.textContent)
            const count = +input.value
            changedPrice.textContent = `${currentItemData.price * count}€ for`
            currentItemData.count = count
            const newData = [currentItemData, ...oldData]
            localStorage.setItem('cart', JSON.stringify(newData))
            totalPrice()
        })
    })
}
