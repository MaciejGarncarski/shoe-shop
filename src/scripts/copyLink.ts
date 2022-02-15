export const copyLink = () => {
    const links = document.querySelectorAll<HTMLAnchorElement>('[data-copy]')
    const copy = (el: Event) => {
        el.preventDefault()
        if (el !== null && el.target instanceof HTMLElement) {
            const data = el.target.dataset.copy || ''
            if (navigator && navigator.clipboard && navigator.clipboard.writeText)
                navigator.clipboard.writeText(data).then(() => {
                    const parent = el.target as HTMLAnchorElement
                    if (!parent.childNodes[3]) {
                        const notification = document.createElement('p')
                        notification.textContent = 'Copied!'
                        notification.className = 'copy-notification'
                        parent.appendChild(notification)
                        setTimeout(() => parent.removeChild(notification), 60000)
                    }
                })
        }
    }
    links.forEach((link) => {
        link.addEventListener('click', copy)
    })
}
