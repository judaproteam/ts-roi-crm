export const genId = () => {
  return Math.floor(Math.random() * 9999999)
}

export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}
