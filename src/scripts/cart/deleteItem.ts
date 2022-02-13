import { createCartList } from './createCartList'

type test = {
    name: string
}

export const deleteItem = () => {
    const deleteBtns = document.querySelectorAll('.item__delete-btn')
    if (localStorage.getItem('cart')) {
        const cart = JSON.parse(localStorage.getItem('cart') || '')
        deleteBtns.forEach((btn) => {
            const currentItem = btn.parentElement?.childNodes[3]

            btn.addEventListener('click', () => {
                const newList = cart.filter(({ name }: test) => name !== currentItem?.textContent)
                console.log(newList)
                localStorage.setItem('cart', JSON.stringify(newList))
                createCartList(newList)
            })
        })
    }
}
