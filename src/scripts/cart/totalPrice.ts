import { offerTypes } from '../../types/types'

type itemType = offerTypes & {
    count: number
}

export const totalPrice = () => {
    const total = document.querySelector('.total__price') as HTMLSpanElement
    const cart = JSON.parse(localStorage.getItem('cart') || '')
    const arr: number[] = []
    cart.forEach(({ price, count }: itemType) => {
        const test = price * count
        arr.push(test)
    })
    if (arr.length !== 0) {
        const newPrice = arr.reduce((prev, next) => prev + next)
        if (total) total.textContent = newPrice.toString()
    } else if (total) {
        total.textContent = '0'
    }
}
