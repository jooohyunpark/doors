import Head from 'next/head'
import Room from '@/components/Room'
import Scene from '@/components/Scene'
import { doors, roomData } from '@/data'

const Home = () => {
  const data = roomData.filter((room, i) => i !== 0)

  return (
    <Room>
      <Head>
        <title>Doors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Scene color={0x000000} doors={doors(data)} />
      </main>
    </Room>
  )
}

export default Home
