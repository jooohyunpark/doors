import Head from 'next/head'
import Room from '@/components/Room'
import Scene from '@/components/Scene'
import { doors, roomData } from '@/data'

const Page = () => {
  const data = [roomData[0], roomData[1]]

  return (
    <Room>
      <Head>
        <title>Room 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Scene color={roomData[2].color} doors={doors(data)} />
      </main>
    </Room>
  )
}

export default Page
