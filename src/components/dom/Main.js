import { motion } from 'framer-motion'
import Palette from '@/components/dom/Palette'

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
