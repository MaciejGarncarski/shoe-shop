type discount = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1

export type offerTypes = {
  name: string
  price: number
  discount: discount
  img: string
  stars: number
}

export type itemTypes = {
  name: string
  price: number
  discount: discount
  count: number
  img: string
}
