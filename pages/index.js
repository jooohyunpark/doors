import Head from 'next/head'
import Scene from '@/components/scene/Scene'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Doors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Scene />
      </main>
      <footer></footer>
    </div>
  )
}

export default Home
