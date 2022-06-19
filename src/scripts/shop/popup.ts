export const addedToCartPopup = (timeout: ReturnType<typeof setTimeout>) => {
  const overlay = document.querySelector('.added-to-cart') as HTMLDivElement
  const closeBtn = document.querySelector('.added-to-cart__close-btn') as HTMLButtonElement
  const active = 'added-to-cart--active'

  window.clearTimeout(timeout)

  overlay.classList.add(active)
  timeout = window.setTimeout(() => overlay.classList.remove(active), 2750)

  const onBtnClick = () => {
    window.clearTimeout(timeout)
    overlay.classList.remove(active)
  }

  closeBtn.addEventListener('click', onBtnClick)
}
