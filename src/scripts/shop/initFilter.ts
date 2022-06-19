import debounce from 'lodash.debounce'
import { filterOffers } from './filterOffers'

export const initFilters = () => {
  const form = document.querySelector('form') as HTMLFormElement
  const starsContainer = document.querySelector('.filters__stars-container') as HTMLDivElement
  const stars = document.querySelectorAll<HTMLDivElement>('.filters__star')

  const starsArray = Array.from(stars)
  const activeClass = 'filters__star--active'

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

  const addStarClasses = (mouseEvent: MouseEvent, isCheckbox?: boolean) => {
    removeActiveClass()
    const target = mouseEvent.target as HTMLImageElement
    const getParentElement = () => {
      if (isCheckbox) {
        return target.parentElement as HTMLDivElement
      }
      const parentOfImg = target.parentElement as HTMLLabelElement
      return parentOfImg.parentElement as HTMLDivElement
    }
    const targetParent = getParentElement()
    const hoveredStar = starsArray.indexOf(targetParent)
    const markedStars = starsArray.filter((markedStar) => starsArray.indexOf(markedStar) <= hoveredStar)
    markedStars.forEach((markedStar) => {
      const checkbox = markedStar.querySelector('.filters__star-checkbox') as HTMLInputElement
      checkbox.checked = true
      if (isCheckbox) {
        markedStar.classList.add(activeClass, 'clicked')
      } else {
        markedStar.classList.add(activeClass)
      }
    })
  }

  const markStar = (star: HTMLDivElement) => {
    const checkbox = star.querySelector('.filters__star-checkbox') as HTMLInputElement
    star.addEventListener('mouseover', (mouseEvent: MouseEvent) => addStarClasses(mouseEvent))
    checkbox.addEventListener('click', (mouseEvent: MouseEvent) => addStarClasses(mouseEvent, true))
  }

  stars.forEach(markStar)
  if (form) {
    form.addEventListener('input', debounce(filterOffers, 350))
  }
}
