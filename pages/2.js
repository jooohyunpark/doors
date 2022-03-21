import Head from 'next/head'
import Room from '@/components/Room'
import Scene from '@/components/Scene'
import { doors } from '@/data'

const Page = () => {
  const data = [
    { color: 0xffffff, url: '/' },
    { color: 0x00ffff, url: '/1' }
  ]

  return (
    <Room>
      <Head>
        <title>Room 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Scene color={0x00ffff} doors={doors(data)} />
      </main>
    </Room>
  )
}

export default Page
