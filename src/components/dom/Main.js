import { motion } from 'framer-motion'

const Main = ({ children = null }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      door={{ opacity: 0 }}
    >
      {children}
    </motion.main>
  )
}

export default Main
