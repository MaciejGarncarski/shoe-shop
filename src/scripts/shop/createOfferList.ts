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
    }

    const create = (element: string) => document.createElement(element)
    const append = (parent: Element, child: Element) => parent.appendChild(child)
    const addClass = (element: Element, className: string) => element.classList.add(className)
    const setClass = (element: Element, className: string) => element.setAttribute('class', className)

    data.forEach(({ name, price, discount, img, stars }) => {
        const container = create('div')
        setClass(container, 'product')
        offersContainer?.appendChild(container)

        const productImage = document.createElement('img')
        productImage.src = `/images/shoes/${img}.png`
        productImage.alt = name
        setClass(productImage, 'product__img')
        append(container, productImage)

        const productName = create('h2')
        productName.textContent = name
        setClass(productName, 'product__name')
        append(container, productName)

        const priceContainer = create('div')
        setClass(priceContainer, 'product__price-container')
        append(container, priceContainer)

        const priceTag = create('p')
        priceTag.textContent = `${price.toString()}€`
        setClass(priceTag, 'product__price')
        append(priceContainer, priceTag)

        if (discount !== 1) {
            const discountTag = document.createElement('p')
            const discountValue = discount * price
            discountTag.textContent = `${Math.round(price - discountValue).toString()}€`
            setClass(discountTag, 'product__discount')
            addClass(priceTag, 'discounted')
            append(priceContainer, discountTag)
        }

        const addToCart = create('div')
        setClass(addToCart, 'product__cart-btn')
        addToCart.innerHTML = `<span class="fas fa-cart-plus"></span>`
        append(container, addToCart)

        const starsContainer = create('div')
        for (let i = 1; i <= stars; i++) {
            const star = create('span')
            setClass(star, 'gold fas fa-star')
            append(starsContainer, star)
        }
        setClass(starsContainer, 'product__stars-container')
        append(container, starsContainer)
    })
}
