import Head from 'next/head'
import Scene2 from '@/components/scene/Scene2'

const World = () => {
  return (
    <div>
      <Head>
        <title>Doors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Scene2 />
      </main>

      <footer></footer>
    </div>
  )
}

export default World
