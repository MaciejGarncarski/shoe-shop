import { deleteItem } from './deleteItem'

type offerTypes = {
    name: string
    price: number
    discount: number
    count: number
    img: string
}

export const createCartList = (data: offerTypes[]) => {
    const container = document.querySelector('.items') as HTMLDivElement
    if (container) {
        container.innerHTML = ''
        container.innerHTML = data
            .map(({ name, price, count, img }: offerTypes) => {
                const template = `
                <li class="item">
                    <img class="item__img" src="/images/shoes/${img}.png" alt="${name}">
                    <p class="item__name">${name}</p>
                    <p class="item__price">${price * count}€ for ${count} items</p>
                    <div class="item__delete-btn"><span class="fa-solid fa-trash-can"></span></div>
                </li>
            `
                return template
            })
            .join('')
        deleteItem()
        if (container.innerHTML === '') {
            container.innerHTML = '<li><p>No items found.</p></li>'
        }
    }
}
