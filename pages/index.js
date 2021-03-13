import Head from 'next/head'
import SceneHome from '@/components/scene/Scene'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}>
      <Head>
        <title>home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="home">
          <SceneHome />
        </div>
      </main>

      <footer></footer>
    </motion.div>
  )
}

export default Home
