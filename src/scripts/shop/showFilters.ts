const handleClick = () => {
    const btn = document.querySelector('.show-filters') as HTMLDivElement
    const filters = document.querySelector('.filters')
    filters?.classList.toggle('filters--active')
    document.body.classList.toggle('locked')
    btn?.classList.toggle('show-filters--active')
}

export const showFilters = () => {
    const btn = document.querySelector('.show-filters')
    btn?.addEventListener('click', handleClick)
}
