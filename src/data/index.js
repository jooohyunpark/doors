import { getRandomInt, shuffledArray } from '@/utils'

export const doorConfig = {
  width: 10,
  height: 10 * 1.618
}

export const roomData = [
  { color: '#000000', url: '/' },
  { color: '#FF0000', url: '/room/1' },
  { color: '#00ffff', url: '/room/2' },
  { color: '#00ff00', url: '/room/1' },
  { color: '#181818', url: '/room/2' },
  { color: '#5200ff', url: '/room/1' },
  { color: '#5200ff', url: '/room/2' },
  { color: '#5200ff', url: '/room/2' },
  { color: '#5200ff', url: '/room/1' },
  { color: '#5200ff', url: '/room/2' },
  { color: '#5200ff', url: '/room/1' },
  { color: '#5200ff', url: '/room/2' }
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
