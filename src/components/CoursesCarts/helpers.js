export const chunk = (arr) => {
  const size = 6
  const result = []
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    result.push(arr.slice(i * size, i * size + size))
  }
  return result
}

export const setSrc = (CART_IMG, index) => {
  let number = index
  if (index + 1 > CART_IMG.length) {
    if (index < 10) {
      number = index - CART_IMG.length
    } else {
      number = index.toString().slice(-1)
    }
  }
  return CART_IMG[number]
}
