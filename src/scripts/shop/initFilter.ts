import debounce from 'lodash.debounce'
import { filterOffers } from './filterOffers'

const getParentElement = (target: HTMLImageElement, isCheckbox?: boolean) => {
  if (isCheckbox) {
    return target.parentElement as HTMLDivElement
  }
  const parentOfImg = target.parentElement as HTMLLabelElement
  return parentOfImg.parentElement as HTMLDivElement
}

export const initFilters = () => {
  const form = document.querySelector('form') as HTMLFormElement
  const starsContainer = document.querySelector('.filters__stars-container') as HTMLDivElement
  const stars = document.querySelectorAll<HTMLDivElement>('.filters__star')
  const starsArray = Array.from(stars)
  const activeClass = 'filters__star--active'

  const removeActiveClass = () => stars.forEach((star) => star.classList.remove(activeClass, 'clicked'))

  starsContainer.addEventListener('mouseleave', () => {
    stars.forEach((star) => {
      if (!star.classList.contains('clicked')) {
        star.classList.remove(activeClass)
      }
    })
  })

  const markStars = (mouseEvent: MouseEvent, isCheckbox?: boolean) => {
    const target = mouseEvent.target as HTMLImageElement
    const targetParent = getParentElement(target, isCheckbox)
    const hoveredStar = starsArray.indexOf(targetParent)
    const markedStars = starsArray.filter((markedStar) => starsArray.indexOf(markedStar) <= hoveredStar)

    removeActiveClass()

    markedStars.forEach((markedStar) => {
      if (isCheckbox) {
        markedStar.classList.add(activeClass, 'clicked')
      } else {
        markedStar.classList.add(activeClass)
      }
    })
  }

  const markStar = (star: HTMLDivElement) => {
    const checkbox = star.querySelector('.filters__star-checkbox') as HTMLInputElement
    star.addEventListener('mouseover', (mouseEvent: MouseEvent) => markStars(mouseEvent))
    checkbox.addEventListener('click', (mouseEvent: MouseEvent) => markStars(mouseEvent, true))
  }

  stars.forEach(markStar)
  form.addEventListener('input', debounce(filterOffers, 350))
}
