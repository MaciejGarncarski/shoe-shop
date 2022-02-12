import { offers } from '../../data/offers'

type itemType = {
    name: string
    price: number
    discount: number
    count: number
    img: string
}

export const cart: itemType[] = []
if (localStorage.getItem('cart')) {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '')
    cartItems.forEach((item: itemType) => cart.push(item))
}

const showNotification = () => {
    const overlay = document.querySelector('.added-to-cart') as HTMLDivElement
    const closeBtn = document.querySelector('.added-to-cart__close') as HTMLDivElement
    const active = 'added-to-cart--active'
    overlay.classList.remove(active)
    setTimeout(() => overlay.classList.add(active), 500)
    closeBtn.addEventListener('click', () => overlay.classList.remove(active))
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
            if (cart.find((cartItem) => cartItem.name === item.name)) {
                cart.map((cartItem) => (cartItem.name === item.name ? cartItem.count++ : cartItem.count))
            } else {
                cart.push(item)
            }
            localStorage.setItem('cart', JSON.stringify(cart))
            showNotification()
        }

        btn.addEventListener('click', handleClick)
    })
}
