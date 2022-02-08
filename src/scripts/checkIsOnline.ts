const checkIsOnline = () => {
    const offlinePopup = document.querySelector('.offline') as HTMLDivElement

    if (navigator.onLine) {
        offlinePopup.classList.add('offline--active')
    } else {
        offlinePopup.classList.remove('offline--active')
    }
}
window.addEventListener('offline', checkIsOnline)
window.addEventListener('online', checkIsOnline)

export { checkIsOnline }
