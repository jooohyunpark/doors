import { getRandomInt, shuffledArray } from '@/utils'
const randomColor = require('randomcolor')

export const doorConfig = {
  width: 10,
  height: 10 * 1.618,
  range: [-5, 5],
  offset: 4
}

export const roomData = [
  { id: 0, color: '#000000' },
  ...randomColor({ count: 10 }).map((color, i) => {
    return { color: color, id: i + 1 }
  })
]

// export const roomData = [
//   { id: 0, color: '#000000' },
//   { id: 1, color: pantone_colors[2010] },
//   { id: 2, color: '#f7caca' },
//   { id: 3, color: '#fc8a17' },
//   { id: 4, color: '#00573f' },
//   { id: 5, color: pantone_colors[2009] },
//   { id: 6, color: '#fa7268' },
//   { id: 7, color: pantone_colors[2016][0] },
//   { id: 8, color: '#3F8070' },
//   { id: 9, color: pantone_colors[2022] },
//   { id: 10, color: '#0f4c81' },
//   { id: 11, color: pantone_colors[2021][0] }
// ]

export const doors = (data = [{ color: 0xffffff, id: 0 }]) => {
  const array = []

  const { offset, range } = doorConfig

  const xArray = shuffledArray(range[0], range[1])
  const zArray = shuffledArray(range[0], range[1])

  for (let i = 0; i < data.length; i++) {
    array.push({
      position: [
        xArray.pop() * doorConfig.width * offset,
        0,

        zArray.pop() * doorConfig.width * offset
      ],
      rotation: [0, Math.PI * getRandomInt(-2, 2) * 0.5, 0],
      color: data[i].color,
      id: data[i].id
    })
  }

  return array
}
