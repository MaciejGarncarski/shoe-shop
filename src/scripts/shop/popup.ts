export const addedToCartPopup = (timeout: ReturnType<typeof setTimeout>) => {
  const overlay = document.querySelector('.added-to-cart') as HTMLDivElement
  const closeBtn = document.querySelector('.added-to-cart__close-btn') as HTMLDivElement
  const active = 'added-to-cart--active'
  window.clearTimeout(timeout)
  overlay.classList.add(active)
  timeout = window.setTimeout(() => overlay.classList.remove(active), 10000)

  closeBtn.focus()

  const onBtnClick = () => {
    window.clearTimeout(timeout)
    overlay.classList.remove(active)
  }

  closeBtn.addEventListener('click', onBtnClick)
}
