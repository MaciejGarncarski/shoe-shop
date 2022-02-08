const updateFooter = () => {
  const now = new Date()
  const year = now.getFullYear()
  const footerContent = `<a href="https://github.com/maciejgarncarski" target="_blank" rel="noopener norefferer">Maciej Garncarski</a>, ${year}`
    document.querySelector('.footer')!.innerHTML = footerContent
}

export { updateFooter }
