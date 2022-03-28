import { getRandomInt, shuffledArray } from '@/utils'

export const doorConfig = {
  width: 10,
  height: 10 * 1.618,
  range: [-5, 5],
  offset: 4
}

export const roomData = [
  { id: 0, color: '#000000' },
  { id: 1, color: '#d7c5ed' },
  { id: 2, color: '#aed3e1' }, //fbe404
  { id: 3, color: '#d0f7d9' }, //FF5588
  { id: 4, color: '#a2d5ab' },
  { id: 5, color: '#e5efc1' },
  { id: 6, color: '#758fce' },
  { id: 7, color: '#558080' },
  { id: 8, color: '#f2c846' },
  { id: 9, color: '#96c193' },
  { id: 10, color: '#ff9966' },
  { id: 11, color: '#0b86aa' }
]

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
