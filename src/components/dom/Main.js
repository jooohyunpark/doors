import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Palette = dynamic(() => import('@/components/dom/Palette'), {
  ssr: false
})

const Main = ({ children = null, id = '' }) => {
  return (
    <motion.main
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Palette />
      {children}
    </motion.main>
  )
}

export default Main
