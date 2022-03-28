import { getRandomInt, shuffledArray } from '@/utils'

export const doorConfig = {
  width: 10,
  height: 10 * 1.618,
  range: [-5, 5],
  offset: 4
}

const pantone_colors = {
  2009: '#efc050',
  2010: '#45b8ac',
  2011: '#ff6586',
  2012: '#e2492f',
  2013: '#009b77',
  2014: '#b565a7',
  2015: '#ad655f',
  2016: ['#f2ddde', '#89abe3'],
  2017: '#84bd00',
  2018: '#654ea3',
  2019: '#ff6d70',
  2020: '#0f4c81',
  2021: ['#939597', '#f5df4d'],
  2022: '#6667AB'
}

export const roomData = [
  { id: 0, color: '#000000' },
  { id: 1, color: pantone_colors[2010] },
  { id: 2, color: pantone_colors[2019] },
  { id: 3, color: '#fc8a17' },
  { id: 4, color: '#00573f' },
  { id: 5, color: pantone_colors[2009] },
  { id: 6, color: '#d01c1f' },
  { id: 7, color: pantone_colors[2016][0] },
  { id: 8, color: pantone_colors[2017] },
  { id: 9, color: pantone_colors[2022] },
  { id: 10, color: '#0018a8' },
  { id: 11, color: pantone_colors[2021][0] }
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
