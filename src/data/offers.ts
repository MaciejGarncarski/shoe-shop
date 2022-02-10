type offerTypes = {
    name: string
    price: number
    discount: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1
    img: string
    stars: number
}

export const offers: offerTypes[] = [
    {
        name: 'Nike Air Max 270',
        price: 300,
        discount: 1,
        img: 'air-max-270',
        stars: 5,
    },
    {
        name: 'Adidas',
        price: 150,
        discount: 0.5,
        img: 'adidas',
        stars: 2,
    },
    {
        name: 'Nike Vapormax',
        price: 300,
        discount: 0.3,
        img: 'vapormax',
        stars: 3,
    },
    {
        name: 'YZY Boots',
        price: 999,
        discount: 1,
        img: 'yzy',
        stars: 4,
    },
    {
        name: 'Puma RS-X',
        price: 621,
        discount: 1,
        img: 'puma',
        stars: 4,
    },
]
