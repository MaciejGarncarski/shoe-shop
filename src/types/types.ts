type discount = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1
export type stars = 1 | 2 | 3 | 4 | 5

export type item = {
  name: string
  price: number
  discount: discount
  img: string
  stars?: stars
}

export type itemCount = { count: number }

export type cartItem = item & itemCount
