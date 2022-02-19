export const focusElement = () => {
  const elementList = document.querySelectorAll<HTMLButtonElement>('.item__delete-btn')
  let count = 1
  window.addEventListener('keydown', (el: KeyboardEvent) => {
    if (el.key === 'ArrowUp') {
      count === 0 ? (count = elementList.length - 1) : count--
    } else if (el.key === 'ArrowDown') {
      count === elementList.length - 1 ? (count = 0) : count++
    }
    elementList[count].focus()
  })
}
