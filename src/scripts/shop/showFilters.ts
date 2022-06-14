const onClick = () => {
  const btn = document.querySelector('.show-filters') as HTMLDivElement
  const filters = document.querySelector('.filters') as HTMLDivElement
  document.body.classList.toggle('locked')
  filters.classList.toggle('filters--active')
  btn.classList.toggle('show-filters--active')
  if (filters.classList.contains('filters--active')) {
    btn.textContent = 'Hide Filters'
  } else {
    btn.textContent = 'Show Filters'
  }
}

export const showFilters = () => {
  const btn = document.querySelector('.show-filters') as HTMLDivElement
  btn.addEventListener('click', onClick)
}
