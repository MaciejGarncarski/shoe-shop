import { offers } from '../../data/offers'
import { addToCart } from './addToCart'
import { createOfferList } from './createOfferList'

export const filterOffers = () => {
  const minPrice = document.querySelector('#min-price') as HTMLInputElement
  const maxPrice = document.querySelector('#max-price') as HTMLInputElement
  const markedStars = document.querySelectorAll('.clicked')
  console.log(markedStars)

  const filteredOffers = offers.filter(({ price, discount, stars }) => {
    const itemPrice: number = discount * price
    const filterByMin: boolean = !minPrice.valueAsNumber || minPrice.valueAsNumber <= itemPrice
    const filterByMax: boolean = !maxPrice.valueAsNumber || maxPrice.valueAsNumber >= itemPrice
    const filterByStars: boolean = !markedStars.length || markedStars.length === stars

    return filterByMin && filterByMax && filterByStars
  })

  createOfferList(filteredOffers)
  addToCart()
}
