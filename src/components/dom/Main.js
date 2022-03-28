import { motion } from 'framer-motion'
import Colors from '@/components/dom/Colors'

const Main = ({ children = null, id = '' }) => {
  return (
    <motion.main
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Colors />
      {children}
    </motion.main>
  )
}

export default Main
