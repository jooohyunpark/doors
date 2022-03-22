import { doors, roomData } from '@/data'
import Scene from '@/components/canvas/Scene'
import Canvas from '@/components/canvas'
import { motion } from 'framer-motion'

const Page = () => {
  const data = roomData.filter((room, i) => i !== 0)

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <Canvas>
          <Scene color={'#000000'} doors={doors(data)} />{' '}
        </Canvas>
      </motion.main>
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Doors'
    }
  }
}
