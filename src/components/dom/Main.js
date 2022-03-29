import { motion } from 'framer-motion'

const Main = ({ children = null, id = '' }) => {
  return (
    <motion.main
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.main>
  )
}

export default Main
