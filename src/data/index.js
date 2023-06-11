import { getRandomInt, shuffledArray } from '@/utils'
// const randomColor = require('randomcolor')

export const doorConfig = {
  width: 10,
  height: 10 * 1.618,
  range: [-5, 5],
  offset: 4
}

// export const roomData = [
//   { id: 0, color: '#000000' },
//   ...randomColor({ count: 10 }).map((color, i) => {
//     return { color: color, id: i + 1 }
//   })
// ]

export const roomData = [
  { id: 0, color: '#000000' },
  { id: 1, color: '#ff0000' },
  { id: 2, color: '#00ff00' },
  { id: 3, color: '#0000ff' },
  { id: 4, color: '#00ffff' },
  { id: 5, color: '#ff00ff' },
  { id: 6, color: '#ffff00' },
  { id: 7, color: '#ffffff' }
]

export const doors = (data = [{ color: 0xffffff, id: 0 }]) => {
  const array = []

  const { offset, range } = doorConfig

  const xArray = shuffledArray(range[0], range[1])
  const zArray = shuffledArray(range[0], range[1])

  for (let i = 0; i < data.length; i++) {
    array.push({
      position: [xArray.pop() * doorConfig.width * offset, 0, zArray.pop() * doorConfig.width * offset],
      rotation: [0, Math.PI * getRandomInt(-2, 2) * 0.5, 0],
      color: data[i].color,
      id: data[i].id
    })
  }

  return array
}
