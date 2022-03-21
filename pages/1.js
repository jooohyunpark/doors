import Head from 'next/head'
import Room from '@/components/Room'
import Scene from '@/components/Scene'

const Page = () => {
  return (
    <Room>
      <Head>
        <title>Room 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Scene color={0x00ffff} />
      </main>
    </Room>
  )
}

export default Page
