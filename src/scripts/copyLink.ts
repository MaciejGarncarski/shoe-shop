const createNotification = (parent: HTMLSpanElement) => {
  const notification = document.createElement('p')
  notification.innerHTML = '<span class="fa-solid fa-check"></span> Copied'
  notification.className = 'footer__copy-notification'
  parent.appendChild(notification)
}

const hasClipboard = () => navigator && navigator.clipboard && navigator.clipboard.writeText

const copy = (el: ClipboardEvent | MouseEvent) => {
  if (el.target instanceof HTMLSpanElement) {
    const data = el.target.dataset.copy || ''
    if (hasClipboard())
      navigator.clipboard
        .writeText(data)
        .then(() => {
          const parent = el.target as HTMLSpanElement
          const copiedContainer = parent.querySelector('.footer__copy-notification')
          if (!copiedContainer) {
            createNotification(parent)
          } else {
            parent.querySelector('.footer__copy-notification')?.remove()
            createNotification(parent)
          }
        })
        .catch((e) => console.error(e))
  }
}

export const copyLink = () => {
  const links = document.querySelectorAll<HTMLSpanElement>('[data-copy]')
  links.forEach((link) => link.addEventListener('click', copy))
}
