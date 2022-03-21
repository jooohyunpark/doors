import Head from 'next/head'
import Room from '@/components/Room'
import Scene from '@/components/Scene'

const Home = () => {
  return (
    <Room>
      <Head>
        <title>Doors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Scene />
      </main>
    </Room>
  )
}

export default Home
