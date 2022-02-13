
type offerTypes = {
    name: string
    price: number
    discount: number
    img: string
    stars: number
}[]

export const createOfferList = (data: offerTypes) => {
    const offersContainer = document.querySelector('.offers') as HTMLDivElement
    if (offersContainer) {
        offersContainer.textContent = ''
        offersContainer.innerHTML = data
            .map(({ name, price, discount, img, stars }) => {
                const discountValue = discount * price
                const withDiscount = `<p class="product__price product__price--discounted">${price}€</p><p class="product__discount">${discountValue}€</p>`
                const withoutDiscount = `<p class="product__price">${price}€</p>`

                const starCount = [...Array(stars)]

                const template = `
                <li class="product">
                    <img class="product__img" src="/images/shoes/${img}.png" alt="${name}" />
                    <h2 class="product__name">${name}</h2>
                    <button type="button" class="product__cart-btn">
                        <span class="fas fa-cart-plus"></span>
                    </button>
                    <div class="product__price-container">
                        ${discount !== 1 ? withDiscount : withoutDiscount}
                    </div>
                    <div class="product__stars-container">
                        ${starCount.map(() => `<span class="gold fa-solid fa-star"></span>`).join('')}
                    </div>
                </li>
            `
                return template
            })
            .join('')
        if (offersContainer.innerHTML === '') {
            offersContainer.innerHTML = '<li><p>No items found.</p></li>'
        }
    }
}
