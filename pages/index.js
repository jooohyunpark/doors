import Head from 'next/head'
import Room from '@/components/Room'
import Scene from '@/components/Scene'
import { doors } from '@/data'

const Home = () => {
  const data = [
    { color: 0x00ffff, url: '/1' },
    { color: 0x00ffff, url: '/2' },
    { color: 0xffffff, url: '/1' },
    { color: 0xffffff, url: '/1' }
  ]

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
