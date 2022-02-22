export const defaultObj = {
  name: '',
  price: 2,
  discount: 1,
  count: 2,
  img: 'string',
}

export type offerTypes = {
  name: string
  price: number
  discount: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1
  img: string
  stars: number
}
