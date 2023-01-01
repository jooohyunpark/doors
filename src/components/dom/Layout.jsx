import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { motion } from 'framer-motion'

const Layout = forwardRef(({ children, id = 0, ...props }, ref) => {
  const localRef = useRef()

  return (
    <motion.main
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}>
      <div
        ref={mergeRefs([ref, localRef])}
        className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-zinc-900 text-gray-50'>
        {children}
      </div>
    </motion.main>
  )
})
Layout.displayName = 'Layout'

export default Layout
