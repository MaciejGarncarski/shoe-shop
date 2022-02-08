const loader = `
<div class="loader">
    <span class="circle"></span>
</div>
`

const fetchPage = async (url: string) => {
  const app = document.querySelector('.app') as HTMLDivElement
  app.innerHTML = loader
  const response = await fetch(url)
  const data = await response.text()
  app.innerHTML = data
}

export { fetchPage }
