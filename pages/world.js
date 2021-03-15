import Head from 'next/head'
import Scene2 from '@/components/scene/Scene2'
import { motion } from 'framer-motion'

const World = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}>
      <Head>
        <title>Doors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Scene2 />
      </main>

      <footer></footer>
    </motion.div>
  )
}

export default World
