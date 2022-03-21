import { getRandomInt, shuffledArray } from '@/utils'

export const doorConfig = {
  width: 20,
  height: 20 * 1.618
}

export const roomData = [
  { color: 0x000000, url: '/' },
  { color: 0x0000ff, url: '/1' },
  { color: 0x00ffff, url: '/2' },
  { color: 0xffffff, url: '/3' }
]

export const doors = (data = [{ color: 0xffffff, url: '/' }]) => {
  const array = []

  const xArray = shuffledArray(-5, 5)
  const zArray = shuffledArray(-5, 5)

  for (let i = 0; i < data.length; i++) {
    array.push({
      position: [xArray.pop() * doorConfig.width * 2, 0, zArray.pop() * doorConfig.width * 2],
      rotation: [0, Math.PI * getRandomInt(-2, 2) * 0.5, 0],
      color: data[i].color,
      url: data[i].url
    })
  }

  return array
}
