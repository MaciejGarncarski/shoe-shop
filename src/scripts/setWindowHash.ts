export const setWindowHash = (link: string | undefined) => {
  if (history.pushState) {
    history.pushState(null, '', `#${link}`)
  } else {
    location.hash = `#${link}`
  }
}
