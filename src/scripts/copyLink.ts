const createNotification = (parent: HTMLSpanElement) => {
  const notification = document.createElement('p')
  notification.textContent = 'Copied!'
  notification.className = 'footer__copy-notification'
  parent.appendChild(notification)
}

const hasClipboard = () => navigator && navigator.clipboard && navigator.clipboard.writeText

const copy = (el: Event) => {
  if (el.target instanceof HTMLSpanElement) {
    const data = el.target.dataset.copy || ''
    if (hasClipboard())
      navigator.clipboard
        .writeText(data)
        .then(() => {
          const parent = el.target as HTMLSpanElement
          if (!parent.childNodes[3]) {
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
