import { getRandomInt, shuffledArray } from '@/utils'

export const doorConfig = {
  width: 10,
  height: 10 * 1.618
}

export const roomData = [
  { id: 0, color: '#000000', url: '/' },
  { id: 1, color: '#00008b', url: '/room/1' },
  { id: 2, color: '#468b00', url: '/room/2' },
  { id: 3, color: '#ffc0cb', url: '/room/3' },
  { id: 4, color: '#c0cbff', url: '/room/4' },
  { id: 5, color: '#ffe4c0', url: '/room/5' },
  { id: 6, color: '#ff0f76', url: '/room/6' },
  { id: 7, color: '#53c200', url: '/room/7' },
  { id: 8, color: '#c200b4', url: '/room/8' },
  { id: 9, color: '#4646cc', url: '/room/9' },
  { id: 10, color: '#46cccc', url: '/room/10' },
  { id: 11, color: '#f9d419', url: '/room/11' }
]

export const doors = (data = [{ color: 0xffffff, url: '/' }]) => {
  const array = []

  const range = [-5, 5]
  const offset = 4

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
      url: data[i].url
    })
  }

  return array
}
