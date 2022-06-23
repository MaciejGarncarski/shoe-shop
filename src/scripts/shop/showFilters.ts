const onClick = () => {
  const btn = document.querySelector('.show-filters') as HTMLDivElement
  const filtersContainer = document.querySelector('.filters') as HTMLDivElement
  const filters = document.querySelector('.filters__form') as HTMLFormElement
  const activeClass = 'filters__form--active'

  filters.classList.toggle(activeClass)
  filtersContainer.classList.toggle('filters--active')
  btn.classList.toggle('show-filters--active')

  if (filters.classList.contains(activeClass)) {
    btn.textContent = 'Hide Filters'
  } else {
    btn.textContent = 'Show Filters'
  }
}

export const showFilters = () => {
  const btn = document.querySelector('.show-filters') as HTMLDivElement
  btn.addEventListener('click', onClick)
}
