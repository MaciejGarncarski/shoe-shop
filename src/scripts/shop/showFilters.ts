const onClick = () => {
  const btn = document.querySelector('.show-filters') as HTMLDivElement
  const filters = document.querySelector('.filters__form') as HTMLDivElement
  filters.classList.toggle('filters__form--active')
  btn.classList.toggle('show-filters--active')
  if (filters.classList.contains('filters__form--active')) {
    btn.textContent = 'Hide Filters'
  } else {
    btn.textContent = 'Show Filters'
  }
}

export const showFilters = () => {
  const btn = document.querySelector('.show-filters') as HTMLDivElement
  btn.addEventListener('click', onClick)
}
