export const genId = () => {
  return Math.floor(Math.random() * 9999999)
}

export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

export function groupBy(xs, f) {
  return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
}

export function sumBy(arr, field) {
  return arr.map((p) => p[field]).reduce((a, b) => a + b, 0)
}

export function sortBy(xs, f) {
  return xs.slice().sort((a, b) => f(a) - f(b))
}
