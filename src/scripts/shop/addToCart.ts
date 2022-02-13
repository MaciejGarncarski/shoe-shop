import { offers } from '../../data/offers'

type itemType = {
    name: string
    price: number
    discount: number
    count: number
    img: string
}

export const cart: itemType[] = []

const showNotification = () => {
    const overlay = document.querySelector('.added-to-cart') as HTMLDivElement
    const closeBtn = document.querySelector('.added-to-cart__close') as HTMLDivElement
    const active = 'added-to-cart--active'
    overlay.classList.remove(active)
    setTimeout(() => overlay.classList.add(active), 500)
    closeBtn.addEventListener('click', () => overlay.classList.remove(active))
}

if (localStorage.getItem('cart')) {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '')
    cartItems.forEach((item: itemType) => cart.push(item))
}

export const addToCart = () => {
    const addBtn = document.querySelectorAll('.product__cart-btn')

    addBtn.forEach((btn) => {
        const currentItem = btn.parentElement?.childNodes[3] as HTMLParagraphElement

        const handleClick = () => {
            const { name, price, discount, img } = offers.find(({ name }) => currentItem.textContent === name) || {
                name: '',
                img: '',
                price: 0,
                discount: 1,
            }
            const item: itemType = {
                name,
                price: discount * price,
                discount,
                img: img,
                count: 1,
            }
            if (cart.find(({ name }) => name === item.name)) {
                const current: itemType = cart.find(({ name }) => name === item.name) || {
                    name: '',
                    price: 2,
                    discount: 1,
                    count: 2,
                    img: 'string',
                }
                current.count++
            } else {
                cart.push(item)
            }
            console.log()
            localStorage.setItem('cart', JSON.stringify(cart))
            console.log(cart)
            showNotification()
        }

        btn.addEventListener('click', handleClick)
    })
}
