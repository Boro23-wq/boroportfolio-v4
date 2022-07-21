export const kebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-')

export const readableDateString = (string) => {
  const ds = string.split(' ').join('T')
  const date = new Date(ds)

  return date.toDateString()
}

export const truncate = (string, n) => {
  return string.length > n ? string.substr(0, n - 1) + '&...' : string
}
