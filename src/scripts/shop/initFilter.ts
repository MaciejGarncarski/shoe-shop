import debounce from 'lodash.debounce'
import { filterOffers } from './filterOffers'

export const initFilters = () => {
  const form = document.querySelector('form') as HTMLFormElement
  const starsContainer = document.querySelector('.filters__stars-container') as HTMLDivElement
  const stars = document.querySelectorAll<HTMLImageElement>('.filters__star-icon img')

  const starsArray = Array.from(stars)
  const activeClass = 'filters__star-icon--active'

  if (starsContainer) {
    starsContainer.addEventListener('mouseleave', () => {
      stars.forEach((star) => {
        if (!star.classList.contains('clicked')) {
          star.classList.remove(activeClass)
        }
      })
    })
  }

  const removeActiveClass = () => stars.forEach((star) => star.classList.remove(activeClass, 'clicked'))

  const addStarClasses = (mouseEvent: MouseEvent, click?: boolean) => {
    removeActiveClass()
    const target = mouseEvent.target as HTMLImageElement
    const hoveredStar = starsArray.indexOf(target)
    const markedStars = starsArray.filter((markedStar) => starsArray.indexOf(markedStar) <= hoveredStar)
    markedStars.forEach((markedStar) => {
      if (click) {
        markedStar.classList.add(activeClass, 'clicked')
      } else {
        markedStar.classList.add(activeClass)
      }
    })
  }

  const markStar = (star: HTMLImageElement) => {
    star.addEventListener('mouseover', (mouseEvent: MouseEvent) => addStarClasses(mouseEvent))
    star.addEventListener('click', (mouseEvent: MouseEvent) => {
      addStarClasses(mouseEvent, true)
      filterOffers()
    })
  }

  stars.forEach(markStar)
  if (form) {
    form.addEventListener('input', debounce(filterOffers, 350))
  }
}
