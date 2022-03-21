import Head from 'next/head'
import Room from '@/components/Room'
import Scene from '@/components/Scene'
import { doorConfig } from '@/data'
import { getRandomInt, shuffledArray } from '@/utils'

const Home = () => {
  const doors = (num = 10) => {
    const data = []

    const xArray = shuffledArray(-5, 5)
    const zArray = shuffledArray(-5, 5)

    for (let i = 0; i < num; i++) {
      data.push({
        position: [xArray.pop() * doorConfig.width * 2, 0, zArray.pop() * doorConfig.width * 2],
        rotation: [0, Math.PI * getRandomInt(-2, 2) * 0.5, 0],
        color: 0xffffff
      })
    }

    return data
  }

  return (
    <Room>
      <Head>
        <title>Doors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Scene doors={doors(10)} />
      </main>
    </Room>
  )
}

export default Home
